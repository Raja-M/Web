import { Box, Divider, Stack, styled, Typography, createTheme, useMediaQuery, Paper } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import { Rightbar } from '../Rightbar';
import { Sidebar } from '../Sidebar';
import { ProgramsForm } from './ProgramsForm';

export const Programs = ({ darkMode, setDarkMode }) => {
  const { id } = useParams()
  return (
    <Stack direction='row' spacing={1} divider={<Divider orientation='vertical' flexItem></Divider>}
      sx={{
        marginTop: 2,
        justifyContent: 'space-between'
      }}>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} ></Sidebar>
      <div> 
            <Paper> 
                <ProgramsForm></ProgramsForm>
            </Paper>  
        </div>
      <Rightbar></Rightbar>
    </Stack>
  )
}
