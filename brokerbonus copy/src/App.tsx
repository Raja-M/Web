import React, { useState } from 'react';
import { Box,  Divider, Stack, styled, Typography , createTheme, useMediaQuery} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Rightbar } from './components/Rightbar';
import { Navbar } from './components/Navbar';
import { Add } from './components/Add';
import { ThemeProvider } from '@emotion/react';
import { text } from 'stream/consumers';
import { palette } from '@mui/system';
import { Palette } from '@mui/icons-material';




function App() {

  const[darkMode, setDarkMode] = useState( false )

 
  const darkTheme = createTheme( {
    palette: {
      mode: darkMode ? 'dark' : 'light'
    }
  })


  return (
  
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor = { darkTheme.palette.background.default } color={ darkTheme.palette.text.primary} > 
        <Navbar></Navbar>
        <Stack  direction = 'row' spacing={1} divider = { <Divider orientation='vertical' flexItem></Divider>}
                sx={{ 
                marginTop:2,
                justifyContent:'space-between'}}>
          <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} ></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
        <Add></Add>
      </Box>
      </ThemeProvider>

  );
}

export default App;
