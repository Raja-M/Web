import React from 'react'
import { Box, Grid } from "@mui/material"
import { Outlet } from 'react-router-dom'
 

export const BodyRouteElement = () => {
    const pageHead = ""
    return (
 

        <Grid container direction={"row"} justifyContent="center"  sx={{ display: 'flex', gap: 1,  }}>
            <Grid item xs={2} style={{ flexGrow: 1 }} ></Grid>
            <Grid item xs={6} style={{ flexGrow: 1 }} >
                <Outlet context={{ head: pageHead }}></Outlet>
            </Grid>
            <Grid item xs={3} style={{ flexGrow: 1 }} > </Grid>
        </Grid>

    )
}