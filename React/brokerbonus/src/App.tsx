import React, { useState } from "react";
import {
  Box,
  Divider,
  Stack,
  styled,
  Typography,
  createTheme,
  useMediaQuery,
  Grid,
  Paper,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Navbar } from "./components/Navbar";
import { Add } from "./components/Add";
import { ThemeProvider } from "@emotion/react";
import { text } from "stream/consumers";
import { palette } from "@mui/system";
import { Palette } from "@mui/icons-material";
import { Body } from "./components/common/Body";
import Counter from "./redux/features/counter/Counter";

import { Provider } from "react-redux";
import { Store } from "./redux/store/Store";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      {" "}
      <ThemeProvider theme={darkTheme}>
        <Box
          bgcolor={darkTheme.palette.background.default}
          color={darkTheme.palette.text.primary}
        >
          <Grid container direction="row" spacing={2} flex="1">
            <Grid item xs={12}>
              <Provider store={Store}>
                <Navbar></Navbar>
                <Grid container direction="row" spacing={2} flex="1">
                  <Grid item xs={12}>
                    <Body darkMode={darkMode} setDarkMode={setDarkMode}></Body>
                  </Grid>

                  <Grid item xs={12}>
                    <Add></Add>
                  </Grid>
                </Grid>
              </Provider>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
