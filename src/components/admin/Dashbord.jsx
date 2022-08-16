import React, { useState } from "react";
import { Container, Grid, Fab, Button, Box } from "@mui/material";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { contestImg, logo } from "../assests/images";
import CancelIcon from "@mui/icons-material/Cancel";
import Header from "../UI/Header";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import CardActions from "@mui/material/CardActions";
import Modal from "../UI/Modal";
import { Navigate, useNavigate } from "react-router-dom";

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

const cardBody = { height: "100vh",
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
  fontSize: "18px",
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
  // margin:"10px",
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
  //  background:"black"
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
const levels = ["Level 1", "Level 2", "Level 3", "ALL"];
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
  const [open, setOpen] = useState(false);
  const navigate=useNavigate()
  const handleContest=()=>{
    navigate('/addQuestion')

    console.log('-----')
  }
  const handleClickOpen = () => {
    setOpen(true);

  
  };


  return (
    <div style={app}>
      <Header />
      {showAvailq ? (
        <>
          <Modal
            open={open}
            setOpen={setOpen}
            handleClickOpen={handleClickOpen}
          />
          <Container sx={createContext}>
            <Typography sx={text}>Contest Created</Typography>
          </Container>
          <Container sx={containerStyle}>
            <ExpandCircleDownRoundedIcon
              sx={forwardIcon}
              fontSize="large"
              onClick={() => setAvailQ(false)}
            ></ExpandCircleDownRoundedIcon>

            <Grid container ml={4} mt={2}>
              {array.map((val, index) => {
                return (
                  <Grid item md={3} mt={5}>
                    <Card sx={card}>
                      <CardActionArea>
                        <CardMedia
                         onClick={()=>handleContest()}
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
                          <CancelIcon
                            onClick={() => alert("contest deleted succesfully")}
                          />
                        </IconButton>
                        <CardContent sx={cardBody}>
                          <h4 style={contestText}>Fresherss</h4>
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
                        onClick={() => handleClickOpen()}
                      >
                        <AddIcon fontSize="large" />
                      </Fab>
                    </CardMedia>
                    <CardContent sx={cardBody}>
                    <br/>
                      <h4 style={contestText}>create contest</h4>
                      
                      <p style= {months}>add Description</p>
                     
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <>
          <Container sx={createContext}>
            <Typography sx={text}>available question</Typography>
          </Container>

          <Container sx={containerStyle}>
            <Grid container ml={4} mt={2}>
              {levels.map((val, index) => {
                return (
                  <Grid item md={3} mt={5}>
                    <Card sx={card}>
                      <CardActionArea>
                        <CardMedia
                          style={cardImg}
                          component="img"
                          height="140"
                          image={contestImg}
                          alt="green iguana"
                        />
                        {/* <IconButton
                          color="primary"
                          aria-label="add"
                          sx={delBtn}
                        >
                          <CancelIcon
                            onClick={() => alert("contest deleted succesfully")}
                          />
                        </IconButton> */}
                        <CardContent sx={cardBody}>
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
                      <Fab color="primary" aria-label="add" sx={addButton}>
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
            <Grid>
              <ExpandCircleDownRoundedIcon
                sx={backIcon}
                fontSize="large"
                onClick={() => setAvailQ(true)}
              ></ExpandCircleDownRoundedIcon>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};

export default Dashbord;
