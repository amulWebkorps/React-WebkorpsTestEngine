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
import { getParticipatorOfContest } from "../services/contest/contestServices";
import { deletestudent } from "../services/mail/particiaptiorMail";
import MsgBar from "../auth/base/MsgBar";
import BackButton from "../UI/BackButton";
import Loader from "../candidate/base/Loader";

const BigContainer = {
  minWidth: "100%",
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
  width: "70vw",
  height: "65vh",
  boxShadow: `2px 9px 19px rgba(230, 230, 230, 0.37)`,
  // borderRadius: "17px",
  overflow: "auto",
};
const MainContainers = {
  justifyContent: "space-between",
  background: "#F9FAFC",
  width: "70vw",
  boxShadow: `2px 9px 19px rgba(230, 230, 230, 0.37)`,

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
  cursor: "pointer",
  marginRight: "30px",
  fontSize: "20px",
  color: "#0057FF",
  textDecoration: "underline",
};
const dataText={
  display:"flex",
  justifyContent:"center",
  fontSize:"20px"
}

const delBtn = {
  marginTop: "0px !important",
  width: "30px !important",
  fontSize: "smaller",

  backgroundColor: "#E5E5E5",
  color: "black",
  borderRadius: "50%",
};


const AnswerSheet = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchString, setSearchString] = useState("");
  const [participator, setParticipator] = useState([]);
  const [isLoading, setIsLoading]=useState(false);
  const [contestId, setContestId] = useState(
    location?.state?.result?.data?.contest?.contestId
  );
  const [filteredResults, setFilteredResults] = useState([]);
  const [delMsg, setDelMsg] = useState({
    msg: "",
    color: "",
    state: false,
  });

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const participators = await getParticipatorOfContest(contestId);
        if(participator){
          setIsLoading(false);
        }
        setParticipator(participators?.data);
        setFilteredResults(participators?.data);
      } catch (error) {
        setIsLoading(false);
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
      <BackButton />
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
          {isLoading?<Loader mt={5}/>:
          participator?.length <= 0 || filteredResults?.length <= 0 ? (
             <Typography sx={dataText}>No data</Typography>
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
                        <Typography
                          sx={ViewDetail}
                          onClick={() =>
                            navigate("/viewparticipator", {
                              state: val?.id,
                            })
                          }
                        >
                          View Details
                        </Typography>
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
                      <Button
                        sx={ViewDetail}
                        onClick={() =>
                          navigate("/viewparticipator", {
                            state: val?.id,
                          })
                        }
                      >
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
            )
          } 
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default AnswerSheet;
