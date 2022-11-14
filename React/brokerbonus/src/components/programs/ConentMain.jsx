import React from 'react'
import { Box, Grid } from "@mui/material"
import { Outlet } from 'react-router-dom'
import SideLeftNavbar from '../common/Navbar/SideLeftNavbar'

export const ConentMain = () => {
    const pageHead = "Broker Bonus Program"
    return (
        <Grid container direction={"row"} sx={{ display: 'inlineBlock', gap: 1, marginTop:10 }}>
            <Grid item xs={12} md={3} style={{ flexGrow: 0 }}  >
                <SideLeftNavbar ></SideLeftNavbar>
            </Grid >
            <Grid item style={{ flexGrow: 2 }} >
                <Outlet context={{ head: pageHead }}></Outlet>
            </Grid>
        </Grid>

    )
}
