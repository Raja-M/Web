import { createSlice } from "@reduxjs/toolkit";

const initialState = [
 
    {id: 1 , Name: "Karimnagar", Statesid: 1 },
    {id: 2 , Name: "Siddipet", Statesid: 1},
    {id: 3 , Name: "Peddapalli", Statesid: 1},
 
]

const DistrictsSlice = createSlice ({
    name: 'Districts',
    initialState,
    reducers: {}
})

export const selectAllDistricts = (state) => state.Districts;

export default DistrictsSlice.reducer;