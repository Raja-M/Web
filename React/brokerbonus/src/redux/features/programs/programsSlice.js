import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {programcd : "2023Yearly", Name: "Yearly Medical Bonus 2023" , executive : "ANDREW" },
    {programcd : "2023Q1MEDICAL", Name: "Quaterly Medical 2023", executive: "MORGAN" },
    {programcd : "2023Q1SPECIALITY", Name: "Quaterly Speciality 2023", executive: "JIMMY" },
]

const programsSlice = createSlice ({
    name: 'programs',
    initialState,
    reducers: {}
})

export default programsSlice.reducer; 
