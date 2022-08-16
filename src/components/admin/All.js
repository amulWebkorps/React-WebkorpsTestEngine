import React from "react";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

import { Button } from "@mui/material";

import "../../App.css";

const background1 = {
  height: "100%",
  background: ` linear-gradient(
      180deg,
      rgba(24, 135, 201, 0) 0%,
      rgba(24, 135, 201, 0.224167) 40.42%,
      rgba(24, 135, 201, 0.4) 100%
    )`,
};

const whiteContainer = {
  marginTop: "50px",
  height: "800px",
  background: "#f9fafc",
  boxShadow: " 2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "18px",
};
const buttonLevel = {
  width: "260px",
  height: "51px",
  background: "#0057ff",
  borderRadius: "18px 18px 18px 18px",
  fontWeight: "700",
  fontSize: "25px",
  lineHeight: "19px",
  textTransform: "none",
};

const divHeight = {
  height: "600px",
  overflowY: "scroll",
 
};


const levelText ={
  fontFamily: "Raleway",
fontSize: "34px",
fontWeight: "600",
lineHeight: "40px",
letterSpacing: "0em",
textAlign: "left",



  
}

const levelSubHeading = {
  width: "100%",
  height: "89px",

  background: "#F9FAFC",
  borderRadius: "17px 17px 0px 0px",
};

const All = () => {
  return (
    <div style={background1}>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item>
          <Button variant="contained" sx={buttonLevel}>
            All questions
          </Button>
        </Grid>
      </Grid>
      <Container maxWidth="md" sx={whiteContainer}>
        <Grid container sx={divHeight}>
          <Grid item sx={levelSubHeading}>
         <Typography sx={levelText}> Available Questions</Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default All;
