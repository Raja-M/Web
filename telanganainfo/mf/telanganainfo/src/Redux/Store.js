import { createStore } from   'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';

import   { configureStore, applyMiddleware, getDefaultMiddleware } from "@reduxjs/toolkit";


import reducer from './Reducer';
import postsSlice from './PostsReducer';


const combinedReducers = combineReducers({
	users: reducer,
	posts: postsSlice.reducer
})

/*
const store = createStore( combinedReducers, composeWithDevTools( ) );
console.log( " in Store")

*/
export const store = configureStore({
    reducer : combinedReducers,
    devTools: process.env.NODE_ENV !== 'production',    
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat( )
    
});

export default store;

