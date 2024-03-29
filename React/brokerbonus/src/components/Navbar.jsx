
import React, { useState } from 'react'

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

const pages = ['Home', 'News', 'Politics', 'Info', 'Money', 'Entertainment'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const StyledToolbar = styled(Toolbar)({

    display: 'flex',
    justifyContent: 'space-between',

})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));
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

export const Navbar = () => {

    const currentTheme = useTheme()

    const [open, setOpen] = useState(false);

    return (
        <AppBar   style={{ position: "sticy", zIndex:  9999 }}>
            <StyledToolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
                    <PriceChangeIcon sx={{ display: { xs: 'flex', sm: 'flex' } }}></PriceChangeIcon>
                    <Typography variant='h5' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        Broker Bonus Managment
                    </Typography>
                </Box>

                <Stack
                    direction="row"
                    spacing={4}
                    
                    sx={{ display: { xs: "none", sm: "flex", flex: 4, marginLeft: 50 } }}
                >
                    <Box><NavLink style={  ( {isActive}) =>{
                        return isActive ? { color: "red" , textDecoration: 'none' } : { color : "yellow" , textDecoration: 'none' }        
                    } } 
                        to="/"     >Home</NavLink></Box>
                    <Box><NavLink   to="/program"  style={  ( {isActive}) =>{
                        return isActive ? { color: "red" , textDecoration: 'none' } : { color : "yellow" , textDecoration: 'none' }        
                    } } >Programs</NavLink
                    ></Box>
                    <Box><NavLink to="/customer" style={  ( {isActive}) =>{
                        return isActive ? { color: "red" , textDecoration: 'none' } : { color : "yellow" , textDecoration: 'none' }        
                    } }>Customers</NavLink>
                    </Box>
                    <Box><NavLink to="/producer"style={  ( {isActive}) =>{
                        return isActive ? { color: "red" , textDecoration: 'none' } : { color : "yellow" , textDecoration: 'none' }        
                    } }>Producers</NavLink>
                    </Box>
                    <Box><NavLink to="/approval" style={  ( {isActive}) =>{
                        return isActive ? { color: "red" , textDecoration: 'none' } : { color : "yellow" , textDecoration: 'none' }        
                    } }>Approvals</NavLink>
                    </Box>
                    <Box><NavLink to="/issues" style={  ( {isActive}) =>{
                        return isActive ? { color: "red" , textDecoration: 'none' } : { color : "yellow" , textDecoration: 'none' }        
                    } }>Issues</NavLink>
                    </Box>
                    <Box><NavLink to="/report" style={  ( {isActive}) =>{
                        return isActive ? { color: "red" , textDecoration: 'none' } : { color : "yellow" , textDecoration: 'none' }        
                    } }>Reports</NavLink>
                    </Box>
                    <Box><NavLink to="/predictorestimator" style={  ( {isActive}) =>{
                        return isActive ? { color: "red" , textDecoration: 'none' } : { color : "yellow" , textDecoration: 'none' }        
                    } }>PredictorEstimater</NavLink>
                    </Box>
                </Stack>
                <Search sx={{ display: { xs: "none", sm: "flex", flex: 4, } , marginLeft:5, marginRight:5 } }>  <InputBase placeholder='Search...'></InputBase></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon color="action" />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications color="action" />
                    </Badge>
                    <Avatar onClick={e => setOpen(true)} sx={{ width: 30, height: 30 }}></Avatar>
                </Icons>
                <UserBox onClick={e => setOpen(true)} >
                    <Avatar sx={{ width: 30, height: 30 }}></Avatar>
                    <Typography variant='span'>User</Typography>
                </UserBox>

            </StyledToolbar>
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
                <MenuItem onClick={('Hi')}>Profile</MenuItem>
                <MenuItem onClick={('Hi')}>My account</MenuItem>
                <MenuItem onClick={('Hi')}>Logout</MenuItem>
            </Menu>

        </AppBar>
    );
}