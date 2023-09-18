import React from 'react'


import { Route, Routes } from 'react-router-dom'


import ProgramAdd from '../programs/ProgramAdd'
import ProgramEdit from '../programs/ProgramEdit'
import { ConentMain } from '../common/ConentMain'
import { ProgramContent } from './ProgramContent'
 





export const ProgramRoutes = ({ darkMode, setDarkMode }) => {
    return (


        <>

            <Routes>
                <Route element={<ConentMain></ConentMain>}>
                    <Route index element={<ProgramContent darkMode={darkMode} setDarkMode={setDarkMode} ></ProgramContent>}></Route>
                    <Route path="add" element={<ProgramAdd></ProgramAdd>} > </Route>
                    <Route path="list" element={<ProgramContent darkMode={darkMode} setDarkMode={setDarkMode} ></ProgramContent>}></Route>
                    <Route path="add" element={<ProgramAdd></ProgramAdd>} > </Route>
                    <Route path="edit" > </Route>
                    <Route path=":id" element={<ProgramEdit></ProgramEdit>}> </Route>
                </Route>
            </Routes>
        </>
    )
}
