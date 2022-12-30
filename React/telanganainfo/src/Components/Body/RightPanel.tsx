import { Box } from '@mui/material'
import React from 'react'

const RightPanel = () => {
  return (
    <Box sx={{ bgcolor:'yellow' , flex: 3, display:{xs:'none', sm: 'block'}}}>
      Right Panel
    </Box>
  )
}

export default RightPanel
