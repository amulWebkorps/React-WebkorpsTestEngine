import React from "react";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import { logo } from "../assests/images";

const Headers = {
  height: "14vh",
  background: "#121419",
  width: "100%",
  display: "flex",
  flexDirection: "Row",
};

const logoText = {
  height: " 56px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "45px",
  lineHeight: "52px",
  color: "#1887C9",
};

const Header = () => {
  return (
    <div >
      <Grid container>
        <Grid item sx={Headers}>
          <Box ml={2} my={2}>
            <img src={logo} alt="logo" />
          </Box>
          <Box sx={logoText} my={3}>
            Webkorps
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
