import React, { useState } from "react";
import { Container, Grid, Fab } from "@mui/material";
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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';

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
  margin: "-16px",
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
  backgroundColor: "#F8F7F7",
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

const delBtn = {
  position: "absolute",
  top: "-2%",
  right: "-2%",
  color: "black",
};

const forwardIcon = {
  transform:' rotate(-90deg)',
  position: "absolute",
  top: `calc(50% - -78px)`,
  color: "white",
//  background:"black"
};
const backIcon = {
  transform:' rotate(90deg)',
  position: "absolute",
  top: `calc(50% - -78px)`,
  justifyContent: "end",
  color: "white",
};

const array = [1, 1, 1, 1, 1];

const Dashbord = () => {
  const [showAvailq, setAvailQ] = useState(true);
  return (
    <div style={app}>
      <Header />
      {showAvailq ? (
        <>
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
              {array.map((val) => {
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
                        <IconButton
                          color="primary"
                          aria-label="add"
                          sx={delBtn}
                        >
                          <CancelIcon />
                        </IconButton>
                        <CardContent sx={cardBody}>
                          <h4>Freshers</h4>
                          <p>00 months to 06 months</p>
                          <p>Last Changes 02/09/2012</p>
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
                      <h4>create contest</h4>
                      <p>add Description</p>
                      <p>Last Changes 02/09/2012</p>
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
            <Typography sx={text}>available Quest</Typography>
          </Container>
          <Container sx={containerStyle}>
            <Grid container ml={4} mt={2}>
              <Grid container sx={{ justifyContent: "end" }}>
                <ExpandCircleDownRoundedIcon
                  fontSize="large"
                  sx={backIcon}
                  onClick={() => setAvailQ(true)}
                ></ExpandCircleDownRoundedIcon>
              </Grid>
              {array.map((val) => {
                return (
                  <Grid item md={3} mt={5}>
                    <Card sx={card}>
                      <CardActionArea>
                        <CardMedia
                          style={cardImg}
                          component="img"
                          height="140"
                          image="https://cdna.artstation.com/p/assets/images/images/010/256/440/large/marat-sagadinov-raptile.jpg?1523445766&dl=1"
                          alt="green iguana"
                        />
                        <IconButton
                          color="primary"
                          aria-label="add"
                          sx={delBtn}
                        >
                          <CancelIcon />
                        </IconButton>
                        <CardContent sx={cardBody}>
                          <h4>Freshers</h4>
                          <p>00 months to 06 months</p>
                          <p>Last Changes 02/09/2012</p>
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
                      <h4>create contest</h4>
                      <p>add Description</p>
                      <p>Last Changes 02/09/2012</p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};

export default Dashbord;
