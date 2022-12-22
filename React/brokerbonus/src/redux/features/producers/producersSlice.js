import { createSlice } from "@reduxjs/toolkit";
 
const initialState = [
    {id: 1, payeeCode : "95174", Name: "DELTA GENERAL AGENCY CORPORATION" , county : "ANDREWS" },
    {id: 2, payeeCode : "1877618", Name: "JIM BOYD & ASSOCIATES INC", county: "FT LAUDERDALE" },
    {id: 3, payeeCode : "2337843", Name: "IMACO CA, INC.", county: "PEACHTREE" },
]

const producersSlice = createSlice ({
    name: 'producers',
    initialState,
    reducers : {
        
    }
})

export default producersSlice.reducer; 
