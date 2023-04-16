import { createSlice } from "@reduxjs/toolkit";

const initialState = [
 
    {id: 1 , Name: "Karimnagar", Districtsid: 1 },
    {id: 2 , Name: "Ramadugu", Districtsid: 1},
    {id: 3 , Name: "Singapur", Districtsid: 1},
 
]

const CitiiesSlice = createSlice ({
    name: 'Citiies',
    initialState,
    reducers: {}
})

export const selectAllCities = (state) => state.Cities;

export default CitiiesSlice.reducer;