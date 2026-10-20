import { Box, Paper } from '@mui/material';
import React from 'react';

import Sidebar from '../common/Sidebar';
import Content from '../common/Content';
import Rightbar from '../common/Rightbar';
 

const MainBody = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        margin: '16vh 10%  0 10%',
      
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',

      }}
    ><Sidebar></Sidebar>
    <Content>
       </Content>
    <Rightbar></Rightbar>

    </Paper>
  );
};

export default MainBody;
