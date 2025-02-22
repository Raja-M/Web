import { Box } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'
import WeatherWidget from './weather'

function Rightbar() {
  return (
 
    <Box  flex={2} p={2}  sx={{  position: "absolete" ,display: "flex", flexDirection: "column", px: 2   }}> 

    <Box    sx={{   border: "1px" , borderStyle: "Sold", borderColor: "black" , paddingBottom: 2 }} >
      <WeatherWidget></WeatherWidget>

    </Box>


    <Box    sx={{   border: "1px" , borderStyle: "Sold", borderColor: "black" , paddingBottom: 2 }} >
      <img src="..\assets\ads\pnc.png" style={{ height: "100%", width: "100%", objectFit: "fill" }} alt="Logo" />
    </Box>
    <Box    sx={{   border: "1px" , borderStyle: "Sold", borderColor: "black" , paddingBottom: 2 }} >
      <img src="..\assets\ads\mirai.webp" style={{ height: "100%", width: "100%", objectFit: "fill" }} alt="Logo" />
    </Box>

    <Box    sx={{   border: "1px" , borderStyle: "Sold", borderColor: "black" , paddingBottom: 2 }} >
      <img src="..\assets\ads\eppy.jpg" style={{ height: "100%", width: "100%", objectFit: "fill" }} alt="Logo" />
    </Box>
  
  </Box>
  )
}

export default Rightbar