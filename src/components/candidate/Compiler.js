import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Container, display } from "@mui/system";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Header from "../UI/Header";
import { render } from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { CANDIDATE_LANGUAGE_URL } from "../Services/Candidate";
import { useLocation } from "react-router-dom";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

function onChange(newValue) {
  console.log("change", newValue);
}

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
  const axios = require("axios").default;
  const [language2, setLanguage2] = useState();
  const [data1, setdata1] = useState();
  const [code1, setCode1] = useState("");
  const [Lan, setLan] = useState("");
  const location = useLocation()
  const [profile, setProfile]=useState(location?.state)
  useEffect(() => {
     axios
      .get(`http://192.168.1.93:8085/showAllLanguage`)
      .then(function (response) {
        // handle success
        setLanguage2(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);


  useEffect(() => {
    axios
     .post(`http://192.168.1.93:8085/startContestPage?contestId=62f1123c197f857ee1f940e0&language=${location?.state?.language}&studentId=2910e8d7-ef82-43f8-8b2b-f5e211ba98e2`)
     .then(function (response) {
       // handle success
       setdata1(response.data);
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     });
 }, []);

  console.log("datastartcontest",data1)
  console.log('--profile--',profile?.participatorData?.state?.data)


const dataLan = language2?.filter(lan2 => lan2.language ==location?.state?.language)
console.log("getdata",dataLan)


useEffect(()=>{
   dataLan === undefined ? (
    <div></div>
  ) : ( 
    setCode1(()=>{

      return dataLan[0].codeBase;
    })

  )
  
 
},[language2])

console.log("rfgh",code1)
let data = code1.toString;
  return (
    <>
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
                          Test Case 1
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={12}>
                      <Box>
                        <label style={inputLabel}>Problem statement</label>
                        <Box style={inputField} p={2}>
                          <p>                 
                            {data1?.QuestionList?.question}
                          </p>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item sm={12}>
                      <Box>
                        <label style={inputLabel}>Constraints</label>
                        <Box style={inputField} p={2}>
                          <p>
                          {data1?.QuestionList?.sampleTestCase[0]?.constraints}
                          </p>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid container sm={12}>
                      <Grid item sm={6} px={2}>
                        <Box>
                          <label style={inputLabel}>Sample Input</label>
                          <Box style={inputField} p={2}>
                            <p>{data1?.QuestionList?.sampleTestCase[0]?.input}</p>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid sm={6} px={2}>
                        <Box>
                          <label style={inputLabel}>Sample Output</label>
                          <Box style={inputField} p={2}>
                            <p>{data1?.QuestionList?.sampleTestCase[0]?.output}</p>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Button variant="contained" sx={buttonTest}>
                  Prev
                </Button>
                <Button variant="contained" sx={buttonTest}>
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
                    <h3>{profile?.participatorData?.state?.data?.name}</h3>
                  </box>
                </Grid>
                <Grid item sm={6} sx={{ display: "flex" }}>
                  <label>
                    <h3>Email:- </h3>
                  </label>
                  <box>
                    <h3>{profile?.participatorData?.state?.data?.email}</h3>
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
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
    height="60vh"
    width="47vw"
    value={code1}
    fontSize="20px"
  />
  </Box>   
    <Grid container sx={{ justifyContent: "end" }}>
                <Button variant="contained" sx={buttonTest}>
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
    </>
  );
};

export default Compiler;