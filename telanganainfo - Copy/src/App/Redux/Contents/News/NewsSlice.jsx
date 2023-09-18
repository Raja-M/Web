import { 
    createSelector,
    createEntityAdapter 
} from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import { apiSlice } from "../../api/apiSlice";

const newsAdapter = createEntityAdapter( {
        sortComparer: ( a, b) => (b.newsId - a.newsId ) 
    }
)

const initialState = newsAdapter.getInitialState()
 
export const extendedApiSlice = apiSlice.injectEndpoints( {
    endpoints: builder => ({
        getNews:  builder.query({
            query: () => '/posts',
            transformResponse: responseData => {
                let min = 1;
                const loadedNews = responseData.map( news => {
                    if(!news?.date) news.date = sub( new Date(), { minutes: min++ } ).toISOString();
                    if(!news?.reactions) news.reactions = {
                        thumsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                    return news;
                });
                return newsAdapter.setAll( initialState, loadedNews)
            },
            providesTags: (result, error, tag) => [
                {type: 'News' , id : "LIST" },
                ...result.ids.map( id => ({ type: 'News', id }))
            ]
        }),

        getNewsByuserId: builder.query({
            query: (id) => `/posts/?userId=${id}`,
            transformResponse: responseData => {
                let min = 1 ;
                const loadedNews = responseData.map( news => {
                    if(!news?.date) news.date = sub( new Date(), { minutes: min++ } ).toISOString();
                    if(!news?.reactions) news.reactions = {
                        thumsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                    return news;

                });
                return newsAdapter.setAll( initialState, loadedNews)
            },
            providesTags: (result, error, tag) => {            
                console.log("result : " + result) 
            return [
                ...result.ids.map( id => ({ type: 'News', id }))
            ]
            }
        }),
        
        addNewNews: builder.mutation({    
            query: (initialNews) => ({
                url: '/posts',
                method: 'POST',
                body : {
                    ...initialNews,
                    userId: Number( initialNews.userId),
                    date: new Date().toISOString(),
                    reactions: {
                        thumsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                }
            }),
            invalidatesTags: [
                { type: 'News', id: "LIST"}
            ]
            

        }),
        updateNews: builder.mutation({
            query: (initialNews) => ({
                url: `/posts/${initialNews.id}`,
                method: 'PUT',
                body: {
                    ...initialNews,
                    date: new Date().toISOString()
                }
            }),
            invalidatesTags: ( result, error, initialNews) => [
                { type: 'News', id: initialNews.id}
            ] 
        }),
        deleteNews: builder.mutation({
            query: ( {id }) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
                body: {id}
            }),
            invalidatesTags: ( result, error, initialNews) => [
                { type: 'News' , id : initialNews.id }
            ]
        }),

        addReaction: builder.mutation({
            query: ({ newsId, reactions }) => ({
                url: `posts/${newsId}`,
                method: 'PATCH',
                body: { reactions}
            }),
            async onQueryStarted ( { newsId, reactions}, {dispatch, queryFullfilled} ){
                const patchResult = dispatch(
                    extendedApiSlice.util.updateQueryData( 'getNews', undefined, draft => {
                        const news = draft.entities[newsId]
                        if ( news ) news.reactions = reactions
                    })
                )
                try{
                    await queryFullfilled
                }catch {
                    patchResult.undo()
                }
            }
             
        })

    })
})

export const {
    useGetNewsQuery,
    useGetNewsByuserIdQuery,
    useAddNewNewsMutation,
    useUpdateNewsMutation,
    useDeleteNewsMutation,
    useAddReactionMutation
} = extendedApiSlice

export const selectNewsResult = extendedApiSlice.endpoints.getNews.select()

const selectNewsData = createSelector(
    selectNewsResult,
    newsResult => newsResult.data  // normalized state object with ids & entities.
)

export const{
    selectAll: selectAllNews,
    selectById: selectNewsById,
    selectIds: selectNewsIds

} = newsAdapter.getSelectors( state => selectNewsData(state) ?? initialState )
 
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
 
