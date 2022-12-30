import { Box, Divider, Stack, styled, Typography, createTheme, useMediaQuery, Paper, List, ListItem, ListItemText, Avatar , ListItemAvatar} from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import { selectAllNews } from '../../../App/Redux/Contents/News/NewsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import news from '../../../Data/News/News.json'
 


export const News = ({ darkMode, setDarkMode }) => {
  const { id } = useParams()

 // const news = useSelector( selectAllNews);
  return (
 

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    { 
    
 news.map( (newsItem) => {  return (
  <>
    <ListItem  key={ newsItem.id} alignItems="flex-start">
    <ListItemAvatar>
         <Avatar alt="Cindy Baker" src={newsItem.Media?.[0].id} />
       </ListItemAvatar>
       <ListItemText
         primary={newsItem.title}
         secondary={
           <React.Fragment>
             <Typography
               sx={{ display: 'inline' }}
               component="span"
               variant="body2"
               color="text.primary"
             >
                 
               {newsItem.time}
             </Typography>
             { newsItem.content}
           </React.Fragment>
         }
       />
     </ListItem>
     <Divider variant="inset" component="li" />  
  </>  
 )
   }
 )
  }
   </List>

    
  )
  
  }
     
 