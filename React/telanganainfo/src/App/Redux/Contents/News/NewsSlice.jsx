import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {   id : 123456789, 
        title: "This green crusader shows the way"  , 
        content : "plant saplings and work for the conservation of plants throughout his life. And he has dedicated his entire life to planting trees, watering them, protecting them, and sensitising people by distributing plants." ,
        time: "01-Jan-2023 09:40 a.m",
        Citiesid: 1,
    },
    {   id : 123456556, 
        title: "12 best dramas on Netflix for when you want to feel something"  , 
        content : "You gotta love that gut-punch of tragedy backed by a swelling orchestral score and how it can be a ruthless rush. Sometimes a tearjerker — that invites us to cry along with the characters — feels better than therapy. Other times, watching a protagonist persevere through hellish hardship can give us the hope that we need to persevere." ,
        time: "01-Jan-2023 10:32 a.m",
        Citiesid: 1,
    },
 
]

const NewsSlice = createSlice ({
    name: 'News',
    initialState,
    reducers: {}
})

export const selectAllNews = (state) => state.News;

export default NewsSlice.reducer; 
