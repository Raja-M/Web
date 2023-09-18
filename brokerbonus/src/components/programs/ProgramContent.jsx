import { Box, Divider, Stack, styled, Typography, createTheme, useMediaQuery, Paper } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import SideLeftNavbar from '../common/Navbar/SideLeftNavbar';
import { Rightbar } from '../Rightbar';
import { Sidebar } from '../Sidebar';
import { ProgramsForm } from './ProgramsForm';


export const ProgramContent = ({ darkMode, setDarkMode }) => {
  const { id } = useParams()
  return (

      
 
                <ProgramsForm></ProgramsForm>
   
      

 
  )
}
