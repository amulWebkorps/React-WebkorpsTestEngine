import React, { useState, useEffect } from "react";
import { Container, Grid, Fab, Button, Snackbar } from "@mui/material";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";
import { contestImg } from "../assests/images";
import CancelIcon from "@mui/icons-material/Cancel";
import Header from "../UI/Header";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import Modal from "../UI/Modal";
import { increment } from "../store/slicers/adminSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";


import { getAllContestList } from "../services/adminServices";

import { getContestDetail } from "../services/adminServices";
import Popup from "../UI/Popup";
import MsgBar from "../auth/base/MsgBar";


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
  maxHeight: "211px",
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
  maxHeight: "211px",
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
const levels = ["Level 1", "Level 2", "ALL"];
const contestInitialValues = {
  contestName: "",
  contestDescription: "",
  contestLevel: "",
};
const Dashbord = () => {
  const [showAvailq, setAvailQ] = useState(true);

  const location = useLocation();

  const [showAlert, setAlert] = useState(false);
  const [bar, setBar] = useState(false);
  const [delContest, setDelContest] = useState({
    name: "",
    id: "",
    contestId: "",
  });

  const [confirm, setConfirm] = useState(false);
  const [contestDetails, setContestDetails] = useState();
  const [open, setOpen] = useState(false);
  const [contestData, setContestData]=useState(null);
  const navigate = useNavigate();

  const handleContest = async (id) => {
    try {
      const result = await getContestDetail(id);
      navigate("/addQuestion",{ state: {result} });
    } catch (error) {
      console.log('0-fsfffsdfasdff',error) 
    }
    
   
  };

  const deleteContest = (id, Name, contestId) => {
    setDelContest({
      name: Name,
      id: id,
      contestId: contestId,
    });
    setConfirm(true);
    
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handlePop = () => {
    setConfirm(true);
  };

  const handleCheck = (index) => {
    if (index === 0) {
      navigate("/level1");
    } else if (index === 1) {
      navigate("/level2");
    } else if (index === 2) {
      navigate("/allavailable");
    }
  };

  const fetchContestData = async () => {
    const response = await getAllContestList();
    setContestDetails(response)
  };

  
  useEffect(() => {
    fetchContestData();
  }, []);

  console.log("---contest", contestDetails);
  
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
            setAlert={setAlert}
            fetchContestData={fetchContestData}
          />
          <Popup
            contestDetails={contestDetails}
            setContestDetails={setContestDetails}
            contest={delContest}
            opens={confirm}
            setConfirm={setConfirm}
            setOpen={setOpen}
            handleClickOpen={handlePop}
            setBar={setBar}
          />
          {bar || showAlert ? (
            <MsgBar
              errMsg={
                bar
                  ? "Contest Delete Successfully...!"
                  : "Contest Created Successfully...!"
              }
              color={bar ? "blue" : "green"}
            />
          ) : (
            <></>
          )}
          <Container sx={createContext}>
            <Typography sx={text}>Contest Created</Typography>
          </Container>
          <Container sx={containerStyle}>
            <Grid container ml={0} mt={2}>
              {contestDetails?.map?.((val, index) => {
                
                return (
                  <Grid item md={3} mt={5} key={index}>
                    <Card sx={card}>
                      <CardActionArea>
                        <CardMedia
                          onClick={() =>
                            handleContest(contestDetails?.[index]?.contestId)
                          }
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
                          onClick={() =>
                              deleteContest(
                                index,
                                contestDetails?.[index]?.contestName,
                                contestDetails?.[index]?.contestId
                              )
                            }
                        >
                          <CancelIcon
                          />
                        </IconButton>
                        <CardContent sx={cardBody}>
                          <h6 style={contestText}>
                            {contestDetails?.[index]?.contestName}&nbsp;~&nbsp;
                            {contestDetails?.[index]?.contestLevel}
                          </h6>
                          <p style={months}>
                            {contestDetails?.[index]?.contestDescription}
                          </p>
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
                  <Grid item md={3} mt={5} key={index}>
                    <Card sx={card}>
                      <CardActionArea onClick={() => handleCheck(index)}>
                        <CardMedia
                          style={cardImg}
                          component="img"
                          height="140"
                          image={contestImg}
                          alt="green iguana"
                        />

                        <CardContent sx={cardBody}>
                          <h4 style={contestText}>{levels[index]}</h4>
                          <p style={months}>00 months to 06 months</p>
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
                        onClick={() => navigate("/email" ,{ state: { data: contestDetails } })}
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
