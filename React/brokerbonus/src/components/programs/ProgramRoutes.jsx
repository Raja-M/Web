import React from 'react'
import { Programs } from './Programs'


import { Route, Routes } from 'react-router-dom'


import ProgramAdd from '../programs/ProgramAdd'
import ProgramEdit from '../programs/ProgramEdit'
import { ProgramHeader } from './ProgramHeader'





export const ProgramRoutes = ({ darkMode, setDarkMode }) => {
    return (


        <>

            <Routes>
                <Route element={<ProgramHeader ></ProgramHeader>}>
                    <Route index element={<Programs darkMode={darkMode} setDarkMode={setDarkMode} ></Programs>}></Route>
                    <Route path="add" element={<ProgramAdd></ProgramAdd>} > </Route>
                    <Route path="list" element={<Programs darkMode={darkMode} setDarkMode={setDarkMode} ></Programs>}></Route>
                    <Route path="add" element={<ProgramAdd></ProgramAdd>} > </Route>
                    <Route path="edit" > </Route>
                    <Route path=":id" element={<ProgramEdit></ProgramEdit>}> </Route>
                </Route>
            </Routes>
        </>
    )
}
