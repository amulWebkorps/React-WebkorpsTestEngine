import { Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { logo } from "../assests/images";

const BigContainer = {
  background: `linear-gradient(180deg, rgba(24, 135, 201, 0) 0%, rgba(24, 135, 201, 0.224167) 40.42%, rgba(24, 135, 201, 0.4) 100%)`,
  height: "86vh",
  minWidth: "100vw",
  position: "relative",
  opacity: 0.8,
};

const MainContainer = {
  background: "#F9FAFC",
  width: "70vw",
  height: "71vh",
};

const Headers = {
  height: "14vh",
  background: "#FDFEFF",
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

const MainBox = {
  height: "15vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const QuestionBox = {
  width: "330px",
  height: "71px",

};

const AnswerBox = {
    width: "330px",
  height: "71px",
}

const AnswerSheet = () => {
  return (
    <>
      <Grid item sx={Headers}>
        <Box ml={2} my={2}>
          <img src={logo} alt="logo" />
        </Box>
        <Box sx={logoText} my={3}>
          Webkorps
        </Box>
      </Grid>
      <Container sx={BigContainer}>
        <Box sx={MainBox}>
          <Box sx={QuestionBox}>Questions</Box>
          <Box sx={AnswerBox}>Participators</Box>
        </Box>
        <Container sx={MainContainer}></Container>
      </Container>
    </>
  );
};

export default AnswerSheet;
