import { Box, Stack } from "@mui/material";
import React from "react";
import Home from "../../Home/Home";
import Header from "../Header/Header";
import RightPanel from "./RightPanel";
import SidePanel from "./SidePanel";

const Body = () => {
  return (
    <div>
      <Box >
        <Stack  sx={{ marginTop: '5px' }} direction="row" spacing={10}>
          <SidePanel></SidePanel>
          <Home></Home>
          <RightPanel></RightPanel>
        </Stack>
      </Box>
    </div>
  );
};

export default Body;
