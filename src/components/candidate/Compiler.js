import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Container, width } from "@mui/system";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Header from "../UI/Header";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
//import ReactRouterPrompt from "react-router-prompt";
import TimerIcon from "@mui/icons-material/Timer";
import "ace-builds/src-noconflict/ext-language_tools";
import { Navigate, useLocation } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

import { runAndCompilerCode } from "../services/candidate";
import { useNavigate } from "react-router-dom";
import MsgBar from "../auth/base/MsgBar";
import Loader from "./base/Loader";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const div1 = {
  height: "445px",
  marginTop: "30px",
  background: " #F9FAFC",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "17px",
};

const blue1 = {
  width: "10px",
  height: "445px",
  marginLeft: "-24px",
  background: "#0057FF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "18px 0px 0px 18px",
};

const rightDiv = {
  width: "45.7vw",
  height: "50.81px",
  background: "white",
  borderRadius: "17px 17px 0px 0px",
  marginTop: "20px",
};

const testCase = {
  // height: "30vh",
  background: "#F9FAFC",
  minHeight: "250px",
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
  overflowY: "auto",
  width: "100%",
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
  minHeight: "80px",
  background: "#FFFFFF",
  overflowY: "auto",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  marginBottom: "10px",
};

const CodeCompilerText1 = {
  fontSize: "25px",
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

const testCaseData1 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "end",
  overflowY: "auto",
};
const testCaseData = {
  display: "flex",
  flexDirection: "row",
  height: "200px",
  width: "100%",
};
const inputName = {
  fontWeight: "600",
  fontweight: "bold",
  // marginLeft:"-10px"
};

const timerText = {
  fontWeight: "500",
  fontweight: "bold",
};

const textTestCases = {
  padding: "10px",
  background: "#FFFFFF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  margin: "10px",
  width: "90%",
  display: "flex",
  justifyContent: "space-between",
};

