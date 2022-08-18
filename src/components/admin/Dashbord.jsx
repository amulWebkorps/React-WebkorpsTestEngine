import React, { useState } from "react";
import { Container, Grid, Fab,} from "@mui/material";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { contestImg,} from "../assests/images";
import CancelIcon from "@mui/icons-material/Cancel";
import Header from "../UI/Header";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";

import Modal from "../UI/Modal";
import {  useNavigate } from "react-router-dom";




const containerStyle = {
  overflowY: "auto",
  height: "68vh",
  background: "linear-gradient(90.17deg, #00a0ff 0.13%, #003aab 99.84%)",
  display: "flex",
  flexDirection: "row",
  marginBottom: "40px",
  paddingBottom: "30px",
};

const createContext = {
  marginTop: "27px",
  background: "#F9F9F9",
  borderRadius: "18px 18px 0px 0px",
  padding: "30px",
  position: "sticky",
  textAlign: "center",
  height: "11vh",
};

const text = {
  margin: "-10px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "48px",
  lineHeight: "56px",
};

const app = {
  height: "100vh",
  background: `linear-gradient(
      180deg,
      rgba(24, 135, 201, 0) 0%,
      rgba(24, 135, 201, 0.224167) 40.42%,
      rgba(24, 135, 201, 0.4) 100%
    )`,
  overflow: "auto",
};

const card = {
  width: "220px",
  maxHeight: "27vh",
  borderRadius: "11px",
};

const cardImg = {
  padding: "10px",
};

const cardBody = {
  height: "120vh",
  background: `linear-gradient(
    180deg,
    rgba(24, 135, 201, 0) 0%,
    rgba(24, 135, 201, 0.224167) 40.42%,
    rgba(24, 135, 201, 0.4) 100%
  )`,
  overflow: "auto",
  backgroundColor: "#F8F7F7",
};

const contestText = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "21px",
  color: "#3D3D3D",
};
const contestDate = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: 200,
  fontSize: "10px",
  lineHeight: "12px",
};

const createContest = {
  marginTop: "40px",
  width: "220px",
  maxHeight: "27vh",
  borderRadius: "11px",
};

const addButton = {
  padding: "15px",
  marginTop: "30px",
  width: "84px",
  height: "84px",
  marginLeft: "68px",
  marginBottom: "13px",
  backgroundColor: "#2196F3",
};

const delBtn1 = {
  position: "absolute",
  top: "-0.5%",
  right: "-2%",
  color: "black",
};

const forwardIcon = {
  transform: " rotate(-90deg)",
  position: "absolute",
  top: `calc(50% - -78px)`,
  color: "white",
};
const backIcon = {
  transform: " rotate(90deg)",
  position: "relative",
  top: `calc(50% - -7px)`,
  justifyContent: "end",
  color: "white",
};
const months = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "14px",
};

const array = [1, 1, 1];
const levels = ["Level 1", "Level 2", "ALL"];
const today = new Date();
const date =
  (today.getDate() < 10 ? "0" + today.getDate() : today.getDate()) +
  "/" +
  (today.getMonth() + 1 < 10
    ? "0" + (today.getMonth() + 1)
    : today.getMonth() + 1) +
  "/" +
  today.getFullYear();

