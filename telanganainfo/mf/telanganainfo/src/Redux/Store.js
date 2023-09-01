import { createStore } from   'redux';
;
import  reducer from './Reducer';

const store = createStore( reducer );
console.log( " in Store")

export default store;

