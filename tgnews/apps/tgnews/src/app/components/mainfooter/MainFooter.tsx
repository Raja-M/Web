import React from 'react'
import { Box } from '@mui/material'

const MainFooter = () => {
  return (
    <Box sx={{  margin: "0 10%",   display: "flex", flexDirection: "row", justifyContent: "space-between" , px: 2   }}> 
    <Box      >
        <a  target="_blank"  href="https://www.facebook.com/tgnews.co/"> https://www.facebook.com/tgnews.co/ </a>
    </Box>
    <Box    >
        <a  target="_blank" href="https://x.com/tgnews_com">https://x.com/tgnews_com </a>
    
    </Box>
  </Box>
 
            

           
        
    
  )
}

export default MainFooter