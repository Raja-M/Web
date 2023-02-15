import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
 
import { createTheme, Container, Box, Grid } from '@mui/material';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import  Body  from '../Components/Body/Body'; 
import { ThemeProvider } from '@emotion/react';
import Navbar from '../Components/Header/Navbar';

import { Provider } from "react-redux";
import { fetchUsers } from '../App/Redux/Contents/Users/UsersSlice';
import { fetchPosts } from '../App/Redux/Contents/News/NewsSlice';
import { Store} from "./Redux/Store"

Store.dispatch( fetchUsers () ); 

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light'
    }
  })

  return (
    <>
        <ThemeProvider theme={darkTheme}>
        <Box
          bgcolor={darkTheme.palette.background.default}
          color={darkTheme.palette.text.primary}
        >
          <Grid container direction="row" spacing={2} flex="1" style={{margin:"10px" }}>
          <Provider store={Store}>
            <Navbar></Navbar>
            
            <Grid container direction="row" spacing={2} flex="1">
                  <Grid item xs={12} style={{marginTop:"70px" }}>
                    <Body darkMode={darkMode} setDarkMode={setDarkMode} ></Body>
                  </Grid>
            </Grid>
            </Provider>
          </Grid>
        </Box>
        </ThemeProvider>
    </>
 
  )
   
}

export default App;