const Dashbord = () => {
  const [showAvailq, setAvailQ] = useState(true);
  const [contestDetails, setContestDetails] = useState([{
    name:"fresher",
    description:"experience from 0 to 6 month",
    level:"level1"
  },
  {
    name:"Experience",
    description:"experience from 1 to 2 Year",
    level:"level 2"
  }]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleContest = () => {
    navigate("/addQuestion");
  };

  const deleteContest = (id) => {
    setContestDetails((val) => {
      return val.filter((val, index) => {
        return index !== id;
      });
    });
  };
  console.log("--dashbord----", contestDetails);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCheck=(index)=>{
    
    if (index===0){
      navigate("/level1");

    }
    else if (index===1){
      navigate("/level2");

    }
    else if (index===2){
      navigate("/allavailable");
    }
    
    
  }
  return (
    <div style={app}>
      <Header />
      {showAvailq ? (
        <>
          <Modal
            open={open}
            setOpen={setOpen}
            handleClickOpen={handleClickOpen}
            setContestDetails={setContestDetails}
            contestDetails={contestDetails}
          />
          <Container sx={createContext}>
            <Typography sx={text}>Contest Created</Typography>
          </Container>
          <Container sx={containerStyle}>
            <Grid container ml={0} mt={2}>
              {contestDetails?.map?.((val, index) => {
                return (
                  <Grid item md={3} mt={5}>
                    <Card sx={card}>
                      <CardActionArea>
                        <CardMedia
                          onClick={() => handleContest()}
                          style={cardImg}
                          component="img"
                          height="140"
                          image={contestImg}
                          alt="green iguana"
                        />
                        <IconButton
                          color="primary"
                          aria-label="add"
                          sx={delBtn1}
                        >
                          <CancelIcon onClick={() => deleteContest(index)} />
                        </IconButton>
                        <CardContent sx={cardBody}>
                          <h6 style={contestText}>
                            {contestDetails?.[index]?.name}&nbsp;~&nbsp;{contestDetails?.[index]?.level}
                          </h6>
                          <p style={months}>
                            {contestDetails?.[index]?.description}
                          </p>
                          <p style={contestDate}>Last Changes {date}</p>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
              <Grid>
                <Card sx={createContest}>
                  <CardActionArea>
                    <CardMedia sx={{ paddingBottom: "16px" }}>
                      <Fab
                        color="primary"
                        aria-label="add"
                        sx={addButton}
                        onClick={() => handleClickOpen()}
                      >
                        <AddIcon fontSize="large" />
                      </Fab>
                    </CardMedia>
                    <CardContent sx={cardBody}>
                      <br />
                      <h4 style={contestText}>create contest</h4>

                      <p style={months}>add Description</p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
            <Grid ml={-5} mt={5}>
              <ExpandCircleDownRoundedIcon
                sx={forwardIcon}
                fontSize="large"
                onClick={() => setAvailQ(false)}
              ></ExpandCircleDownRoundedIcon>
            </Grid>
          </Container>
        </>
      ) : (
        <>
          <Container sx={createContext}>
            <Typography sx={text}>Available Question</Typography>
          </Container>

          <Container sx={containerStyle}>
            <ExpandCircleDownRoundedIcon
              sx={backIcon}
              fontSize="large"
              onClick={() => setAvailQ(true)}
            ></ExpandCircleDownRoundedIcon>
            <Grid container ml={4} mt={2}>
              {levels.map((val, index) => {
                  
                return (
                  <Grid item md={3} mt={5}>
                    <Card sx={card}>
                      <CardActionArea
                       onClick={() => handleCheck(index)}>
                        <CardMedia
                         
                          style={cardImg}
                          component="img"
                          height="140"
                          image={contestImg}
                          alt="green iguana"
                         
                        />
                       
                        <CardContent sx={cardBody}
                        >
                      
                          <h4 style={contestText}>{levels[index]}</h4>
                          <p style={months}>00 months to 06 months</p>
                          <p style={contestDate}>Last Changes {date}</p>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
              <Grid>
                <Card sx={createContest}>
                  <CardActionArea>
                    <CardMedia sx={{ paddingBottom: "16px" }}>
                      <Fab
                        color="primary"
                        aria-label="add"
                        sx={addButton}
                        onClick={() => navigate("/email")}
                      >
                        <AddIcon fontSize="large" />
                      </Fab>
                    </CardMedia>
                    <CardContent sx={cardBody}>
                      <h4 style={contestText}>
                        <h4>Upload A New Participatior</h4>
                      </h4>
                      <p></p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
            <Grid></Grid>
          </Container>
        </>
      )}
    </div>
  );
};

export default Dashbord;
