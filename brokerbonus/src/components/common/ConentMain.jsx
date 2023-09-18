import React from 'react'
import { Box, Grid } from "@mui/material"
import { Outlet } from 'react-router-dom'
import SideLeftNavbar from '../common/Navbar/SideLeftNavbar'

export const ConentMain = () => {
    const pageHead = ""
    return (
 

        <Grid container direction={"row"} justifyContent="center"  sx={{ display: 'flex', gap: 1, marginTop:10 }}>
            
            <Grid item style={{ flexGrow: 1 }} >
                <Outlet context={{ head: pageHead }}></Outlet>
            </Grid>
        </Grid>

    )
}
