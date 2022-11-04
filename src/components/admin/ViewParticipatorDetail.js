import React, { useEffect, useState } from "react";
import { Button,Box,Typography,Grid } from "@mui/material";
import { Container } from "@mui/system";
import { getparticipatordetail } from "../services/contest/contestServices";
import { useLocation } from "react-router-dom";
import Header from "../UI/Header";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import BackButton from "../UI/BackButton";

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

const testCaseData = {
  display: "flex",
  flexDirection: "row",
  height: "180px",
  width: "100%",
  overflowY:"auto"
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
  lineHeight: "51px",
  color: "#000000",
  width:'100%',

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

const textTestCases = {
  padding: "10px",
  background: "#FFFFFF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  margin: "10px",
  width: "90%",
  marginBottom:"5px",
  marginTop:"10px",
  display: "flex",
  justifyContent: "space-between",
};

const ViewParticipatorDetail = () => {
  const [count, setCount] = useState(0);
  const [testcases, setTestcase] = useState();
  const location = useLocation();
  const [participatorDetails, setParticipatorDetails] = useState();
  const [studentId, setStudentId] = useState(location?.state);
 
  const nextQuestion = () => {
    setCount(function (prevCount) {
      if (prevCount <= participatorDetails?.questionSubmitedByStudent?.length) {
        return (prevCount += 1);
      } else {
        return (prevCount =
          participatorDetails?.questionSubmitedByStudent?.length);
      }
    });
  };

  const prevQuestion = () => {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  };

  const getparticipatordetails = async () => {
    try {
      const res = await getparticipatordetail(studentId);
      setParticipatorDetails(res?.data);
      setTestcase(res?.data?.studentDetail?.testCaseRecord);
    } catch (error) {
      console.log("--", error);
    }
  };

  useEffect(() => {
    getparticipatordetails();
  }, []);
  return (
    <div>
      <Header setShow={true} />
      <BackButton/>
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
                          Question no. {count + 1}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={12}>
                      <Box>
                        <label style={inputLabel}>Problem statement</label>
                        <Box style={inputField} p={2}>
                          <p>
                            {
                              participatorDetails?.questionSubmitedByStudent[
                                count
                              ]?.question
                            }
                          </p>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item sm={12}>
                      <Box>
                        <label style={inputLabel}>Constraints</label>
                        <Box style={inputField} p={2}>
                          <Typography>
                            {
                              participatorDetails?.questionSubmitedByStudent[
                                count
                              ]?.sampleTestCase[0]?.constraints
                            }
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid container sm={12}>
                      <Grid item sm={6} px={2}>
                        <Box>
                          <label style={inputLabel}>Sample Input</label>
                          <Box style={inputField} p={2}>
                            <Typography>
                              {
                                participatorDetails
                                  ?.questionSubmitedByStudent?.[count]
                                  ?.sampleTestCase[0]?.input
                              }
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid sm={6} px={2}>
                        <Box>
                          <label style={inputLabel}>Sample Output</label>
                          <Box style={inputField} p={2}>
                            <Typography>
                              {
                                participatorDetails
                                  ?.questionSubmitedByStudent?.[count]
                                  ?.sampleTestCase[0]?.output
                              }
                            </Typography>
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
                  onClick={() => prevQuestion()}
                  disabled={count === 0}
                >
                  Prev
                </Button>
                <Button
                  variant="contained"
                  sx={buttonTest}
                  onClick={() => nextQuestion()}
                  disabled={
                    participatorDetails?.questionSubmitedByStudent?.length -
                      1 ===
                    count
                  }
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
                    <h3>Name {participatorDetails?.studentDetail?.name} </h3>
                  </label>
                </Grid>
                <Grid item sm={6} sx={{ display: "flex" }}>
                  <label>
                    <h3>Email {participatorDetails?.studentDetail?.email} </h3>
                  </label>
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
                  mode="java"
                  theme="monokai"
                  name="code"
                  editorProps={{ $blockScrolling: true }}
                  height="60vh"
                  width="47vw"
                  placeholder=""
                  value={
                    participatorDetails?.studentDetail?.testCaseRecord[count]
                      ?.fileName
                  }
                  fontSize="20px"
                  readOnly="true"
                />
              </Box>
              <Grid>
                <Grid containner sx={testCase} m={3}>
                  <Grid item sm={12} sx={testCaseResult}>
                    <Typography m={3} mt={2} sx={testCaseText1}>
                      Test Case
                    </Typography>
                  </Grid>
                  <Grid sx={testCaseData}>
                    <Box m={3} mt={0} sx={testCaseText2}>
                      {testcases?.[count]?.["testCasesSuccess"]?.map(
                        (val, index) => {
                          return (
                            <Box key={index} sx={textTestCases}>
                              <Typography variant="span">TestCase {index + 1}</Typography>
                              <Typography variant="h4">
                                {val ? (
                                  <DoneIcon
                                    sx={{ color: "green", fontSize: 40 }}
                                  />
                                ) : (
                                  <ClearIcon
                                    sx={{ color: "red", fontSize: 40 }}
                                  />
                                )}
                              </Typography>
                            </Box>
                          );
                        }
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ViewParticipatorDetail;
