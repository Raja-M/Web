import { createSlice } from "@reduxjs/toolkit";
 
const initialState = [
    {id: 1, payeeCode : "95174", Name: "DELTA GENERAL AGENCY CORPORATION" , county : "ANDREWS" },
    {id: 2, payeeCode : "1877618", Name: "JIM BOYD & ASSOCIATES INC", county: "FT LAUDERDALE" },
    {id: 3, payeeCode : "2337843", Name: "IMACO CA, INC.", county: "PEACHTREE" },
    {id: 11, payeeCode : "95174", Name: "DELTA GENERAL AGENCY CORPORATION" , county : "ANDREWS" },
    {id: 21, payeeCode : "1877618", Name: "JIM BOYD & ASSOCIATES INC", county: "FT LAUDERDALE" },
    {id: 31, payeeCode : "2337843", Name: "IMACO CA, INC.", county: "PEACHTREE" },
    {id: 41, payeeCode : "95174", Name: "DELTA GENERAL AGENCY CORPORATION" , county : "ANDREWS" },
    {id: 42, payeeCode : "1877618", Name: "JIM BOYD & ASSOCIATES INC", county: "FT LAUDERDALE" },
    {id: 43, payeeCode : "2337843", Name: "IMACO CA, INC.", county: "PEACHTREE" },
    {id: 411, payeeCode : "95174", Name: "DELTA GENERAL AGENCY CORPORATION" , county : "ANDREWS" },
    {id: 421, payeeCode : "1877618", Name: "JIM BOYD & ASSOCIATES INC", county: "FT LAUDERDALE" },
    {id: 431, payeeCode : "2337843", Name: "IMACO CA, INC.", county: "PEACHTREE" },
]



const producersSlice = createSlice ({
    name: 'producers',
    initialState,
    reducers : {
        
    }
})

export default producersSlice.reducer; 
