import { Box, Divider, Stack, styled, Typography, createTheme, useMediaQuery, Paper } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom'
import { BodyRouteElement } from '../../BodyRouteElement';
import  NewsManage from './NewsManage';
import  NewsEdit from './NewsEdit';
import { NotFound } from '../../../Common/NotFound';

 

const NewsManageRoutes = ({ darkMode, setDarkMode }) => {
  return (
      <>
            <Routes>
                <Route element={<BodyRouteElement></BodyRouteElement>}>
                    <Route index element={<NewsManage darkMode={darkMode} setDarkMode={setDarkMode} ></NewsManage>}></Route>            
                    <Route path=":id" element={<NewsEdit darkMode={darkMode} setDarkMode={setDarkMode} ></NewsEdit>}></Route>
                    <Route path="*" element={<NotFound></NotFound>} ></Route>
                </Route>
            </Routes>
    </>
  )
}

export default NewsManageRoutes