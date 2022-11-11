import { Button, Checkbox, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../UI/Header";
import BackButton from "../UI/BackButton";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import McqModel from "../UI/McqModel";
import { useEffect } from "react";
import { getParticipatorOfContest } from "../services/contest/mcqService";
import Loader from "../candidate/base/Loader";

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
const mcqBtn = {
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

const PartBtn = {
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
  background: "#F9FAFC",
  borderRadius: " 17px 17px 0px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "25px",
 paddingTop: "10px",
};

const innerSearch = {
  display: "flex",
  height: "40px",
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
  marginTop: "10px",
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

const dataText = {
  display: "flex",
  justifyContent: "center",
  fontSize: "20px",
};
function McqParticipator() {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [participator, setParticipator] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [loader, setloader] = useState(true);
  const [contestId, setContestId] = useState(
    location?.state?.result?.data?.contest?.contestId
  );

  const handleSentMail = () => {
    setSent(true);
    setOpen(true);
  };

  const handleSendMail = () => {
    setSent(false);
    setOpen(true);
  };

  const loadContestDetails = async () => {
    try {
   
      const participators = await getParticipatorOfContest(contestId);
      setParticipator(participators?.data);
      setFilteredResults(participators?.data);
    } catch (error) {
      console.log(error);
    }
    setloader(false);
  };

  useEffect(() => {
    loadContestDetails();
  }, []);

  const handleSearch = (e) => {
    setSearchString(e.target.value);
    if (searchString !== "") {
      const filteredData = participator?.filter((item) => {
        return Object?.values(item)
          ?.join("")
          ?.toLowerCase()
          ?.includes(searchString?.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(participator);
    }
  };

  return (
    <>
      <McqModel open={open} setOpen={setOpen} sent={sent} setSent={setSent} />

      <div style={background1}>
        <Header />
        <BackButton />
        <Container>
          <Box sx={MainBox}>
            <Box sx={mcqBtn} onClick={() => navigate(-1)}>
              MCQ
            </Box>
            <Box sx={PartBtn}>Participators</Box>
          </Box>
          <Container sx={MainContainer}>
            <Container>
              <Box sx={innerHeading}>
                <Typography sx={Answerheading}>Answer Sheets</Typography>
                <Box sx={innerSearch}>
                  <IconButton type="submit" sx={searchIcon}>
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    placeholder="Unique ID or Name"
                    sx={searchField}
                    onChange={handleSearch}
                  />
                </Box>
              </Box>

              {participator?.length <= 0 || filteredResults?.length <= 0 ? (
                <Typography sx={dataText}>No data</Typography>
              ) : searchString?.length > 1 ? (
                filteredResults?.map((val, index) => {
                  return (
                    <Grid sx={maindata} key={index}>
                      <Box sx={innerdata}>
                        <Typography sx={UniqueId}> {index + 1}</Typography>
                        <Typography sx={UserName}>{val.email}</Typography>
                      </Box>
                      <Box sx={innerdata}>
                        <Button>
                          <Typography sx={ViewDetail}>
                            {val.percentage}%
                          </Typography>
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
                })
              ) : (
                participator?.map((val, index) => {
                  return (
                    <Grid sx={maindata} key={index}>
                      <Box sx={innerdata}>
                        <Typography sx={UniqueId}> {index + 1}</Typography>
                        <Typography sx={UserName}>{val.email}</Typography>
                      </Box>
                      <Box sx={innerdata}>
                        <Button>
                          <Typography sx={ViewDetail}>
                            {val.percentage}%
                          </Typography>
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
                })
              )}
            </Container>
          </Container>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "60vw",
            }}
          >
            <Grid item>
              <Button
                variant="contained"
                sx={sentMails}
                onClick={handleSentMail}
              >
                Sent Emails
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={sendMails}
                onClick={handleSendMail}
              >
                Send Emails
              </Button>
            </Grid>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default McqParticipator;
