import { createSlice } from "@reduxjs/toolkit";

const initialState = [

]

const requestsSlice = createSlice ({
    name: 'requests',
    initialState,
    reducers: {
        addPost :{
                reducer( state, action){
                state.push( action.payload)
                },
                prepare( postGetCurrentBonus){
                    return {
                        payload: {postGetCurrentBonus}
                    }  ;  
                }

        }
    }
})

export const selectAllRequests = (state) => state.requests;
export const {addPost } = requestsSlice.actions;
export default requestsSlice.reducer; 
