import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Box, Button, Paper, styled } from '@mui/material';

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { alignProperty } from '@mui/material/styles/cssUtils';
import SettingsIcon from '@mui/icons-material/Settings';
import { Add, Settings } from '@material-ui/icons';

const BuleButton = styled(Button)  ( ({theme}) =>   ({
//    backgroundColor: theme.palette.primary.main,
    backgroundColor:"skyblue",
    color:"#888",
    margin:5,
    "&:hover": {
        backgroundColor:"lightblue"
    },
    "&:disabled" : {
        backgroundColor:"gray",
        color:"white"
    }    

})  )

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginLeft: theme.spacing(10),
    '&:hover': {
      color: 'yellow',
      borderBottom: '1px solid white',
    },
  },
}));

const Navbar = () => {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Contained
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add New Post
      </Button>

      <Typography variant="h1" component="p">
        It uses h1 style and uses p
      </Typography>
      <BuleButton> My Button </BuleButton>
    </div>
  );
};

export default Navbar;
