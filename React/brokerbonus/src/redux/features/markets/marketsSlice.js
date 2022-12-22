import { createSlice } from "@reduxjs/toolkit";

const initialState = [
 
    {market: "New York"  },
    {market: "Florida"  },
    {market: "Texas Central"  },
    {market: "Texas Dallas"  },
    {market: "Texas Huston"  },
    {market: "New Mexico"  },
]

const marketsSlice = createSlice ({
    name: 'markets',
    initialState,
    reducers: {}
})

export const selectAllMarkets = (state) => state.markets;

export default marketsSlice.reducer; 
