import * as actions from "./ActionTypes";

export const  userAdded = user  => {
    return {
        type: actions.USER_ADDED  ,
        payload : user
    } 
}
export const userRemoved  = id => {
    return {
        type: actions.USER_REMOVED,
        payload :{ id  }  
    }

}
export const userUpdated = user => {
    return {
        type: actions.USER_UPDATED ,
        payload : user
    } 
}
    
