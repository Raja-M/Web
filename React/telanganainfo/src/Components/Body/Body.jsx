import React from 'react';

import {Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';  
import NewsRoutes  from './News/NewsRoutes';
import ManageRoutes from './Manage/ManageRoutes';
import { NotFound } from '../Common/NotFound';  

const Body = ({darkMode, setDarkMode}) => {
  return (
  <>
    <Routes>
        <Route path="/" element={ <Home darkMode={darkMode} setDarkMode={setDarkMode} ></Home> }></Route>
        <Route path="/news/*" element={<NewsRoutes darkMode={darkMode} setDarkMode={setDarkMode}></NewsRoutes>}></Route>
        <Route path="/manage/*" element={<ManageRoutes darkMode={darkMode} setDarkMode={setDarkMode}></ManageRoutes>}></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>        
    </Routes>
  </> 
  )
}

export default Body