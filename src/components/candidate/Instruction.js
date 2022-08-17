import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import "../../App.css";
import { CANDIDATE_LANGUAGE_URL } from "../Services/Candidate";


import Header from "../UI/Header";

const background1 = {
  height: "100%",
  background: ` linear-gradient(
      180deg,
      rgba(24, 135, 201, 0) 0%,
      rgba(24, 135, 201, 0.224167) 40.42%,
      rgba(24, 135, 201, 0.4) 100%
    )`,
};

const selectTechnology = {
  fontWeight: "600",
  fontSize: "30px",
  lineHeight: "35px",
  color: "#000000",
};

const whiteContainer = {
  marginTop: "50px",
  height: "1000px",
  background: "#f9fafc",
  boxShadow: " 2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "18px",
};

const levelText = {
  fontFamily: "Raleway",
  fontSize: "45px",
  fontWeight: "600",
  lineHeight: "40px",
  letterSpacing: "0em",
  textAlign: "left",
};

const levelSubHeading = {
  width: "100%",
  height: "89px",
  background: "#F9FAFC",
  borderRadius: "17px 17px 0px 0px",
};

const containerUpper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const divSelect = {
  height: "76px",
  marginLeft: "30px",
};

const divText = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "30px",
  lineHeight: "35px",
  color: "#000000",
};

const instructionSubHead = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "33px",
  lineHeight: "39px",
  color: "#000000",
};
const startContest = {
  width: "295px",
  height: "69px",
  bordeRadius: "15.0909px",
  fontweight: "700",
  fontSize: "28px",
  lineHeight: "33px",
  color: "#FFFFFF",
  margin: "20px",
};

const cancelBtn = {
  width: "200px",
  height: "69px",
  fontWeight: "700",
  fontSize: "28px",
  lineHeight: "33px",
  color: "#0057FF",
  margin: "20px",
};




const array1 = [
  "Lörem ipsum tredidade vulkanresa megar sedil",
  "Lörem ipsum tredidade vulkanresa megar sedil",
  "Lörem ipsum tredidade vulkanresa megar sedil",
  "Lörem ipsum tredidade vulkanresa megar sedil",
  "Lörem ipsum tredidade vulkanresa megar sedil",
];

const Instruction = () => {
    const axios = require('axios').default;

    const [language1, setLanguage1 ] = useState();
  
    useEffect(() => {
    axios.get(CANDIDATE_LANGUAGE_URL)
    .then(function (response) {
      // handle success
     setLanguage1(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
   
  },[]);
  // const handleClick1=(index)=>{
    
  //   if (index===0){
  //     console.log("c")

  //   }
  //   else if (index===1){
   
  //     console.log("c++")

  //   }
  //   else if (index===2){
     
  //   }
    
    
  // }
  console.log("data",language1)

  return (
    <div style={background1}>
      <Header />

      <Container sx={whiteContainer} fixed>
        <Grid sx={containerUpper}>
          <Grid item sx={levelSubHeading}>
            <Typography sx={levelText} mt={2}>
              Instruction
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item mb={5}>
            <Typography sx={instructionSubHead}>
              Please follow the instructions while giving the test.
            </Typography>
          </Grid>
          <Grid item>
            {array1.map((val, index) => {
              return (
                <>
                  <Grid container sx={divSelect}>
                    <Grid item>
                      <Typography sx={divText}>
                        {`${index}.`}
                        {val}
                      </Typography>
                    </Grid>
                  </Grid>
                </>
              );
            })}
          </Grid>
          <Grid container>
            <Typography sx={selectTechnology}>Select Technology:</Typography>
            <select className="option1"  >
            { language1 === undefined ? (
            <div></div>
          ) : (
            language1.map((val1,index) => {
            return (
           <div >
              
              <option value={val1.id}>{val1.language}</option>
              
           </div>
           
            );
          }))
          }
           </select>

       {/* <select onChange={handleClick1} name="fruits" id="fruit-select">
        {language1.map((option, index) => (
          <option key={index} value={option.id}>
            
          </option>
        ))}
      </select> */}
            {/* <select className="option1">
              <option value="1">C</option>
              <option value="2">C++</option>
              <option value="3">Java</option>
              <option value="4">Python</option>
            </select> */}
          </Grid>
          <Grid container>
            <Button variant="contained" sx={startContest}>
              Start Contest
            </Button>
            <Button variant="outlined" sx={cancelBtn}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Instruction;
