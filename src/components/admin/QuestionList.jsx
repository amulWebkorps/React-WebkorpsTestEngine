import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
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
import { useLocation, useNavigate } from "react-router-dom";
import {
  saveQuestion,
  uploadQuestions,
} from "../services/contest/contestServices";
import { getContestDetail } from "../services/adminServices";
import CloseIcon from "@mui/icons-material/Close";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Header from "../UI/Header";
import clsx from "clsx";
import AddedQues from "./AddedQues";
import MsgBar from "../auth/base/MsgBar";
import BackButton from "../UI/BackButton";
import { questionValidation } from "../auth/base/formValidation";

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

const QuestionBox = {
  cursor: "pointer",
  width: "250px",
  height: "55px",
  background: "#0057FF !important",
  color: "white",
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
  background: "white",
  color: "Black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  borderRadius: `0px 18px 18px 0px`,
  fontWeight: 700,
  fontSize: "20px",
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
  borderRadius: "18px",
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
const QuestionList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  const [editRef, setEditRef] = useState(null);
  const [contestData, setContestData] = useState(
    location?.state?.result?.data?.contest
  );
  const [quesId, setQuesId] = useState(null);
  const [index, setIndex] = useState(null);

  const defaulValues = {
    questionId: quesId === null ? "" : quesId,
    questionStatus: "true",
    contestLevel: `${contestData?.contestLevel}@${contestData?.contestId}`,
  };

  const quesIntialField = {
    questionId: defaulValues?.questionId,
    question: "",
    contestLevel: defaulValues?.contestLevel,
    questionStatus: defaulValues?.questionStatus,
    sampleTestCase: [],
    testcases: [],
  };

  const [question, setQuestion] = useState(quesIntialField);
  const [problemStatement, setProblemStatement] = useState(
    problemStatementIntialVal
  );
  const [sampleTestCase, setSampleTestCase] = useState(sampleTestInitialFields);
  const [testCases, setTestCases] = useState(testInitialFields);
  const [testCaseList, setTestCaseList] = useState([]);
  const [contestQuestion, setContestQuestion] = useState();
  const [editQuestion, setEditQuestion] = useState(false);
  const [delFromContest, setDelFromContest] = useState({
    state: true,
    contestId: contestData?.contestId,
  });
  const [availableQuestions, setAvailableQuestions] = useState(
    location?.state?.data?.totalAvailableQuestion
  );
  const [showAlert, setAlert] = useState(false);
  const [showAlreadyQuestion, setShowAlreadyQuestion] = useState(false);
  const [showSelectQuestion, setshowselectquestion] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [loader, setloader] = useState(true);
  const [msg, setMsg] = useState({
    errMsg: "",
    color: "",
  });

  const handleConstraintChange = (e) => {
    const { name, value } = e.target;
    setSampleTestCase({
      ...sampleTestCase,
      [name]: value,
    });
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
  const formValidation = () => {};
  const addTest = () => {
    setTestCaseList([...testCaseList, testCases]);
    setTestCases(testInitialFields);
  };

  const addQuestion = async (e) => {
    if (questionValidation(problemStatement, sampleTestCase, testCaseList)) {
      setShowValidation(true);
      setMsg({
        errMsg: "Please fill details...!",
        color: "red",
      });
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
            errMsg: "Question edit successfully...!",
            color: "green",
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
            errMsg: "Question added successfully...!",
            color: "green",
          });
          setContestQuestion([...contestQuestion, question]);
          setQuestion(quesIntialField);
          setProblemStatement(problemStatementIntialVal);
          setTestCases(sampleTestInitialFields);
          setSampleTestCase(sampleTestInitialFields);
          setTestCaseList([]);
        }
      } catch (error) {
        console.log("error");
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
        errMsg: "Please select excel file...!",
        color: "red",
      });
    } else {
      setAlert(true);
      try {
        const result = await uploadQuestions(
          files[0],
          contestData?.contestId,
          ""
        );
        setMsg({
          errMsg: "Question uploaded successfully...!",
          color: "green",
        });
        setTimeout(() => {
          setAlert(false);
        }, 1200);
      } catch (error) {
        setAlert(false);
        console.log("ee", error);
      }
    }
  };

useEffect(()=>{
  if(showValidation)
  setTimeout(() => {
    setShowValidation(false);
    setMsg({
      errMsg: "",
      color: "",
    });
  }, 1500);
},[showValidation])

  useEffect(() => {
    const result = getContestDetail(contestData?.contestId)
      .then((res) => {
        if (res.message == "success" && res.status == "200") {
          setloader(false);
        }
        setContestQuestion(res?.data?.contestQuestionDetail);
      })
      .catch("dmndv");
  }, [showAlert]);
  
  return (
    <div style={questionList}>
      <Header />
      <BackButton />
      <Container sx={topButton}>
        {showAlert ||
        showValidation ||
        showAlreadyQuestion ||
        showSelectQuestion ? (
          <MsgBar errMsg={msg.errMsg} color={msg.color} />
        ) : (
          <></>
        )}
        <Grid container sx={{ justifyContent: "center" }} mt={3}>
          <Box sx={QuestionBox}>Questions</Box>
          <Box
            sx={AnswerBox}
            onClick={() =>
              navigate("/participator ", { state: location?.state })
            }
          >
            Participators
          </Box>
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
                          onClick={(e) => (e.target.value = null)}
                          onChange={uploadQuestion}
                          startIcon={<NoteAddIcon />}
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
                            return (
                              <Box
                                key={index}
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
          setEditRef={setEditRef}
          loader={loader}
          showAlert={showAlert}
          contestId={contestData?.contestId}
          setMsg={setMsg}
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
          setShowAlreadyQuestion={setShowAlreadyQuestion}
          setshowselectquestion={setshowselectquestion}
        />
      </Container>
    </div>
  );
};

export default QuestionList;
