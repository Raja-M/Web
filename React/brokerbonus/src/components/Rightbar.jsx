import React from 'react'
import {    Avatar, 
            AvatarGroup, 
            Box, 
            ImageList, 
            ImageListItem, 
            Typography, 
            List ,
            ListItem,
            ListItemText,
            ListItemAvatar,
            Divider

        } from '@mui/material';

  
 

export const Rightbar = () => {
    return (
        <Box sx={{

            flex: 2,
            padding: 2,
            display: { xs: 'none', sm: 'block' },
        }}
            height={700}

        >
            <Box   width={300} >
                <Typography variant="h6" fontWeight={100}> Online Users </Typography>
                <AvatarGroup total={7}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                {/*
                <Typography variant="h6" fontWeight={100} marginTop={2} marginBottom={2} > Latest Updates </Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1666845270404-40def71fb33b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80"
                        ></img>
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1666845270404-40def71fb33b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80"
                        ></img>
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1666845270404-40def71fb33b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80"
                        ></img>
                    </ImageListItem>

                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1666845270404-40def71fb33b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80"
                        ></img>
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1666845270404-40def71fb33b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80"
                        ></img>
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1666845270404-40def71fb33b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80"
                        ></img>
                    </ImageListItem>

                </ImageList>
    */}
                <Typography variant="h6" fontWeight={100} marginTop={2} marginBottom={2} > Latest Updates </Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Mike Durbano" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Florida Market Bonuses Approved?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Mike Durbano
                                    </Typography>
                                    {" — We are waiting for Bonus approvals to disburse the payments…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Rober Dennis" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Sales corrrected"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Robert Dennis
                                    </Typography>
                                    {" — Sales are corrected for All Star agency and reverted for recalcualation…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="All Savers Data Corrected"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Michael L Schaack
                                    </Typography>
                                    {' — All savers Business type corrected Ready for reprocessing…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                     
                </List>

            </Box>
        </Box>
    )
}
