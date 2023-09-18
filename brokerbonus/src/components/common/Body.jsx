import React from 'react'
import { Home } from '../home/Home'

import {Route, Routes } from 'react-router-dom'
import { NotFound } from './NotFound'
 
 
import { ProgramRoutes } from '../programs/ProgramRoutes'
import { PredictorEstimaterRoutes } from '../predictorestimator/PredictorEstimatorRoutes'


export const Body = ({darkMode, setDarkMode})  => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Home darkMode={darkMode} setDarkMode={setDarkMode} ></Home> }></Route>
            <Route path="/program/*" element={<ProgramRoutes darkMode={darkMode} setDarkMode={setDarkMode}></ProgramRoutes>}></Route>
            <Route path="/predictorestimator/*" element={<PredictorEstimaterRoutes darkMode={darkMode} setDarkMode={setDarkMode}></PredictorEstimaterRoutes>}></Route>
            <Route path="*" element={<NotFound></NotFound>} ></Route>
            
        </Routes>
    </>
  )
}
