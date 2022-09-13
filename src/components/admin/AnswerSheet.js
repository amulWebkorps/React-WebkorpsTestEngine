import { Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../UI/Header";
import { useSelect } from "@mui/base";
import { getParticipatorOfContest } from "../services/contest/contestServices";
import { deletestudent } from "../services/mail/particiaptiorMail";
import { CollectionsBookmarkRounded } from "@mui/icons-material";
import MsgBar from "../auth/base/MsgBar";

const BigContainer = {
  background: `linear-gradient(180deg, rgba(24, 135, 201, 0) 0%, rgba(24, 135, 201, 0.224167) 40.42%, rgba(24, 135, 201, 0.4) 100%)`,
  height: "88vh",
  minWidth: "100vw",
  position: "relative",
  opacity: 0.8,
};

const MainContainer = {
  background: "#F9FAFC",
  width: "70vw",
  height: "65vh",
  boxShadow: `2px 9px 19px rgba(230, 230, 230, 0.37)`,
  // borderRadius: "17px",
  overflow: "auto",
};
const MainContainers = {
  justifyContent:"space-between",
  background: "#F9FAFC",
  width: "70vw",
  // height: "65vh",
  boxShadow: `2px 9px 19px rgba(230, 230, 230, 0.37)`,
  // borderRadius: "17px",
  // overflow: "auto",
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
   width:"50%",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "34px",
};

const maindata = {
  height: "70px",
  width: "63vw",
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

const Sno = {
  fontSize: "18px",
  marginRight: "5px",
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
  cursor: "pointer",
  marginRight: "30px",
  fontSize: "20px",
  color: "#0057FF",
  textDecoration: "underline",
};

const delBtn = {
  marginTop: "0px !important",
  width: "30px !important",
  fontSize: "smaller",

  backgroundColor: "#E5E5E5",
  color: "black",
  borderRadius: "50%",
};
const person = [
  "Ramesh Malhotra",
  "Ram Malhotra",
  "Raju Malhotra",
  "Rajkumari Malhotra",
  "rajesh",
  "nitesh",
  "akshay",
  "swad",
  "sohan",
  "salve",
];

const AnswerSheet = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchString, setSearchString] = useState("");
  const [participator, setParticipator] = useState([]);
  const [contestId, setContestId] = useState(location?.state);
  const [filteredResults, setFilteredResults] = useState([]);
  const [delMsg, setDelMsg] = useState({
    msg: "",
    color: "",
    state: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const participators = await getParticipatorOfContest(contestId);
        setParticipator(participators?.data);
        setFilteredResults(participators?.data);
      } catch (error) {
        console.log("--", error);
      }
    })();
    return () => {};
  }, [delMsg?.state]);

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

  const removeStudent = async (emailId) => {
    try {
      const res = await deletestudent(emailId);
      setDelMsg({
        msg: "Student deleted successfully...!",
        color: "red",
        state: true,
      });
      setTimeout(() => {
        setDelMsg({
          msg: "Student deleted successfully...!",
          color: "red",
          state: false,
        });
      }, 1200);
      console.log("resss", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      {delMsg?.state && <MsgBar errMsg={delMsg?.msg} color={delMsg?.color} />}
      <Container sx={BigContainer}>
        <Box sx={MainBox}>
          <Box sx={QuestionBox} onClick={() => navigate(-1)}>
            Questions
          </Box>
          <Box sx={AnswerBox}>Participators</Box>
        </Box>
        <Container sx={MainContainers}>
       
          <Box sx={innerHeading}>
            <Typography sx={Answerheading}>Answer Sheets</Typography>
            <Box sx={innerSearch}>
              <IconButton type="submit" sx={searchIcon}>
                <SearchIcon />
              </IconButton>
              <InputBase
                onChange={handleSearch}
                placeholder="Unique ID or Name"
                sx={searchField}
              />
            </Box>
          </Box>
         
        </Container>
        <Container sx={MainContainer}>
          <Container>
            {participator?.length <= 0 || filteredResults?.length <= 0 ? (
              <h1>No data </h1>
            ) : searchString?.length > 1 ? (
              filteredResults?.map((val, index) => {
                return (
                  <Grid sx={maindata}>
                    <Box sx={innerdata}>
                      <Typography sx={UniqueId}> {index + 1}</Typography>
                      <Typography sx={UserName}>{val?.email}</Typography>
                    </Box>
                    <Box sx={innerdata}>
                      <Button>
                        {" "}
                        <Typography sx={ViewDetail}
                         onClick={()=>navigate("/viewparticipator",{
                            state: val?.id,
                          })}
                        >View Details</Typography>
                      </Button>

                      <IconButton
                        aria-label="add"
                        sx={delBtn}
                        onClick={(e) => removeStudent(val?.email)}
                      >
                        <CloseIcon fontSize="x-small" />
                      </IconButton>
                    </Box>
                  </Grid>
                );
              })
            ) : (
              participator?.map((val, index) => {
                return (
                  <Grid sx={maindata}>
                    <Box sx={innerdata}>
                      <Typography sx={UniqueId}>{index + 1}</Typography>
                      <Typography sx={UserName}>{val?.email}</Typography>
                    </Box>
                    <Box sx={innerdata}>
                    <Button  sx={ViewDetail} onClick={()=>navigate("/viewparticipator",{
                            state: val?.id,
                          })}>
                        {" "}
                        <Typography>View Details</Typography>
                      </Button>

                      <IconButton
                        aria-label="add"
                        sx={delBtn}
                        onClick={(e) => removeStudent(val?.email)}
                      >
                        <CloseIcon fontSize="x-small" />
                      </IconButton>
                    </Box>
                  </Grid>
                );
              })
            )}
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default AnswerSheet;