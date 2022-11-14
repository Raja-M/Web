import React from 'react'
import { Content } from './Content'


import { Route, Routes } from 'react-router-dom'


import ProgramAdd from '../programs/ProgramAdd'
import ProgramEdit from '../programs/ProgramEdit'
import { ConentMain } from './ConentMain'





export const ProgramRoutes = ({ darkMode, setDarkMode }) => {
    return (


        <>

            <Routes>
                <Route element={<ConentMain ></ConentMain>}>
                    <Route index element={<Content darkMode={darkMode} setDarkMode={setDarkMode} ></Content>}></Route>
                    <Route path="add" element={<ProgramAdd></ProgramAdd>} > </Route>
                    <Route path="list" element={<Content darkMode={darkMode} setDarkMode={setDarkMode} ></Content>}></Route>
                    <Route path="add" element={<ProgramAdd></ProgramAdd>} > </Route>
                    <Route path="edit" > </Route>
                    <Route path=":id" element={<ProgramEdit></ProgramEdit>}> </Route>
                </Route>
            </Routes>
        </>
    )
}
