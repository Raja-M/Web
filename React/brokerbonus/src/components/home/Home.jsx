import React from 'react'
import { Box,  Divider, Stack, styled, Typography , createTheme, useMediaQuery} from '@mui/material';
import { Sidebar } from '../Sidebar';
import { Feed } from '../Feed';
import { Rightbar } from '../Rightbar';

export const Home = ({darkMode, setDarkMode})  => {
    return (
        <Stack direction='row' spacing={1} divider={<Divider orientation='vertical' flexItem></Divider>}
            sx={{
                marginTop: 2,
                justifyContent: 'space-between'
            }}>
            <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} ></Sidebar>
            <Feed></Feed>
            <Rightbar></Rightbar>
        </Stack>
    )
}
