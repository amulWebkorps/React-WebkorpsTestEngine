import React from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";


const div1 = {
  height: "70vh",
  marginTop: "30px",
  background: " #F9FAFC",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "17px",
};

const blue1 = {
  width: "10px",
  height: "70vh",
  marginLeft: "-24px",
  background: "#0057FF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "18px 0px 0px 18px",
};


const rightDiv = {
  height: "68.81px",
  background: "white",
  borderRadius: "17px 17px 0px 0px",
  marginTop: "20px",
};

const editor = {
  height: "60vh",
  background: "black",
};


const testCase = {
  height: "30vh",
  background: "#F9FAFC",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "17px",
};

const testCaseText = {
  height: "69.23px",
  background: "#F9FAFC",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  bordeRadius: "17px 17px 0px 0px",
};

const testCaseText1 = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "30px",
  lineHeight: "35px",
  color: "#000000",
};
   const testCaseText2 = {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "25px",
    lineHeight: "35px",
    color: "#000000",
  };
  

const inputLabel = {
  fontFamily: "Raleway",
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "21px",
  letterSpacing: "0em",
  textAlign: "left",
  margin: "10px",

};
 const testCaseResult={  
    height: "48px",
    background: "#F9FAFC",
    boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
    borderRadius: "7px 17px 0px 0px"

}

const inputField = {
  marginTop: "10px",
  height: "14vh",
  background: "#FFFFFF",
  overflowY: "scroll",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  marginBottom:"10px"
};

const CodeCompilerText1 = {
  fontSize: "30px",
  fontWeight: "600",
  lineHeight: "35px",
  letterSpacing: "0em",
  textAlign: "left",
};

const flexDrop = {
  display: "flex",
  flexDirection: "row",
  textAlign: "left",
};



const buttonTest = {
  width: "100px",
  height: "40px",
  background: "#0057ff",
  borderRadius: "8px",
  color: "white",
  fontweight: "bold",
  margin: "10px",
  border: "1px solid #0057ff",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "19px",
};

const Compiler = () => {
  return (
    <>
      <div className="background1">
        <Grid container>
          <Grid item sm={6}>
            <Box mx={3}>
              <Container sx={div1}>
                <Grid container>
                  <Grid item sm={0.5} sx={blue1}>
                    <box></box>
                  </Grid>
                  <Grid item sm={11.5}>
                    <Grid item sm={12}>
                      <Box sx={testCaseText}>
                        <Typography sx={testCaseText1} mx={2}>
                          Test Case 1
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={12}>
                      <Box>
                        <label style={inputLabel}>Problem statement</label>
                        <Box style={inputField}>
                          <p></p>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item sm={12}>
                      <Box>
                        <label style={inputLabel}>Constraints</label>
                        <Box style={inputField}>
                          <p></p>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid container sm={12}>
                      <Grid item sm={6} px={2}>
                        <Box>
                          <label style={inputLabel}>Sample Input</label>
                          <Box style={inputField}>
                            <p></p>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid sm={6} px={2}>
                        <Box>
                          <label style={inputLabel}>Sample Output</label>
                          <Box style={inputField}>
                            <p></p>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <button style={buttonTest}>Prev</button>
                <button style={buttonTest}>Next</button>
              </Grid>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box mx={3}>
              <Grid container>
                <Grid item sm={6}>
                  <label>Name:-</label>
                  <box>   Raj kushwah</box>
                </Grid>
                <Grid item sm={6}>
                  <label>Email:-</label>
                  <box> 1233@gmail.com</box>
                </Grid>
              </Grid>
              <Container sx={rightDiv}>
                <Grid container>
                  <Grid item sm={6}>
                    <Typography mt={1.5}>
                        <div  style={CodeCompilerText1}>Code Compiler</div>
                      
                    </Typography>
                  </Grid>
                  <Grid item sm={6} sx={flexDrop}>
                    <Typography mt={2} mx={5}>
                      Select Technology:
                    </Typography>
                    <select className="option1">
                      <option value="1">C</option>
                      <option value="2">C++</option>
                      <option value="3">Java</option>
                      <option value="4">Python</option>
                    </select>
                  </Grid>
                </Grid>
              </Container>
              <Box sx={editor}></Box>
              <Grid container sx={{ justifyContent: "end" }}>
                <button style={buttonTest}>Run</button>
                <button style={buttonTest}>Submit</button>
              </Grid>
            </Box>
            <Grid>
              <Grid containner sx={testCase} m={3}>
                <Grid item sm={12} sx={testCaseResult}>
                    <Typography  m={3} mt={2}sx={testCaseText1}>
                        Test Case
                    </Typography>
                   

                </Grid>
                <Grid>
                <Typography  m={3} mt={2}sx={testCaseText2}>
                        fail
                    </Typography>

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Compiler;