const Compiler = () => {
  const location = useLocation();
  const [error, setError] = useState(null);
  const [codeValue, setCodeValue] = useState();
  const [profile, setProfile] = useState(location?.state);
  const [count, setCount] = useState(0);
  const [runCode, setRunCode] = useState();
  const [show, setShow] = useState(false);
  const [showTestCase, setShowTestCase] = useState(false);
  const [counter, setCounter] = useState(0);
  const [showCompilationError, setshowCompilationError] = useState();
  const [showError, setShowError] = useState(false);
  const Ref = useRef(null);
  const ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [duration, setDuration] = useState(
    location?.state?.participatorsContestDetails?.contestTime?.contestTime
  );
  const timerGet = 1000;
  // duration?.match(/\d/g)?.join("");
  const finalGet = timerGet * 60000;
  const changeseconds = timerGet * 60;
  const timeOut = true;

  useEffect(() => {
    if (runCode?.successMessage === "Code Submitted Successfully") {
      setShowError(true);
    }
  }, [runCode]);

  useEffect(() => {
    if (runCode?.complilationMessage == null) {
    } else {
      setshowCompilationError(true);
    }
  }, [runCode]);

  useEffect(() => {
    let timeout;
    if (showCompilationError) {
      timeout = setTimeout(() => setshowCompilationError(false), 5000);
    }
    return () => clearTimeout(timeout);
  }, [showCompilationError]);

  useEffect(() => {
    let timeout;
    if (showError) {
      timeout = setTimeout(() => setShowError(false), 3000);
    }
    return () => clearTimeout(timeout);
  }, [showError]);

  const runCodes = async (flag, state) => {
    console.log("");
    setLoading(true);

    try {
      // timeOut = false;
      const resultData = await runAndCompilerCode({
        language: profile.participatorsContestDetails?.languageCode?.language,
        questionId:
          profile.participatorsContestDetails?.QuestionList[count]?.questionId,
        contestId: profile.participatorsContestDetails?.contestId,
        studentId: profile.participatorsContestDetails?.studentId,
        flag: flag,
        timeOut: false,
        code: `${codeValue}`,
      });
      // console.log("codeValue", codeValue);
      if (resultData) {
        setError(resultData?.data?.complilationMessage);
        setLoading(false);
        if (
          profile.participatorsContestDetails?.QuestionList?.length <= 1 &&
          flag === "1"
        ) {
          navigate("/thanku");
        }
      }
      setRunCode(resultData?.data);
      setShowTestCase(true);
    } catch (error) {
      setshowCompilationError(true);
      setError(null);
      setTimeout(() => {
        setError(null);
        setshowCompilationError(false);
        setLoading(false);
      }, 1200);
      console.log(error);
    }
  };
  useEffect(() => {
    if (performance.navigation.type === 2) {
      navigate("/thanku");
    }
  }, []);
  useEffect(() => {
    {
      try {
        if (timer === "00:00:01") {
          const resultData = runAndCompilerCode({
            language:
              profile.participatorsContestDetails?.languageCode?.language,
            questionId:
              profile.participatorsContestDetails?.QuestionList[count]
                ?.questionId,
            contestId: profile.participatorsContestDetails?.contestId,
            studentId: profile.participatorsContestDetails?.studentId,
            flag: "1",
            timeOut: true,
            code: `${codeValue}`,
          }).then();

          setRunCode(resultData.data);
          setShowTestCase(true);
        }
        if (timer === "00:00:01") {
          navigate("/thanku");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [timer]);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onChange = (codeData) => {
    setCodeValue(codeData);
    setShowTestCase(false);
  };

  useEffect(() => {
    if (runCode?.complilationMessage !== null) {
    } else if (
      count === profile.participatorsContestDetails?.QuestionList?.length
    ) {
    } else {
    }
  }, [count]);
  const handleButton = () => {
    setCounter(counter + 1);
    setCodeValue(profile?.participatorsContestDetails?.languageCode?.codeBase);
  };
  const nextQuestion = (e) => {
    setCount(function (prevCount) {
      if (
        prevCount <= profile.participatorsContestDetails?.QuestionList?.length
      ) {
        return (prevCount += 1);
      } else {
        return (prevCount =
          profile.participatorsContestDetails?.QuestionList?.length);
      }
    });
    setCodeValue(location?.state?.defaultCode);
    setShowTestCase(false);
  };

  const prevQuestion = (e) => {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  };

  const handleNext = () => {
    if (profile.participatorsContestDetails?.QuestionList?.length <= 1) {
      console.log("if");
    } else {
      console.log("else");
      setCount(count + 1);
    }
  };

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 100);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + changeseconds);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  useEffect(() => {
    if (
      performance.navigation.type === 1 ||
      performance.navigation.type === 2
    ) {
      // runCodes("1");
      setTimeout(() => {
        navigate("/thanku");
      }, [3000]);
      console.log("page is refreshed");
    } else {
    }
  }, []);
  // console.log("0---", profile?.participatorsContestDetails);
  return (
    <Box>
      <Header state={true} />
      {/* <ReactRouterPrompt when={true}>
        {({ isActive, onConfirm, onCancel }) =>
          isActive && (
            <div>
              <Dialog
                open={true}
                // onClose={onCancel}
                onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            onCancel();
          }
        }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Alert"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                   If you leave this test your data would be lose and your code will be automatically submitted..!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button variant="contained" color="primary" onClick={onCancel}>Close</Button>
                  <Button variant="contained"  color="warning" onClick={()=>{testSubmit()}}>
                    Leave
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          )
        }
      </ReactRouterPrompt> */}

      <Box className="background1">
        {showCompilationError && (
          <MsgBar
            errMsg={error !== null ? error : "Please Contact to HR..!"}
            color={"red"}
          />
        )}
        {showError && (
          <MsgBar errMsg={"successfully submitted code"} color={"green"} />
        )}
        <Grid container>
          <Grid item sm={6}>
            <Box sx={testCaseData1} mx={2}>
              <TimerIcon
                fontSize="15px"
                sx={{ backgroundColor: "white", marginTop: "3px" }}
              />
              &nbsp;
              <Typography sx={timerText}> {timer} Remaining</Typography>
            </Box>

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
                          Question {count + 1}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item sm={12}>
                      <Box>
                        <Typography style={inputLabel}>
                          Problem statement
                        </Typography>
                        <Box style={inputField} p={2}>
                          <Typography>
                            {
                              profile?.participatorsContestDetails
                                ?.QuestionList[count]?.question
                            }
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item sm={12}>
                      <Box>
                        <Typography style={inputLabel}>Constraints</Typography>
                        <Box style={inputField} p={2}>
                          <Typography>
                            {
                              profile?.participatorsContestDetails
                                ?.QuestionList[count]?.sampleTestCase[0]
                                ?.constraints
                            }
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid container sm={12}>
                      <Grid item sm={6} px={2}>
                        <Box>
                          <Typography style={inputLabel}>
                            Sample Input
                          </Typography>
                          <Box style={inputField} p={2}>
                            <Typography>
                              {
                                profile?.participatorsContestDetails
                                  ?.QuestionList[count]?.sampleTestCase[0]
                                  ?.input
                              }
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid sm={6} px={2}>
                        <Box>
                          <Typography style={inputLabel}>
                            Sample Output
                          </Typography>
                          <Box style={inputField} p={2}>
                            <Typography>
                              {
                                profile?.participatorsContestDetails
                                  ?.QuestionList[count]?.sampleTestCase[0]
                                  ?.output
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
                    profile?.participatorsContestDetails?.QuestionList?.length -
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
                <Grid item sm={6} sx={{ display: "flex", marginLeft: "-10px" }}>
                  <Box>
                    <Typography sx={inputName}>Name: </Typography>
                  </Box>
                  <>
                    <Typography sx={inputName}>
                      {profile?.participatorData?.name}
                    </Typography>
                  </>
                </Grid>
                <Grid item sm={6} sx={{ display: "flex" }}>
                  <Box>
                    <Typography sx={inputName}>Email: </Typography>
                  </Box>
                  <Box>
                    <Typography sx={inputName}>
                      {profile?.participatorData?.email}
                    </Typography>
                  </Box>
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
                  mode={
                    location?.state?.language === "Java"
                      ? "java"
                      : location?.state?.language === "C" || "C++"
                      ? "c_cpp"
                      : "python"
                  }
                  theme="monokai"
                  name="code"
                  editorProps={{ $blockScrolling: true }}
                  height="380px"
                  width="45.7vw"
                  value={codeValue}
                  onChange={onChange}
                  defaultValue={
                    profile?.participatorsContestDetails?.languageCode?.codeBase
                  }
                  fontSize="20px"
                />
              </Box>
              <Grid container sx={{ justifyContent: "end" }}>
                <Button
                  variant="contained"
                  sx={buttonTest}
                  onClick={() => {
                    runCodes("0");
                    handleScroll();
                  }}
                >
                  Run
                </Button>
                <Button
                  variant="contained"
                  sx={buttonTest}
                  onClick={() => {
                    runCodes("1");
                    handleButton();
                    handleNext();
                  }}
                >
                  {show ? "final submit" : "submit"}
                </Button>
              </Grid>
            </Box>
            <Grid>
              <Grid containner sx={testCase} m={3} ref={ref}>
                <Grid item sm={12} sx={testCaseResult}>
                  <Typography m={3} mt={2} sx={testCaseText1}>
                    Test Case
                  </Typography>
                </Grid>
                {showTestCase &&
                  (isLoading ? (
                    <Loader mt={8} />
                  ) : (
                    <Grid sx={testCaseData}>
                      <Box m={3} mt={2} sx={testCaseText2}>
                        {runCode?.testCasesSuccess?.map((val, index) => {
                          return (
                            <Box key={index} sx={textTestCases}>
                              <span>TestCase {index + 1}</span>
                              <Typography variant="h5">
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
                        })}
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Compiler;
