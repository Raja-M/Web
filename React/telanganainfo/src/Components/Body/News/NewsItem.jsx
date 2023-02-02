import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useParams } from "react-router-dom"

// import news from '../../../Data/News/News.json'

import { selectNewsById } from '../../../App/Redux/Contents/News/NewsSlice';
import { useSelector  } from 'react-redux';

import Author from '../../Common/Author';
import Timeago from '../../Common/Timeago';
import ReactionButton from '../../Common/ReactionButton';
import { parseISO, formatDistanceToNow, format } from 'date-fns'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NewsItem() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { id } = useParams()

  console.log( " id + " + id );

  const newsItem = useSelector(  (state) => selectNewsById( state, Number(id)) )

  return (
    <>
        <article  style={{ display:'block'  }}>
              <h3>{newsItem.title}</h3> 
                      { <Author userId={newsItem.userId} > </Author>}
                      { formatDistanceToNow(  new Date(newsItem.time)) + " ago" }
              <p> {newsItem.content}</p>
              <ReactionButton post={newsItem}> </ReactionButton> 
        </article>
    </>
    
  );
  /*
  const newsItem = news.filter( (newsItem) => { 
  return newsItem.id.toString() == id  }  ); 


  
  const medias = newsItem[0].Media;
  const thumbNail = medias.filter( (media) =>  { return media.type.trim().toString().toLowerCase().includes("medium")}) ;
  const thumbnailPath = thumbNail[0].path
  const mediumImagePath = `../../../${thumbNail[0].path}` ; 
  console.log( " Thumbnail 3 : " +  mediumImagePath );

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={newsItem[0].title}
        subheader={newsItem[0].time}
      />
      <CardMedia
        component="img"
         
        image={ require( `../../../${thumbnailPath}`  )}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
           {newsItem[0].content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
         
      </CardActions>
       
    
    </Card>
  );

  */
}