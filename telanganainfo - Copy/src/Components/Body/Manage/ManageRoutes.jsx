import { Box, Divider, Stack, styled, Typography, createTheme, useMediaQuery, Paper } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom'
import { BodyRouteElement } from '../BodyRouteElement';
import { Manage } from './Mange'
import  NewsManageRoutes  from './News/NewsManageRoutes'
import  InfoManage  from './Info/InfoManage'
import { NotFound } from '../../Common/NotFound';  

const ManageRoutes = ({ darkMode, setDarkMode }) => {
  return (
    <>
        <Routes>
            <Route element={<BodyRouteElement></BodyRouteElement>}>
              <Route index element={<Manage darkMode={darkMode} setDarkMode={setDarkMode} ></Manage>}></Route>          
              <Route path="news/*" element={<NewsManageRoutes darkMode={darkMode} setDarkMode={setDarkMode} ></NewsManageRoutes>}></Route>
              <Route path="info/*" element={<InfoManage darkMode={darkMode} setDarkMode={setDarkMode} ></InfoManage>}></Route>
              <Route path="*" element={<NotFound></NotFound>} ></Route>
            </Route>
        </Routes>
    </>
  )
}

export default ManageRoutes