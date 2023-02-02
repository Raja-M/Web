import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

import { sub } from 'date-fns';
import { format } from 'date-fns';
import axios from "axios" ; 

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
news : [],
status: 'idle', 
error: null
}

export const fetchPosts = createAsyncThunk( 'News/fetchPosts', async () => {
    try {
        const response = await axios.get(POST_URL)
        return response.data;
    } catch ( err ){
        return err.message;
    }
})

export const addNewPost = createAsyncThunk( 'News/addNewPost', async (initialPost) => {
    try {
        const response = await axios.post(POST_URL, initialPost)
        return response.data;
    } catch ( err ){
        return err.message;
    }
})

const NewsSlice = createSlice({
    name: 'News',
    initialState,
    reducers: {
        newsAdded: {
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
        },
        reactionAdded( state, action){
            const{ newsId, reaction } = action.payload
            const existingNews = state.news.find( news => news.id === newsId    )
            if ( existingNews){
                existingNews.reactions[reaction]++;
            }
        },
    },
    extraReducers (builder) { 
        builder
        .addCase( fetchPosts.pending, (state, action) => {
            state.status = 'loading'
        })
            .addCase( fetchPosts.fulfilled, ( state, action) => {
                state.status = 'succeeded';
                let min = 1;

                const loadedPosts = action.payload.map( post => {
                    
                    post.content = post.body;
                    post.time = new Date().toDateString();
                    post.reactions =  {
                        thumsUP: 0,
                        wow: 0,
                        heart: 0
                    };
                    return post;
                });
                state.news =  state.news.concat ( loadedPosts);
            })
            .addCase( fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase( addNewPost.fulfilled, (state, action) => {
                action.payload.id = nanoid();
                action.payload.content = action.payload.body;
                action.payload.userId = Number(action.payload.userId);
                action.payload.time = new Date();
                action.payload.reactions =  {
                    thumsUP: 0,
                    wow: 0,
                    heart: 0
                };
                state.news.push( action.payload)
            })    
        }
})

export const selectAllNews = (state) => state.News.news;
export const selectAllNewsStatus = (state) => state.News.status;
export const selectAllNewsErrors = (state) => state.News.error;

export const selectNewsById = ( state, newsId ) => state.News.news.find( newsItem => newsItem.id === newsId )

export const { newsAdded, reactionAdded,  } = NewsSlice.actions;

export default NewsSlice.reducer; 
