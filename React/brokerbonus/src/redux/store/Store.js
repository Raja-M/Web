import   { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/CounterSlice';
import producersReducer from '../features/producers/producersSlice';
import programsReducer from '../features/programs/programsSlice';
import marketsReducer from '../features/markets/marketsSlice' ;
import requetsReducer from '../features/requests/requestsSlice' ; 


const reducer = {
    producers: producersReducer,
    programs: programsReducer,
    markets: marketsReducer,
    counter: counterReducer,
    requests: requetsReducer
     

}
export const Store = configureStore({
    reducer : reducer,
    devTools: process.env.NODE_ENV !== 'production',
             
}

);
