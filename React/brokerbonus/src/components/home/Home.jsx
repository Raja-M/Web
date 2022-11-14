import React from 'react'
import { Box,  Divider, Stack, styled, Typography , createTheme, useMediaQuery, Grid} from '@mui/material';
import { Sidebar } from '../Sidebar';
import { Feed } from '../Feed';
import { Rightbar } from '../Rightbar';

export const Home = ({darkMode, setDarkMode})  => {
    return (
        <Grid container spacing={2} style={{marginTop:"40px"}}> 
        <Grid item  xs={12} sm={3} style={{ display:{  } }}>
            <Sidebar   darkMode={darkMode} setDarkMode={setDarkMode} ></Sidebar>
        </Grid>
        <Grid item xs={12} sm={6} sx={{
            display:{ xs: "flex"}}}>
            <Feed></Feed>
            </Grid>
        <Grid item xs={12} sm={3} >
            <Rightbar></Rightbar>
        </Grid>
        </Grid>
         
    )
}
