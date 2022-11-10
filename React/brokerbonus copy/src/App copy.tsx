import React from 'react';
import { Button, styled, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
 


function App() {

  const BlueButton = styled(Button)( ( {theme} ) => ({ 
    backgroundColor: theme.palette.info.main,
          color: '#888',
          margin: 5, 
           "&:hover": {
             backgroundColor: 'lightblue' 
            },
           "&:disabled": {
             backgroundColor: 'gray', 
             color: 'white'
            } 
  }));

  return (
    <>
      <div >
        <Button startIcon={<SettingsIcon />} variant="text">Setting</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>

         <BlueButton> My Button </BlueButton>

      </div>
      {
        /* There is already an h1 in the page, let's not duplicate it. */
      }
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>;

    </>

  );
}

export default App;
