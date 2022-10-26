import React from "react";
import { AppBar, Box, Stack, styled, Toolbar } from "@mui/material";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
const Navbar = () => {
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ position: "sticky" }}>
        <StyledToolBar>
          <Box flex={2}>Telanganainfo </Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", sm: "flex", flex: 6 } }}
          >
            <Box>Menu</Box>
            <Box>Menu</Box>
          </Stack>
          <Box
            sx={{
              display: { xs: "block", sm: "none", flex: 3, align: "right" },
            }}
          >
            <DensitySmallIcon></DensitySmallIcon>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block", flex: 1, align: "right" },
            }}
          >
            Profile
          </Box>
        </StyledToolBar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
