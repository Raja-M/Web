import React from 'react'
import {Grid } from "@mui/material"
import { Outlet } from 'react-router-dom'
import SideLeftNavbar from '../common/Navbar/SideLeftNavbar'

export const ProgramHeader = () => {
    const pageHead = "Broker Bonus Program"
    return (
        < >     
         <SideLeftNavbar marginTop="50px"></SideLeftNavbar>    
        <Outlet context={{ head : pageHead}}></Outlet>
        </ >
    )
}
