import { Button, Checkbox, Container, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Header from "../UI/Header";
import BackButton from "../UI/BackButton";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
  width: "60vw",
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
  background: "#F1F1F1",
  borderRadius: `15px 0px 0px 15px`,
  color: "#0057FF",
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
  height: "70px",
  // width: "63vw",
  marginTop: "10px",
  // background: "red",
  background: "#FFFFFF",
  boxShadow: `2px 9px 19px rgba(230, 230, 230, 0.37)`,
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "auto",
  p: `0px 15px 0px 15px`,
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
function McqParticipator() {
  const navigate = useNavigate();
  return (
    <div style={background1}>
      <Header />
      <BackButton />
      <Container>
        <Box sx={MainBox}>
          <Box sx={QuestionBox} onClick={() => navigate("/mcqPage")}>
            MCQ
          </Box>
          <Box sx={AnswerBox}>Participators</Box>
        </Box>
        <Container sx={MainContainer}>
          <Box sx={innerHeading}>
            <Typography sx={Answerheading}>Answer Sheets</Typography>
            <Box sx={innerSearch}>
              <IconButton type="submit" sx={searchIcon}>
                <SearchIcon />
              </IconButton>
              <InputBase placeholder="Unique ID or Name" sx={searchField} />
            </Box>
          </Box>

          {[
            "Avatars containing simple characters can be created by ",
            " Avatars containing simple characters can be created by. ",
            " Avatars containing simple characters can be created by. ",
            " Avatars containing simple characters can be created by. ",
            " Avatars containing simple characters can be created by. ",
            " Avatars containing simple characters can be created by. ",
          ].map((val, index) => {
            return (
              <Grid sx={maindata}>
                <Box sx={innerdata}>
                  <Typography sx={UniqueId}> {index + 1}</Typography>
                  <Typography sx={UserName}>{val}</Typography>
                </Box>
                <Box sx={innerdata}>
                  <Button>
                    <Typography sx={ViewDetail}>80%</Typography>
                  </Button>

                  <Grid item mt={1}>
                    <Checkbox
                      value={val}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon color="#0057ff" />}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                    />
                  </Grid>
                </Box>
              </Grid>
            );
          })}
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            <Button variant="contained" sx={sentMails}>
              Sent Emails
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={sendMails}>
              Send Emails
            </Button>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default McqParticipator;
