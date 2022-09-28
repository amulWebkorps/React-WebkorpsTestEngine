import { Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { logo } from "../assests/images";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/thank.css";
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
const copyright = {
  color: "white",
  textAlign: "center",
  fontSize: "15px",
  fontWeight: "600",
  position: "absolute",
  bottom: "0",
  transform: `translate(-50%, -50%)`,
  left: "50%",
};

const Thankupage = () => {
  const navigate = useNavigate();
  const date=new Date();
  const year=date.getFullYear();
  useEffect(() => {
    window.onbeforeunload = function () {
      console.log("akkk");
      return true;
    };

    return () => {
      window.onbeforeunload = null;
      console.log("kkk");
    };
}, []);

useEffect(() => {
  window.addEventListener("popstate", (event) => {
    navigate("/thanku");
  });
  if (window.location.pathname === "/thanku") {
    navigate("/thanku");
  } else {
    navigate("/thanku");
  }
}, [window, navigate]);

  return (
    <>
      <div className="box">
        <h1 className="thank">Thank You</h1>
        <p className="textt">Your Assessment has been submitted successfully..!</p>
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
        </div>
      </div>
      <Typography sx={copyright}>Copyright@webkorps{year}</Typography>
      {/* <Grid container>
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
          <Typography sx={pageNot}>Your code is  successfully submitted</Typography>
          
        </Box>
      </Box> */}
    </>
  );
};

export default Thankupage;
