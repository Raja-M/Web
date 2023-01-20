import { Box, Divider, Stack, styled, Typography, createTheme, useMediaQuery, Paper, List, ListItem, ListItemText, Avatar , ListItemAvatar} from '@mui/material';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { selectAllNews } from '../../../App/Redux/Contents/News/NewsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

 
import news from '../../../Data/News/News.json'
import { FiberPin, Google } from '@mui/icons-material';

export const News = ({ darkMode, setDarkMode }) => {
  const { id } = useParams()

 // const news = useSelector( selectAllNews);
  return (
    <List   sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
    { 
   news.map( (newsItem) => {  
    
    const Media = newsItem.Media;

    const thumbnail = Media.filter( (media) => media.type.toLowerCase().includes( 'thumbnail') )
    
    

    const thumbnailPath = thumbnail[0].path;

    console.log(" Thumbnail : " + thumbnail[0].path  +  thumbnailPath);

    return (
  <>
    <Link to={newsItem.id.toString()}> 

    <ListItem  key={ newsItem.id} alignItems="flex-start">

    <ListItemAvatar>
        <Avatar
            src={ require( `../../../${thumbnailPath}`  ) } 
            variant="square"
        >
        </Avatar>     
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
     </Link>
  </>  
 )
   }
 )
  }
   </List>

    
  )
  
  }
     
 