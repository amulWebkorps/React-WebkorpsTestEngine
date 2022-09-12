
import {  Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { logo } from "../assests/images";
import { Navigate } from "react-router-dom";

const MainBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "87vh",
};

const centerBox = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  background: "#1887C9",
  height: "100vh",
  width: "100%",
 
};

const text = {
  fontSize: "100px",
  fontWight: 600,
  color: "#1887C9",
  height: "20vh",
};

const pageNot = {
  fontSize: "30px",
  fontWight: 600,
  color: "white",
  marginTop: "50px",
};
const Headers = {
  height: "13vh",
  background: "#FDFEFF",
  //background: "red",
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

const Thankupage = () => {
  useEffect(() => {
    window.onbeforeunload = function() {
      console.log('akkk')
        return true;
        
    };

    return () => {
        window.onbeforeunload = null;
        console.log('kkk')
    };
}, []);


  return (
    <>
      <Grid container>
        <Grid item sx={Headers}>
          <Box ml={2} my={2}>
            <img src={logo} alt="logo" />
          </Box>
          <Box mx={0.5} sx={logoText} my={3}>
            Webkorps
          </Box>
        </Grid>
      </Grid>
      <Box sx={MainBox}>
        <Typography sx={text}>Thank you</Typography>
        <Box sx={centerBox}>
          <Typography sx={pageNot}>Your code is  successfully submited</Typography>
          
        </Box>
      </Box>
    </>
  );
};

export default Thankupage;
