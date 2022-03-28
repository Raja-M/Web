import { combineReducers } from "redux";

import cakeReducer from "./Cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer"
import userReducer from "./User/userReducer"
import UserForm1Reducer  from "./UserForm1/UserForm1Reducer";

const rootReducer = combineReducers( {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
    userForm1: UserForm1Reducer

})

export default rootReducer