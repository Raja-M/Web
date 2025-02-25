import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import React, { useState } from 'react';

const MainHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); // Set anchor element to the button clicked
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };

  return (
    <>
      <Box>
        <AppBar>
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '15vh',
              background: 'white',
              width: '100%',
              color: 'black',
            }}
          >
            <Box
              sx={{
                height: '60%',
                width: '100%',
                border: '2px',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  margin: '0 10%',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Box
                  sx={{
                    flex: '1 0 autho',
                    height: '100%',
                    justifySelf: 'flex-start',
                    alignSelf: 'flex-start',
                  }}
                >
                  <img
                    src="/assets/TGNews.jpg"
                    style={{ height: '100%', width: '100%', objectFit: 'fill' }}
                    alt="Logo"
                  />
                </Box>

                <Box
                  sx={{
                    flex: 15,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: '"DM Serif Text", serif',
                      fontWeight: 600,
                      fontStyle: 'normal',
                      fontSize: '3rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    TGNEWS
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flex: 4,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="/assets/kakatiya.jpg"
                    style={{ height: '80%', width: '100%', objectFit: 'fill' }}
                    alt="Logo"
                  />
                  <img
                    src="/assets/tgst.jpeg"
                    style={{ height: '100%', width: '100%', objectFit: 'fill' }}
                    alt="Logo"
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                height: '20%',
                width: '100%',
                background: 'black',
              }}
            >
              <Box
                sx={{
                height: '100%',
                margin: '0 10% 0 20%',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    flex: 2,
                    display: 'flex',
                    backgroundColor: 'black',
                    color: 'white',
                    justifyContent: 'flex-start',
                    alignContent: 'flex-start',
                  }}
                >
                  <Button
                    onClick={handleClick}
                    sx={{ flex: 1, color: 'white' }}
                  >
                    Home
                  </Button>
                  <Button
                    onClick={handleClick}
                    sx={{ flex: 1, color: 'white' }}
                  >
                    News
                  </Button>
                  <Button
                    onClick={handleClick}
                    sx={{ flex: 1, color: 'white' }}
                  >
                    Info
                  </Button>
                  <Button
                    onClick={handleClick}
                    sx={{ flex: 1, color: 'white' }}
                  >
                    Money
                  </Button>
                  <Button
                    onClick={handleClick}
                    sx={{ flex: 1, color: 'white' }}
                  >
                    Health
                  </Button>
                  <Button
                    onClick={handleClick}
                    sx={{ flex: 1, color: 'white' }}
                  >
                    Sports
                  </Button>
                  <Button
                    onClick={handleClick}
                    sx={{ flex: 1, color: 'white' }}
                  >
                    World
                  </Button>
                  <Button
                    onClick={handleClick}
                    sx={{ flex: 1, color: 'white' }}
                  >
                    తెలుగు
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                height: '20%',
                width: '100%',
                background: 'white',
              }}
            >
              <Box
                sx={{
                  margin: '0 10%',
                }}
              ></Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default MainHeader;
