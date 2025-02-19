import { Box } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Box  flex={1}  sx={{ minHeight: "200px", display: "flex", flexDirection: "column", justifyContent: "flex-start" , px: 2   }}> 
      <Box    sx={{ height: "100%",  border: "1px" ,   justifyContent: "flex-start" }} >
        <img src="..\assets\ads\eveready.jpg" style={{ height: "100%", width: "100%", objectFit: "fill" }} alt="Logo" />
      </Box>
      <Box    sx={{ height: "100%",  border: "1px" ,   justifyContent: "flex-start" }} >
        <img src="..\assets\ads\majaka.jpg" style={{ height: "100%", width: "100%", objectFit: "fill" }} alt="Logo" />
      </Box>
    </Box>
  )
}

export default Sidebar