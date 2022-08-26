import React, { useState, } from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Header from "../UI/Header";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { getparticipatordetail } from "../services/adminServices";


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
const testCaseResult = {
  height: "48px",
  background: "#F9FAFC",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "7px 17px 0px 0px",
};

const inputField = {
  marginTop: "10px",
  height: "14vh",
  background: "#FFFFFF",
  overflowY: "scroll",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  marginBottom: "10px",
};

const CodeCompilerText1 = {
  fontSize: "30px",
  fontWeight: "600",
  lineHeight: "35px",
  letterSpacing: "0em",
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

const ViewParticipatorDetail = () => {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);
  
  function increment() {
    setCount(function (prevCount) {
      console.log(prevCount, "===========");
      if (prevCount <= 2) {
        return (prevCount += 1);
      } else {
        return (prevCount = 2);
      }
    });
  }
  console.log(count1, "rtyg");
  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }


  const HandleParticipatorDetail = async () => {
      try {
        const result = await getparticipatordetail().then();
      
        }
        catch {

        }
    }
  return (
    <div>
      <Header />
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
                          Test Case
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={12}>
                      <Box>
                        <label style={inputLabel}>Problem statement</label>
                        <Box style={inputField} p={2}>
                          <p></p>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item sm={12}>
                      <Box>
                        <label style={inputLabel}>Constraints</label>
                        <Box style={inputField} p={2}>
                          <p>
                            
                          </p>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid container sm={12}>
                      <Grid item sm={6} px={2}>
                        <Box>
                          <label style={inputLabel}>Sample Input</label>
                          <Box style={inputField} p={2}>
                            <p>
                             
                            </p>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid sm={6} px={2}>
                        <Box>
                          <label style={inputLabel}>Sample Output</label>
                          <Box style={inputField} p={2}>
                            <p>
                              
                            </p>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Button
                  variant="contained"
                  sx={buttonTest}
                  onClick={() => decrement()}
                >
                  Prev
                </Button>
                <Button
                  variant="contained"
                  sx={buttonTest}
                  onClick={() => increment()}
                >
                  Next
                </Button>
              </Grid>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box mx={3}>
              <Grid container>
                <Grid item sm={6} sx={{ display: "flex" }}>
                  <label>
                    <h3>Name:- </h3>
                  </label>
                  <box>
                    <h3></h3>
                  </box>
                </Grid>
                <Grid item sm={6} sx={{ display: "flex" }}>
                  <label>
                    <h3>Email:- </h3>
                  </label>
                  <box>
                    <h3></h3>
                  </box>
                </Grid>
              </Grid>
              <Container sx={rightDiv}>
                <Grid container>
                  <Grid item sm={12}>
                    <Typography mt={1.5}>
                      <div style={CodeCompilerText1}>Code Compiler</div>
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
              <Box>
                <AceEditor
                  mode=""
                  theme="monokai"
                  name="code"
                  editorProps={{ $blockScrolling: true }}
                  height="60vh"
                  width="47vw"
                  placeholder=""
                  value=""
                  onChange={onchange}
                  fontSize="20px"
                />
              </Box>
              <Grid container sx={{ justifyContent: "end" }}>
                <Button
                  variant="contained"
                  sx={buttonTest}
                  onClick={() => {
                   
                  }}
                >
                  Run
                </Button>
                <Button variant="contained" sx={buttonTest}>
                  Submit
                </Button>
              </Grid>
            </Box>
            <Grid>
              <Grid containner sx={testCase} m={3}>
                <Grid item sm={12} sx={testCaseResult}>
                  <Typography m={3} mt={2} sx={testCaseText1}>
                    Test Case
                  </Typography>
                </Grid>
                <Grid>
                  <Typography m={3} mt={2} sx={testCaseText2}>
                    fail
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ViewParticipatorDetail;
