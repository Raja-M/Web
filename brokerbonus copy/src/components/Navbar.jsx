
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

import { Badge, InputBase } from '@mui/material';

import PriceChangeIcon from '@mui/icons-material/PriceChange';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';
import { flexbox } from '@mui/system';

const pages = ['Home', 'News', 'Politics', 'Info', 'Money', 'Entertainment'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const StyledToolbar = styled(Toolbar)({
    
    display: 'flex',
    justifyContent: 'space-between' ,
    
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

    const[open, setOpen] = useState(false);

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
                    <PriceChangeIcon sx={{ display: { xs: 'flex', sm: 'flex' } }}></PriceChangeIcon>
                    <Typography variant='h5' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        Broker Bonus Managment
                    </Typography>
                </Box>
                <Search> <InputBase placeholder='Search...'></InputBase></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon color="action" />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications color="action" />
                    </Badge>
                    <Avatar onClick={e=>setOpen(true)} sx={{ width: 30, height: 30 }}></Avatar>
                </Icons>
                <UserBox  onClick={e=>setOpen(true)} >  
                    <Avatar  sx={{ width: 30, height: 30 }}></Avatar>
                    <Typography variant='span'>User</Typography>
                </UserBox>

            </StyledToolbar>
            <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={ (e) => setOpen(false)}
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
                    <MenuItem onClick={ ('Hi')}>My account</MenuItem>
                    <MenuItem onClick={ ('Hi')}>Logout</MenuItem>
                </Menu>

        </AppBar>
    );
}