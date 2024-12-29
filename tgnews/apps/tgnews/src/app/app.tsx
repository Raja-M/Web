// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NxWelcome from './nx-welcome';
import { Box, Paper } from '@mui/material';

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { alignProperty } from '@mui/material/styles/cssUtils';

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

export function App() {
  const classes = useStyles();
  return (
    <div>
      <html lang="en">
        <head></head>
        <body>
          <Paper elevation={10}>
            <Box
              display="flex"
              sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Box
                sx={{
                  border: 0,
                  height: 100,
                  width: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="..\assets\TGNews.jpg"
                  width="100px"
                  height="100px"
                ></img>
              </Box>
              <Router>
              <Box
                sx={{
                  border: 0,
                  height: 100,
                  width: 1100,
                  justifyContent: 'center',
                  alignItems: 'bottom',
                }}
              >
                

                    <AppBar position="static" align-item="bottom" >
                      <Toolbar >
                        <div className={classes.navlinks} >
                          <Link to="/news" className={classes.link}>
                            News
                          </Link>

                          <Link to="/info" className={classes.link}>
                            Info
                          </Link>
                          <Link to="/finance" className={classes.link}>
                            Finance
                          </Link>
                          <Link to="/sports" className={classes.link}>
                            Sports
                          </Link>
                          <Link to="/health" className={classes.link}>
                            Helath
                          </Link>
                          <Link to="/telugu" className={classes.link}>
                          తెలుగు
                          </Link>
                        </div>
                      </Toolbar>
                    </AppBar>

                </Box>
                </Router>
              </Box>
 
            <Box
              display="flex"
              sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Box
                sx={{
                  border: 1,
                  height: 10000,
                  width: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              ></Box>
              <Box
                sx={{
                  border: 1,
                  height: 10000,
                  width: 800,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div></div>
              </Box>

              <Box
                sx={{
                  border: 1,
                  height: 10000,
                  width: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              ></Box>
            </Box>
          </Paper>
        </body>
      </html>
    </div>
  );
}

export default App;
