import { Button, Checkbox, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../UI/Header";
import BackButton from "../UI/BackButton";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import McqModel from "../UI/McqModel";
import { useEffect } from "react";
import { fontWeight, height } from "@mui/system";

const BigContainer = {
  minWidth: "100vw",

  height: "100vh",
  background: `linear-gradient(
        180deg,
        rgba(24, 135, 201, 0) 0%,
        rgba(24, 135, 201, 0.224167) 40.42%,
        rgba(24, 135, 201, 0.4) 100%
      )`,
};
const background1 = {
  height: "100vh",
  background: `linear-gradient(
      180deg,
      rgba(24, 135, 201, 0) 0%,
      rgba(24, 135, 201, 0.224167) 40.42%,
      rgba(24, 135, 201, 0.4) 100%
    )`,
  overflow: "auto",
};

const MainContainer = {
  background: "#F9FAFC",
  width: "50vw",
  height: "44vh",
  boxShadow: `2px 9px 19px rgba(230, 230, 230, 0.37)`,
  borderRadius: "17px",
  overflow: "auto",
};

const MainBox = {
  height: "15vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};
const QuestionBox = {
  cursor: "pointer",
  width: "250px",
  height: "55px",
  background: "#FDFEFF;",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  borderRadius: `18px 0px 0px 18px`,
  fontWeight: 700,
  fontSize: "20px",
};

const AnswerBox = {
  cursor: "pointer",
  width: "250px",
  height: "55px",
  background: "#0057FF",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  borderRadius: `0px 18px 18px 0px`,
  fontWeight: 700,
  fontSize: "20px",
};

const innerHeading = {
  // width: "70vw",
  // height: "71vh",
  background: "#F9FAFC",
  borderRadius: " 17px 17px 0px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "25px",
  // marginRight: "30px",
  paddingTop: "10px",
};

const innerSearch = {
  display: "flex",
  height: "40px",
  // width: "50%",
};

const searchIcon = {
  marginRight: "100px",
  fontWeight: "Bold",
  height: "23px",
};

const searchField = {
  background: "#F1F1F1",
  opacity: 0.5,
  borderRadius: `0px 15px 15px 0px`,
  marginRight: "10px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "16px",
  color: "#000000",
};

const Answerheading = {
  width: "50%",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "34px",
};

const maindata = {
  marginTop: "40px",

  alignItems: "center",
  justifyContent: "space-between",
};

const innerdata = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const UniqueId = {
  fontSize: "20px",
  marginRight: "5px",
  color: "#1887C9",
};
const UserName = {
  fontSize: "20px",
  marginLeft: "2vh",
};
const divText = {
  width: "80%",
  height: "28px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#ff8000",
  marginLeft: "20px",
  marginTop: "20px",
};

const ViewDetail = {
  marginRight: "50px",
  fontSize: "20px",
  color: "#0057FF",
};

const sentMails = {
  fontSize: "8",
  fontWeight: "600",
  color: "#1887C9",
  borderRadius: "6px",
  marginTop: "47px",
  marginLeft: "27px",
  background: "transparent",
  border: "#0057FF solid 3px",
};
const sendMails = {
  fontSize: "8",
  fontWeight: "600",
  color: "white",
  borderRadius: "6px",
  marginTop: "47px",
  marginLeft: "27px",
};
const btn = {
  width: "55vw",
  justifyContent: "end",
};
const divSelect = {
  width: "140px",
  height: "66px",
  background: "#FFFFFF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  marginTop: "10px",
  // marginLeft: "100px",
  justifyContent: "space-between",
  textAlign: "centre",
  fontSize: "20px",
  marginLeft: "2vh",
};


function McqQuestion() {
  return (
    <>
      <div style={background1}>
        <Header />
        <BackButton />
        <Container>
          <Container sx={MainContainer}>
            <Box sx={innerHeading}>
              <Typography sx={Answerheading}>Question</Typography>
              <Box sx={innerSearch}>
                <Typography sx={searchIcon}>Time:</Typography>
              </Box>
            </Box>

            {[
              {
                mcqQuestion: "What is full form?",
                option1: "Ram",
                option2: "sita",
                option3: "ram",
                option4: "sita",
              },
            ].map((val, index) => {
              return (
                <>
                  <Grid sx={maindata}>
                    <Typography sx={UserName}>{val.mcqQuestion}</Typography>
                  </Grid>

                  <Grid container  spacing={2}>
                    <Grid item xs={6}>
                      <Typography sx={divSelect}>{val.option1}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={divSelect}>{val.option2}</Typography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography sx={divSelect}>{val.option3}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={divSelect}>{val.option4}</Typography>
                    </Grid>
                  </Grid>
                </>
              );
            })}
          </Container>
          <Container>
            <Grid container sx={btn}>
              <Grid item>
                <Button variant="contained" sx={sentMails}>
                  Previous
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" sx={sendMails}>
                  Next Question
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default McqQuestion;
