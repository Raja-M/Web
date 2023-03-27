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
 

let NewsList = ({newsItem}) => {

  const dispatch = useDispatch();
 
  let newsStatus = useSelector(selectAllNewsStatus);
  let reRender = true;
 

  const allnews = useSelector(selectAllNews);
  const newsError = useSelector(selectAllNewsErrors);

  const news = allnews.filter( ( n) =>  n.userId === newsItem.userId )

 const orderedNews = news.slice().sort(  (a,b) =>  (   news.indexOf(b) -  news.indexOf(a) )   ) ;  
 
 console.log(" Odered New : " + allnews.length);

 console.log(" Odered New : " + orderedNews.length);

 console.log(" news : " + news.length);

 return (
  <>
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

              <Link    to={`/news/${news.id}`} style={{ textDecoration: 'none'  }}  > 
                    <article   style={{ display:'block'  }}>
                    <h3>{  news.title + " " + news.id}</h3> 
            
                    <p> {news.content?.substring(0,100)}</p>
                    </article>
              </Link> 
              <ReactionButton key={news.id} post={news}> </ReactionButton>
               
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
 NewsList = React.memo( NewsList)
 export default NewsList; 
  