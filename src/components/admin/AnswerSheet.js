import { Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { logo } from "../assests/images";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { getparticipatordetail } from "../services/adminServices";
import {viewParticipatorOfContest} from "../services/adminServices";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


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
  boxShadow: `2px 9px 19px rgba(230, 230, 230, 0.37)`,
  borderRadius: "17px",
  overflow: "auto",
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
  cursor:"pointer",
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
  cursor:"pointer",
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
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "30px",
  marginRight: "30px",
  paddingTop: "20px",
};

const innerSearch = {
  display: "flex",
  height: "40px",
  width: "212px",
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
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "16px",
  color: "#000000",
};

const Answerheading = {
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
};

const ViewDetail = {
  fontSize: "20px",
  color: "#0057FF",
  textDecoration: "underline",
  cursor:"pointer",
  padding:"40px"



};
const deleteIcon = {
  background: "#E5E5E5",
  borderRadius: "50%",
  height: "30px",
  width: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginLeft: "20px",
  fontSize: "18px",
};


const linkQuestion={
  textDecoration:"none",
  color: "black",
}

const array = [1,];
const AnswerSheet = () => {
   const[getParticipatorDetails , setGetParticipatorDetails]=useState()
   const[getParticipatorList,setGetParticipatorList]=useState()
   const navigate=useNavigate();
   const location = useLocation();
   const handleViewParticipatorList= async () => {
    try {
      const result = await viewParticipatorOfContest(location?.state).then();
       setGetParticipatorList(result)
      }
      catch {
        console.log("error")
      }
  }

  useEffect(()=>{
    handleViewParticipatorList()
  },[])

  console.log(location.state,"locationsstate")


  const HandleParticipatorDetail = async () => {
    try {
      const result = await getparticipatordetail(getParticipatorList.id).then();
      setGetParticipatorDetails(result.data)
    if (result){

      navigate('/viewparticipator', { state: {getParticipatorDetails} })

    }
    else{
      navigate('/viewparticipator')
      
    } 
      
      }
     
      catch {

      }
    
  }
  console.log(getParticipatorDetails,"viewdetails")


  
console.log(location,"locatioview")
 
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
          <Box sx={QuestionBox} ><Link  style={linkQuestion} to="/addQuestion">Questions</Link></Box>
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
          <Container>
            {array?.map((val,index) => {
              return (
                <Grid sx={maindata}>
                  <Box sx={innerdata}>
                    <Typography sx={Sno}>1</Typography>
                    <Typography sx={UniqueId}> {val?.id}</Typography>
                    <Typography sx={UserName}>{val?.email}</Typography>
                  </Box>
                  <Box sx={innerdata}>
                    <Typography style={ViewDetail}  onClick={()=>HandleParticipatorDetail()}>View Details</Typography>
                    <Typography sx={deleteIcon}>x</Typography>
                  </Box>
                </Grid>
              );
            })}
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default AnswerSheet;
