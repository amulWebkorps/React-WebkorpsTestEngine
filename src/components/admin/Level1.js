import React from "react";
import { Grid, Typography } from "@mui/material";
import { Container} from "@mui/system";

import "../../App.css";

import { crossbtn } from "../assests/images";

import { Box } from "@mui/system";


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
    height: "1000px",
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
    fontFamily: "Raleway",
    fontStyle: "normal",
    paddingTop: "12px",
    paddingLeft: "25px",
  
    color: "#FFFFFF",
  };
  
  const levelText = {
    fontFamily: "Raleway",
    fontSize: "34px",
    fontWeight: "600",
    lineHeight: "40px",
    letterSpacing: "0em",
    textAlign: "left",
  };
  
  const buttonEmail = {
    fontSize: "8",
    fontWeight: "600",
    color: "white",
    borderRadius: "6px",
    width: "160px",
    marginLeft: "20px",
  };
  
  const levelSubHeading = {
    width: "100%",
    height: "89px",
    background: "#F9FAFC",
    borderRadius: "17px 17px 0px 0px",
  };
  
  const divText = {
    width: "515px",
    height: "28px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#000000",
    marginLeft: "20px",
  };
  
  const scrollDiv = {
    overflowY: "auto",
  };
  
  const divSelect = {
    width: "1120px",
    height: "76px",
    background: "#FFFFFF",
    boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
    borderRadius: "14px",
    marginTop: "10px",
  };
  
  const containerUpper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };

  const editQuestion ={
    width:"147px",
    height: "28px",
  
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "20px",
    lineHeight: "28px",
    textDecorationLine: "underline",
    paddingTop: "15px",
    color: "#0057ff",
  }
  
  const array = [1, 2, 3, 4, 5,6,4,4,45,5,5,1,22,5,5,4,5,6,];
  

const Level1 = () => {
  return (
    <div style={background1}>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item>
          <Box variant="contained" sx={buttonLevel}>
           Level1 Questions
          </Box>
        </Grid>
      </Grid>
      <Container sx={whiteContainer} fixed>
        <Grid sx={containerUpper}>
          <Grid item sx={levelSubHeading}>
            <Typography sx={levelText} mt={2}>
              Available Questions
            </Typography>
          </Grid>
         
        </Grid>
        <Grid container sx={{height: '400px' , overflow: 'auto'}}>
          {array.map((val) => {
            return (
              <Grid container sx={divSelect}>
                <Grid item sm={9} sx={scrollDiv}>
                  <Typography sx={divText}>
                    write a progrom to make a star
                  </Typography>
                </Grid>
                <Grid item sm={2} mt={1} >
                <Typography sx={editQuestion}>Edit Questions</Typography>  
                </Grid>
                <Grid item sm={1} mt={2} x={{ justifyContent: "end" }}>
                  <img src={crossbtn} alt="cross" />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  )
}

export default Level1