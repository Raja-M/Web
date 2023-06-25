import { createSlice, nanoid, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

import { sub } from 'date-fns';
import { format } from 'date-fns';
import axios from "axios" ; 

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'

const newsAdapter = createEntityAdapter( {
        sortComparer: ( a, b) => (b.newsId - a.newsId ) 
    }
)

const initialState = newsAdapter.getInitialState({
status: 'idle', 
error: null,
count: 0
})

export const fetchPosts = createAsyncThunk( 'News/fetchPosts', async () => {
    try {
        const response = await axios.get(POST_URL)
        return response.data;
    } catch ( err ){
        return err.message;
    }
})

export const addNewPost = createAsyncThunk( 'News/addNewPost', async (initialPost) => {
    console.log( " adding new post :" + JSON.stringify(initialPost) );
    try {
        const response = await axios.post(POST_URL, initialPost);
       
        return response.data;
    } catch ( err ){
        return err.message;
    }
})

export const updatePost = createAsyncThunk( 'News/updatePost', async (initialPost) => {
    const { id } = initialPost;
    console.log( "UPdate id " + id )
    try {
        const response = await axios.put(`${POST_URL}/${id}`, initialPost)
        return response.data;
    } catch ( err ){
        return err.message;
    }
})

export const deletePost = createAsyncThunk( 'News/deletePost', async (initialPost) => {
    const { id } = initialPost;
    console.log( "deleting id " + id )
    try {
        const response = await axios.delete(`${POST_URL}/${id}`)
        if ( response.status === 200 )
            return initialPost;
        return `${response?.status}:${response?.statusText}`
    } catch ( err ){
        return err.message;
    }
})

const NewsSlice = createSlice({
    name: 'News',
    initialState,
    reducers: {
        /*newsAdded: {
                reducer(state, action) {
                state.news.push(action.payload);
            },
            prepare(title, content, submenucategory, userId  ) {
                return {
                    payload: {
                        id: nanoid(),
                        title: title,
                        content: content,
                        Submenucategory: submenucategory,
                        userId: userId,
                        time: new Date().toDateString(),
                        reactions: {
                            thumsUP: 0,
                            wow: 0,
                            heart: 0
                        },
                         
                    }
                }
            }
        },*/
        reactionAdded( state, action){
            const{ newsId, reaction } = action.payload
            const existingNews = state.entities[newsId]
            if ( existingNews){
                existingNews.reactions[reaction]++;
            }
        },
        increaseCount( state, action){
            state.count = state.count + 1 
        }
    },
    extraReducers (builder) { 
        builder
            .addCase( fetchPosts.pending, (state, action) => {
                 state.status = 'loading'
             })
            .addCase( fetchPosts.fulfilled, ( state, action) => {
                console.log( " Full Filled");
                state.status = 'succeeded';
                let min = 1;

                const loadedPosts = action.payload.map( post => {
                    console.log( "post :" + post);
                    post.content = post.body;
                    post.time = new Date().toDateString();
                    post.reactions =  {
                        thumsUP: 0,
                        wow: 0,
                        heart: 0
                    };
                    return post;
                });
//                state.news =  state.news.concat ( loadedPosts );
                newsAdapter.upsertMany( state, loadedPosts)

            })
            .addCase( fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase( addNewPost.fulfilled, (state, action) => {
                action.payload.id = nanoid();
                action.payload.content = action.payload.body;
                action.payload.userId = Number(action.payload.userId);
                action.payload.time = new Date().toDateString();
                action.payload.reactions =  {
                    thumsUP: 0,
                    wow: 0,
                    heart: 0
                };
                // state.news.push( action.payload )
                newsAdapter.addOne(state, action.payload)

                console.log( " Status after adding : " +  state.status );
            })   
            .addCase( updatePost.fulfilled, (state, action) => {
                if ( !action.payload?.id ){
                    console.log( 'Update could not complete')
                    console.log( action.payload)
                    return;
                }
                //const { id } = action.payload;
                action.payload.time = new Date().toDateString();
                action.payload.content = action.payload.body;
                action.payload.reactions =  {
                    thumsUP: 0,
                    wow: 0,
                    heart: 0
                };
                //const news = state.news.filter( news => news.id !== id );
                //state.news = [ ...news, action.payload]
                newsAdapter.upsertOne( state, action.payload) 
            }) 
            .addCase( deletePost.fulfilled, (state, action) => {
                if ( !action.payload?.id ){
                    console.log( 'Delete could not complete')
                    console.log( action.payload)
                    return;
                }
                const { id } = action.payload;
                let nId;
                if ( isNaN( id)){
                    nId = id;
                } else {
                    nId = parseInt(id)
                }
                //const news = state.news.filter( news => news.id !== nId );
                //state.news = news;
                newsAdapter.removeOne(state, nId)

                console.log( "News Deleted")
                console.log( "News : " , state.news)
            })   
        }
})

export const{
    selectAll: selectAllNews,
    selectById: selectNewsById,
    selectIds: selectPostIds

} = newsAdapter.getSelectors( state => state.News )

//export const selectAllNews = (state) => state.News.news;
export const selectAllNewsStatus = (state) => state.News.status;
export const selectAllNewsErrors = (state) => state.News.error;
export const selectCounter = (state) => state.News.count;
/*
export const selectNewsById = ( state, newsId ) => {
    
    let nId;
    if ( isNaN( newsId)){
        nId = newsId;
    } else {
        nId = parseInt(newsId)
    }
    return state.News.news.find( newsItem => newsItem.id === nId );
}*/
 
export const { increaseCount, reactionAdded, } = NewsSlice.actions;

export default NewsSlice.reducer; 
