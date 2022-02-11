import { SUBMIT_USER_FORM1 } from "./UserForm1Types";

const initialState = {
    
       username: 'test',
       gender: '',
       owns:[],
       comments: '',
       topic: '',
      
}


const UserForm1Reducer = (state = initialState, action) => {
    alert(  "in UserForm reducer")
   
    switch( action.type){
        case SUBMIT_USER_FORM1 : return{
            ...state,
            username: action.payload.username,
            gender: action.payload.gender,
            owns: [],
            comments: action.payload.comments,
            topic: action.payload.topic
        }
    default: return state
    }
}

export default UserForm1Reducer