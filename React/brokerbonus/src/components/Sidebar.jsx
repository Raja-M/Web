import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Home from '@mui/icons-material/Home';
import Switch from '@mui/material/Switch';



export const Sidebar = ({darkMode, setDarkMode}) => {
    return (
        <Box xs={12} sx={{

            flex: 2,
            padding: 2,
            display: { xs: 'flex', sm: 'block' }
        }}
        >
            <Box position={'fixed'}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home></Home>
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <Home></Home>
                            </ListItemIcon>
                            <ListItemText primary="Programs" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#groups">
                            <ListItemIcon>
                                <Home></Home>
                            </ListItemIcon>
                            <ListItemText primary="Customers" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#marketplace">
                            <ListItemIcon>
                                <Home></Home>
                            </ListItemIcon>
                            <ListItemText primary="Producers" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#friends">
                            <ListItemIcon>
                                <Home></Home>
                            </ListItemIcon>
                            <ListItemText primary="Approvals" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#settings">
                            <ListItemIcon>
                                <Home></Home>
                            </ListItemIcon>
                            <ListItemText primary="Issues" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <Home></Home>
                            </ListItemIcon>
                            <ListItemText primary="Reports" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <Home></Home>
                            </ListItemIcon>
                            <ListItemText primary="Mode" />
                            <Switch onChange={e=>setDarkMode( darkMode ? false : true)}></Switch>
                        </ListItemButton>
                    </ListItem>






                </List>
            </Box>
        </Box>
    )
}
