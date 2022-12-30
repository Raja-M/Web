import { Box, Divider, Stack, styled, Typography, createTheme, useMediaQuery, Paper } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom'
import { BodyRouteElement } from '../BodyRouteElement';
import { Manage } from './Mange'
 

const ManageRoutes = ({ darkMode, setDarkMode }) => {
  return (
    <>
        <Routes>
            <Route element={<BodyRouteElement></BodyRouteElement>}>
            <Route index element={<Manage darkMode={darkMode} setDarkMode={setDarkMode} ></Manage>}></Route>
                    
            <Route path=":id" element={<Manage darkMode={darkMode} setDarkMode={setDarkMode} ></Manage>}></Route>
            </Route>
        </Routes>
    </>
  )
}

export default ManageRoutes