import React from 'react'



import { Route, Routes } from 'react-router-dom'


import ProgramAdd from '../programs/ProgramAdd'
import ProgramEdit from '../programs/ProgramEdit'
import { ConentMain } from '../common/ConentMain'
import { PEContent } from  '../predictorestimator/PEContent'




export const PredictorEstimaterRoutes = ({ darkMode, setDarkMode }) => {
    return (
        <>
            <Routes>
                <Route element={<ConentMain ></ConentMain>}>
                    <Route index element={<PEContent darkMode={darkMode} setDarkMode={setDarkMode} ></PEContent>}></Route>
                    
                </Route>
            </Routes>
        </>
    )
}
