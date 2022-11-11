import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { mainNavbarItems } from './consts/navbarItems';
import { navbarStyles } from './styles';
import { useParams, useNavigate, NavigationType } from 'react-router-dom';
 

const SideLeftNavbar = () => {
  const drawerWidth = 220;
  const navigate = useNavigate();

  return (

    <Box sx={{
      position: "fixed" ,
      flex: 2,
      padding: 2,
      display: { xs: 'none', sm: 'block' }
  }}
  >
  <Drawer
    sx={navbarStyles.drawer}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <Divider />
    <List>
      { mainNavbarItems.map((item, index) => (
        <ListItem button  key={item.id} onClick={ () => navigate( item.route) }>
           
            <ListItemIcon sx={{ color:'rgba(255, 255,255, 0.7 )'}}>
              { item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          
        </ListItem>
      ))}
    </List>

     
  </Drawer>
  </Box>
 
  )
}

export default SideLeftNavbar