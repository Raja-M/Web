import { Box, Divider, Stack, styled, Typography, createTheme, useMediaQuery, Paper, List, ListItem, ListItemText, Avatar , ListItemAvatar} from '@mui/material';
import React , { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom';
import { flushSync } from 'react-dom';
import { useSelector , useDispatch} from 'react-redux';
import { parseISO, formatDistanceToNow, format } from 'date-fns'
import { selectAllNews , selectAllNewsStatus, selectAllNewsErrors, fetchPosts} from '../../../App/Redux/Contents/News/NewsSlice';
import Author from '../../Common/Author';
import Timeago from '../../Common/Timeago';
import ReactionButton from '../../Common/ReactionButton';
 
//import news from '../../../Data/News/News.json'
import { FiberPin, Google } from '@mui/icons-material';
import { nanoid } from '@reduxjs/toolkit';
import NewsEdit from '../Manage/News/NewsEdit';

export const News = ({ Detail, darkMode, setDarkMode }) => {

  const dispatch = useDispatch();
 
  let newsStatus = useSelector(selectAllNewsStatus);
  let reRender = true;

/*
  useEffect(  () => {
    console.log( " User effect News Status :" + newsStatus); 
    if( newsStatus === 'idle' && reRender){
        
        console.log( "Calling dispatchs :" + newsStatus); 
        reRender = false;
        console.log( "Calling dispatchs :" + reRender); 
        dispatch( fetchPosts())
         
    } else if ( newsStatus !== 'idle'){
      reRender = true;
    }
  }, [newsStatus  ] )
 
*/
  const news = useSelector(selectAllNews);
 

 const orderedNews = news.slice().sort(  (a,b) =>  (   news.indexOf(b) -  news.indexOf(a) )   ) ;  
 

 return (
  <>
{ 

(
  () => { 
    

        return(   
          
         
        
          <div >  
 
          { Detail ? (   
                      <NewsEdit darkMode={darkMode} setDarkMode={setDarkMode} ></NewsEdit>
                        
                    ) : 
                    (   ''
                    ) 
          }
          </div>  
          )
 
  }  
  ) ()
}


  { 

    (
      () => { 
        
        if ( newsStatus === 'idle'){
            return( <p> " Loading .... "</p> )
        }else if ( newsStatus === 'loading'){
            return(  <p> " Loading .... "</p>  )
        }else if (  newsStatus === 'succeeded'){  
            return(   
              
              orderedNews.map( news => (
            
              <div key={news.id}>  

              <Link    to={`${news.id}`} style={{ textDecoration: 'none'  }}  > 
                    <article   style={{ display:'block'  }}>
                    <h3>{  news.title + " " + news.id}</h3> 
                            <Author userId={news.userId} > </Author>
                            {formatDistanceToNow(  new Date(news.time)) + " ago" }
                    <p> {news.content?.substring(0,100)}</p>
                    </article>
              </Link> 
              <ReactionButton key={news.id} post={news}> </ReactionButton>
              { Detail ? (  <NavLink to={`/manage/news/${news.id}` } >
                              <button type="submit" >Edit</button>
                            </NavLink> 
                        ) : 
                        (   ''
                        ) 
              }
              </div>  
              )
            )
            
            );
        } else if (newsStatus === 'failed'){
            return ( <p> " Error .... "</p> );
        }
      }  
      ) ()
  }
  </>

   )
 
 }  
 
  
 
    /*
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
   */  
 