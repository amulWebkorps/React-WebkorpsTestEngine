import { Button, Typography, Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import { logo } from "../assests/images";
import { Navigate, useNavigate } from "react-router-dom";
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
  height: "54vh",
  width: "100%",
  marginTop: "50px",
};

const text = {
  fontSize: "200px",
  fontWight: 600,
  color: "#1887C9",
  height: "27vh",
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

const dercription = {
  fontSize: "25px",
  color: "white",
  marginTop: "10px",
};

const button = {
  background: "white",
  color: "#1887C9",
  fontWeight: "bold",
  marginTop: "40px",
  borderRadius: "10px",
};
const Errorpage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };
  return (
    <>
      <Grid container>
        <Grid item sx={Headers}>
          <Box ml={2} my={2}>
            {" "}
            <img src={logo} alt="logo" />
          </Box>
          <Box mx={0.5} sx={logoText} my={3}>
            Webkorps
          </Box>
        </Grid>
      </Grid>
      <Box sx={MainBox}>
        <Typography sx={text}>404</Typography>
        <Box sx={centerBox}>
          <Typography sx={pageNot}>Sorry, Page Not Found</Typography>
          <Typography sx={dercription}>
            The page you requested could not be found
          </Typography>
          <Button variant="outlined" sx={button} onClick={handleLogin}>
            GO TO LOGIN PAGE
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Errorpage;
