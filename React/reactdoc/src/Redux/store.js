import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'
import { buyCake } from "./Cake/cakeActions";
import cakeReducer from "./Cake/cakeReducer";
import thunk from 'redux-thunk' ;

import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";


const store = createStore( rootReducer , composeWithDevTools( applyMiddleware( logger , thunk)))

  //const unsub = store.subscribe(   console.log( store.getState()))

export default store 