 

import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { Badge, InputBase, Stack } from '@mui/material';

import PriceChangeIcon from '@mui/icons-material/PriceChange';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications, StickyNote2 } from '@mui/icons-material';
import { flexbox } from '@mui/system';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, selectCounter} from '../../App/Redux/Contents/News/NewsSlice'



const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
      display: 'flex'
  }

}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
      display: 'flex'
  }

}));


const Navbar = () => {

  const currentTheme = useTheme();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch()
  const count = useSelector( selectCounter )



  return (
 
    <AppBar   sx={{  position: "sticy", zIndex:  9999 }}>
        <StyledToolBar>
          <Box> <NavLink to="/" style={{fontSize:30, fontWeight: "bold" ,color: "white" , textDecoration: 'none' }} > TelanganaInfo</NavLink>
          </Box>
     
          <Stack
                    direction="row"
                    spacing={4}
                    
                    sx={{ display: { xs: "none", sm: "flex", flex: 4, marginLeft: 50 } }}
          >
              <Box>
                <NavLink style={  ( {isActive}) =>{
                        return isActive ? { color: "#69f0ae" , textDecoration: 'none' } : { color : "white" , textDecoration: 'none' }        
                    } } 
                        to="/"     >Home</NavLink></Box>
                  
                  <Box><NavLink style={  ( {isActive}) =>{
                        return isActive ? { color: "#69f0ae" , textDecoration: 'none' } : { color : "white" , textDecoration: 'none' }        
                    } } 
                        to="/news"     >News</NavLink></Box>

                      <Box><NavLink style={  ( {isActive}) =>{
                        return isActive ? { color: "#69f0ae" , textDecoration: 'none' } : { color : "white" , textDecoration: 'none' }        
                    } } 
                        to="/info"     >Info
                </NavLink>
              </Box>
              <button
                onClick = { () =>  dispatch(  increaseCount({}) ) }>
                  {count}
              </button>      
                    
          </Stack>
          <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon color="action" />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications color="action" />
                    </Badge>
                    <Avatar onClick={e => setOpen(true)} sx={{ width: 30, height: 30 }}></Avatar>
          </Icons>
                  
             
        </StyledToolBar>

        <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                >
               <MenuItem >Profile</MenuItem>
                <MenuItem  >My account</MenuItem>
                <MenuItem  >Logout</MenuItem>
              
                
            </Menu>
      </AppBar>
 
  );
};

export default Navbar;
