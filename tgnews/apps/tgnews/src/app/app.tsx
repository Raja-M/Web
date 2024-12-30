import React from 'react'
import Sidebar from './components/common/Sidebar'
import Rightbar from './components/common/Rightbar'
import Content from './components/common/Content'
import { Box, Container, Stack } from '@mui/material'
 
function app() {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent={'space-between'}  >
        <Sidebar></Sidebar>
        <Content></Content>
        <Rightbar></Rightbar>
      </Stack>

    </Box>
  )
}

export default app