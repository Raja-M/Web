import { createSlice } from "@reduxjs/toolkit";

const initialState = [
 
    {id: 1 , Name: "Telangana"},
    {id: 2 , Name: "Andhrapradesh"},
    {id: 3 , Name: "Maharashtra"},
 
]

const StatesSlice = createSlice ({
    name: 'States',
    initialState,
    reducers: {}
})

export const selectAllStates = (state) => state.States;

export default StatesSlice.reducer; 
