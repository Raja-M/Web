import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../Components/Home/Home';
import { Container, Box } from '@mui/material';
import Header from '../Components/Common/Header/Header';
import Footer from '../Components/Common/Footer/Footer';
import Body from '../Components/Common/Body/Body';

function App() {
  return (
    <div >  Telanganainfo
            <Header></Header>
            <Body></Body>
            <Footer></Footer>      
    </div>
  );
}

export default App;
