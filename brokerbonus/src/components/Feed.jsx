import React from 'react'
import { Box } from '@mui/material';
import { Post } from './Post';



export const Feed = () => {
    return (
        <Box sx={{
            display:{ xs: "block"},
            flex: 4,
            padding: 2,
        }}
        >
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            


        </Box>
    )
}
