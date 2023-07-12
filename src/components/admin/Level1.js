import {
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Header from "../UI/Header";
import clsx from "clsx";
import AddedQues from "./AddedQues";
import { useLocation, useNavigate } from "react-router-dom";
import {
  filterQuestion,
  saveQuestion,
} from "../services/contest/contestServices";
import MsgBar from "../auth/base/MsgBar";
import { getContestDetail } from "../services/adminServices";
import { uploadQuestions } from "../services/contest/contestServices";
import BackButton from "../UI/BackButton";
import { greenColor, redColor } from "../../alertColors";

const useStyles = makeStyles({
  container: {
    height: "100%",
    minHeight: 180,
  },
  containerTall: {
    minHeight: 250,
  },
  noBorder: {
    border: "none",
  },
});

const sideColumn = {
  background: "#0057FF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: " 18px 0px 0px 18px",
};

const questionList = {
  height: "100vh",
  background: `linear-gradient(
        180deg,
        rgba(24, 135, 201, 0) 0%,
        rgba(24, 135, 201, 0.224167) 40.42%,
        rgba(24, 135, 201, 0.4) 100%
      )`,
  overflow: "auto",
};

const topButton = {
  display: "flex",
  justifyContent: "center",
};

const buttonLevel = {
  width: "260px",
  height: "51px",
  background: "#0057ff",
  borderRadius: "18px 18px 18px 18px",
  fontWeight: "700",
  fontSize: "25px",
  lineHeight: "19px",
  textTransform: "none",
  fontFamily: "Raleway",
  fontStyle: "normal",
  paddingTop: "12px",
  paddingLeft: "25px",
  marginTop: "25px",
  color: "#FFFFFF",
};

const delBtn = {
  marginTop: "20px !important",
  width: "30px !important",
  fontSize: "smaller",

  backgroundColor: "#E5E5E5",
  color: "black",
  borderRadius: "50%",
};

const mainContainer = {
  marginTop: "20px",
  background: "white",
};

const cardBody = {
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "17px",
};

const addQues = {
  background: "#F9FAFC",
};

const input = {
  borderColor: "none",
  background: "#FFFFFF",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "18px",
  lineHeight: "21px",
};

const testCol = {
  background: "#F9FAFC",
};

const label = {
  fontFamily: "railway",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "21px",
};

const btn = {
  fontSize: "8",
  fontWeight: "600",
  color: "white",
  borderRadius: "6px",
  width: "160px",
};

const Addbtn = {
  fontSize: "8",
  fontWeight: "600",
  color: "white",
  borderRadius: "6px",
};

const testInitialFields = {
  input: "",
  output: "",
};
const sampleTestInitialFields = {
  constraints: "",
  input: "",
  output: "",
};
const problemStatementIntialVal = {
  question: "",
};
const Level1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  const [contestData, setContestData] = useState(
    location?.state?.data?.contest
  );
  const [quesId, setQuesId] = useState(null);
  const [index, setIndex] = useState(null);
  const [editRef, setEditRef] = useState(null);
  const [question, setQuestion] = useState(quesIntialField);
  const [problemStatement, setProblemStatement] = useState(
    problemStatementIntialVal
  );
  const [sampleTestCase, setSampleTestCase] = useState(sampleTestInitialFields);
  const [testCases, setTestCases] = useState(testInitialFields);
  const [testCaseList, setTestCaseList] = useState([]);
  const [contestQuestion, setContestQuestion] = useState(null);
  const [editQuestion, setEditQuestion] = useState(false);
  const [delFromContest, setDelFromContest] = useState({
    state: false,
  });
  const [availableQuestions, setAvailableQuestions] = useState();
  const [showAlert, setAlert] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [msg, setMsg] = useState({
    errMsg: "",
    color: "",
  });
  const [loader, setloader] = useState(true);
  const [error, setError] = useState(false);
  const handleConstraintChange = (e) => {
    const { name, value } = e.target;
    setSampleTestCase({
      ...sampleTestCase,
      [name]: value,
    });
  };
  const defaulValues = {
    questionId: quesId === null ? "" : quesId,
    questionStatus: "true",
    contestLevel: `Level 1`,
  };

  const quesIntialField = {
    questionId: defaulValues?.questionId,
    question: "",
    contestLevel: defaulValues?.contestLevel,
    questionStatus: defaulValues?.questionStatus,
    sampleTestCase: [],
    testcases: [],
  };

  const handleTestChange = (e) => {
    const { name, value } = e.target;

    setTestCases({
      ...testCases,
      [name]: value,
    });
  };

  const handelQuestionChange = (e) => {
    const { name, value } = e.target;
    setProblemStatement({
      ...problemStatement,
      [name]: value,
    });
  };

  const handleFocus = () => {
    setQuestion({
      ...question,
      questionId: defaulValues?.questionId,
      question: problemStatement?.question,
      contestLevel: defaulValues?.contestLevel,
      questionStatus: defaulValues?.questionStatus,
      sampleTestCase: [sampleTestCase],
      testcases: testCaseList,
    });
  };

  const addTest = () => {
    if(testCases?.input===""||testCases?.output===""){
      setShowValidation(true);
      setMsg({
        errMsg: "Input and Output can not be null..!",
        color: redColor,
      });
      setTimeout(() => {
        setShowValidation(false);
        setMsg({
          errMsg: "",
          color: "",
        });
      }, 2000);
    }else{
      setTestCaseList([...testCaseList, testCases]);
      setTestCases(testInitialFields);
    }
  };

  const addQuestion = async (e) => {
    if (
      problemStatement.question === "" ||
      sampleTestCase.constraints === "" ||
      sampleTestCase?.input === "" ||
      sampleTestCase?.output === "" ||
      testCaseList.length === 0
    ) {
      // setAlert(true);
      setShowValidation(true);
      setMsg({
        errMsg: "Please Fill Details...!",
        color: redColor,
      });
      setTimeout(() => {
        setShowValidation(false);
      }, 1200);
    } else {
      try {
        const result = await saveQuestion(question);
        setAlert(true);
        setQuesId(null);
        setQuestion(quesIntialField);
        setProblemStatement(problemStatementIntialVal);
        setTestCases(sampleTestInitialFields);
        setSampleTestCase(sampleTestInitialFields);
        setTestCaseList([]);
        setTimeout(() => {
          setAlert(false);
          setMsg({
            errMsg: "",
            color: "",
          });
        }, 1200);
        if (editQuestion) {
          setMsg({
            errMsg: "Question Edited....!",
            color: greenColor,
          });
          setEditQuestion(false);
          setQuestion(quesIntialField);
          setProblemStatement(problemStatementIntialVal);
          setTestCases(sampleTestInitialFields);
          setSampleTestCase(sampleTestInitialFields);
          setTestCaseList([]);
          return (contestQuestion[index] = question);
        } else {
          setMsg({
            errMsg: "Question Added...!",
            color: greenColor,
          });
          setContestQuestion([...contestQuestion, question]);
          setQuestion(quesIntialField);
          setProblemStatement(problemStatementIntialVal);
          setTestCases(sampleTestInitialFields);
          setSampleTestCase(sampleTestInitialFields);
          setTestCaseList([]);
        }
      } catch (error) {
        setAlert(true);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
       if(error.response.status===403){
        navigate("/error")
       }
      }
    }
  };

  const delTestCase = (id) => {
    setTestCaseList((val) => {
      return val.filter((a, index) => index !== id);
    });
  };

  const editTestcase = (e, id) => {
    const { name, value } = e.target;
    setTestCaseList((prevState) => {
      const newState = prevState.map((obj, index) => {
        if (id === index) {
          return { ...obj, [name]: value };
        }
        return obj;
      });
      return newState;
    });
  };
  const uploadQuestion = async (e) => {
    const { files } = e.target;
    if (
      files?.[0]?.type !==
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setShowValidation(true);
      setMsg({
        errMsg: "Please Select Excel File...!",
        color: redColor,
      });
      setTimeout(() => {
        setShowValidation(false);
        setMsg({
          errMsg: "",
          color: "",
        });
      }, 1500);
    } else {
      try {
        const result = await uploadQuestions(files[0], "", "Level 1");
        setAlert(true);
        // setContestQuestion([...contestQuestion, ...result]);
        setMsg({
          errMsg: "Question Uploaded...!",
          color: greenColor,
        });
        setTimeout(() => {
          setMsg({
            errMsg: "",
            color: "",
          });
          setAlert(false);
        }, 1200);
      } catch (error) {
        setAlert(false);
        setMsg({
          errMsg: "",
          color: "",
        });
        console.log("ee", error);
      }
    }
  };

  useEffect(() => {
    filtersQuestions();
  }, [showAlert]);

  const filtersQuestions = async () => {
    try {
      const res = await filterQuestion("Level 1");
      const response = res.data;
      if (res.message == "success" && res.status == "200") {
        setloader(false);
      }
      setContestQuestion(response);
    } catch (error) {
      setloader(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      console.log(error);
    }
  };

  // useEffect(()=>{
  // const result= filterQuestion("All").then((res)=>{
  //   const response=res.data
  //   setAvailableQuestions(response);
  // })
  // },[])

  return (
    <div id="body" style={questionList}>
      <Header />
      <BackButton />
      <Container sx={topButton}>
        {showAlert || showValidation ? (
          <MsgBar errMsg={msg.errMsg} color={msg.color} />
        ) : (
          <></>
        )}
        {error && (
          <MsgBar errMsg={"something went wrong"} color={redColor}></MsgBar>
        )}
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item>
            <Box variant="contained" sx={buttonLevel}>
              Level 1 Questions
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container sx={mainContainer} ref={editRef}>
        <Grid>
          <Card sx={cardBody}>
            <CardContent>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={0.3}>
                  <div className={classes.container} style={sideColumn}></div>
                </Grid>
                <Grid item xs={7} sx={addQues}>
                  <div className={classes.container}>
                    <Grid
                      xs={11}
                      sx={{
                        marginLeft: 3,
                        marginTop: 5,
                      }}
                    >
                      <Typography sx={label} display="inline">
                        Write Problem statement
                      </Typography>

                      <TextField
                        multiline
                        rows={3}
                        maxRows={10}
                        onChange={handelQuestionChange}
                        name="question"
                        value={problemStatement?.question}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <BorderColorIcon
                                sx={{ color: "grey", opacity: 0.5 }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                        id="fullWidth"
                        placeholder="Write Problem statement here"
                        mt={5}
                        sx={input}
                      />
                      <br />
                      <br />
                      <Typography sx={label} display="inline">
                        Constraints
                      </Typography>
                      <TextField
                        multiline
                        rows={3}
                        maxRows={10}
                        sx={input}
                        fullWidth
                        onChange={handleConstraintChange}
                        name="constraints"
                        value={sampleTestCase?.constraints}
                        id="fullWidth"
                        placeholder="Write Constraints here"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <BorderColorIcon
                                sx={{ color: "grey", opacity: 0.5 }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <br />
                      <br />
                      <Grid
                        container
                        direction="row"
                        justifyContent={"space-between"}
                      >
                        <Grid item xs={5}>
                          <Typography sx={label} display="inline">
                            Sample Input
                          </Typography>
                          <TextField
                            id="fullWidth"
                            placeholder="Input here"
                            onChange={handleConstraintChange}
                            name="input"
                            value={sampleTestCase?.input}
                            multiline
                            rows={3}
                            maxRows={10}
                            sx={input}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="start">
                                  <BorderColorIcon
                                    sx={{ color: "grey", opacity: 0.5 }}
                                  />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <Typography sx={label} display="inline">
                            Sample Output
                          </Typography>
                          <TextField
                            multiline
                            rows={3}
                            maxRows={10}
                            onChange={handleConstraintChange}
                            name="output"
                            value={sampleTestCase?.output}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="start">
                                  <BorderColorIcon
                                    sx={{ color: "grey", opacity: 0.5 }}
                                  />
                                </InputAdornment>
                              ),
                            }}
                            id="fullWidth"
                            placeholder="Output here"
                            sx={input}
                          />
                        </Grid>
                      </Grid>
                      <hr style={{ marginTop: "20px" }} />

                      <Stack
                        spacing={2}
                        direction="row"
                        justifyContent={"flex-end"}
                        mt={2}
                      >
                        <Button
                          variant="contained"
                          sx={btn}
                          onMouseOver={handleFocus}
                          onClick={addQuestion}
                        >
                          {editQuestion ? `Edit Question` : `Add Question`}
                        </Button>
                        <Button
                          variant="outlined"
                          component="label"
                          startIcon={<NoteAddIcon />}
                          onChange={uploadQuestion}
                          onClick={(e) => (e.target.value = null)}
                        >
                          Upload File
                          <input hidden accept="file/*" multiple type="file" />
                        </Button>
                      </Stack>
                    </Grid>
                  </div>
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  xs
                  spacing={0}
                  sx={testCol}
                >
                  <Grid item xs>
                    <div className={classes.container}>
                      <Container>
                        <Grid
                          mt={7}
                          container
                          direction="row"
                          justifyContent={"space-between"}
                        >
                          <Grid item xs={5}>
                            <Typography sx={label} display="flex">
                              Input
                            </Typography>
                            <TextField
                              sx={input}
                              id="fullWidth"
                              placeholder="Input here"
                              onChange={handleTestChange}
                              name="input"
                              value={testCases?.input}
                            />
                          </Grid>
                          <Grid item xs={5}>
                            <Typography sx={label} display="flex">
                              Output
                            </Typography>
                            <TextField
                              sx={input}
                              id="fullWidth"
                              placeholder="Output here"
                              onChange={handleTestChange}
                              name="output"
                              value={testCases?.output}
                            />
                          </Grid>
                        </Grid>
                      </Container>
                    </div>
                  </Grid>
                  <Grid item xs mt={-10}>
                    <div
                      className={clsx(classes.container, classes.containerTall)}
                    >
                      <Container>
                        <Typography sx={label} display="flex">
                          Test case List
                        </Typography>
                        <Grid
                          sx={{
                            width: "100%",
                            height: 180,
                            bgcolor: "white",
                            overflowY: "overlay",
                          }}
                        >
                          {testCaseList?.map((val, index) => {
                            {
                              console.log("index from map", index);
                            }
                            return (
                              <Box
                                component="form"
                                sx={{
                                  "& > :not(style)": { m: 1, width: "15ch" },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <TextField
                                  name="input"
                                  value={val?.input}
                                  placeholder="testcase input"
                                  multiline
                                  rows={1}
                                  onChange={(e) => editTestcase(e, index)}
                                  maxRows={10}
                                  color="primary"
                                  focused
                                />
                                <TextField
                                  name="output"
                                  value={val?.output}
                                  onChange={(e) => editTestcase(e, index)}
                                  placeholder="testcase output"
                                  multiline
                                  rows={1}
                                  maxRows={10}
                                  color="primary"
                                  focused
                                />
                                <IconButton
                                  aria-label="add"
                                  sx={delBtn}
                                  onClick={(e) => delTestCase(index)}
                                >
                                  <CloseIcon fontSize="x-small" />
                                </IconButton>
                              </Box>
                            );
                          })}
                        </Grid>
                        <Stack
                          spacing={2}
                          direction="row"
                          justifyContent={"flex-start"}
                          mt={2}
                        >
                          <Button
                            variant="contained"
                            sx={Addbtn}
                            onClick={addTest}
                          >
                            Add
                          </Button>
                         
                        </Stack>
                      </Container>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
        <AddedQues
          loader={loader}
          setMsg={setMsg}
          setEditRef={setEditRef}
          availableQuestions={availableQuestions}
          setAvailableQuestions={setAvailableQuestions}
          question={question}
          setQuestion={setQuestion}
          setContestQuestion={setContestQuestion}
          contestQuestion={contestQuestion}
          setEditQuestion={setEditQuestion}
          setQuesId={setQuesId}
          quesId={quesId}
          setAlert={setAlert}
          delFromContest={delFromContest}
          setProblemStatement={setProblemStatement}
          setTestCaseList={setTestCaseList}
          setSampleTestCase={setSampleTestCase}
          setIndex={setIndex}
          level={true}
        />
      </Container>
    </div>
  );
};

export default Level1;
