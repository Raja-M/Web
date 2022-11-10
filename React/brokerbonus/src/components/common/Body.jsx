import React from 'react'
import { Home } from '../home/Home'
 

import {Route, Routes } from 'react-router-dom'
import { NotFound } from './NotFound'
import { Programs } from '../programs/Programs'

 
 

export const Body = ({darkMode, setDarkMode})  => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Home darkMode={darkMode} setDarkMode={setDarkMode} ></Home> }></Route>
            <Route path="/info/:id" element={ <Programs  darkMode={darkMode} setDarkMode={setDarkMode} ></Programs>
             }></Route>
            <Route path="*" element={<NotFound></NotFound>} ></Route>
            
        </Routes>
    </>
  )
}
