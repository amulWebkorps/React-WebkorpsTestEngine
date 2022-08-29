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
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Header from "../UI/Header";
import clsx from "clsx";
import AddedQues from "./AddedQues";
import { useLocation, useNavigate } from "react-router-dom";
import { saveQuestion } from "../services/contest/contestServices";
import MsgBar from "../auth/base/MsgBar";
import { getContestDetail } from "../services/adminServices";

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

const delBtn = {
  position: "absolute",
  marginTop: "8px",
  right: "8%",

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
const QuestionList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  const [contestData, setContestData] = useState(
    location?.state?.data?.contest
  );
  const [quesId, setQuesId] = useState(null);
  const [index,setIndex]=useState(null);
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
  const [contestQuestion, setContestQuestion] = useState(null);
  const [editQuestion, setEditQuestion] = useState(false);
  const [delFromContest, setDelFromContest] = useState({
    state: true,
    contestId: contestData?.contestId,
  });
  const [availableQuestions, setAvailableQuestions] = useState(
    location?.state?.data?.totalAvailableQuestion
  );
  const [showAlert, setAlert] = useState(false);
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
  const addTest = () => {
    setTestCaseList([...testCaseList, testCases]);
    setTestCases(testInitialFields);
  };

  const addQuestion = async (e) => {
    setAlert(true);
    try {
      const result = await saveQuestion(question).then();
      if (editQuestion) {
        setMsg({
          errMsg: "Question edit successfully...!",
          color: "green",
        });
      } else {
        setMsg({
          errMsg: "Question added successfully...!",
          color: "green",
        });
      }

      setQuestion(quesIntialField);
      setProblemStatement(problemStatementIntialVal);
      setTestCases(sampleTestInitialFields);
      setSampleTestCase(sampleTestInitialFields);
      setTestCaseList([]);
      setTimeout(() => {
        setAlert(false);
      }, 1200);
      if (editQuestion) {
        setEditQuestion(false);
        setQuestion(quesIntialField);
        setProblemStatement(problemStatementIntialVal);
        setTestCases(sampleTestInitialFields);
        setSampleTestCase(sampleTestInitialFields);
        setTestCaseList([]);
        return (contestQuestion[index] = question);
      } else {
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
  };
  useEffect(() => {
    const result = getContestDetail(contestData?.contestId).then((res) => {
      const response = res.data;
      setContestQuestion(response?.contestQuestionDetail);
    });
  }, [alert]);

  return (
    <div style={questionList}>
      <Header />
      <Container sx={topButton}>
        {showAlert && <MsgBar errMsg={msg.errMsg} color={msg.color} />}
        <Grid container sx={{ justifyContent: "center" }} mt={3}>
          <Box sx={QuestionBox}>Questions</Box>
          <Box sx={AnswerBox} onClick={() => navigate("/participator")}>
            Participators
          </Box>
        </Grid>
      </Container>
      <Container sx={mainContainer}>
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
                              <BorderColorIcon sx={{ color: "#0057FF" }} />
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
                              <BorderColorIcon sx={{ color: "#0057FF" }} />
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
                                  <BorderColorIcon sx={{ color: "#0057FF" }} />
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
                                  <BorderColorIcon sx={{ color: "#0057FF" }} />
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
                                component="form"
                                sx={{
                                  "& > :not(style)": { m: 1, width: "15ch" },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <TextField
                                  name="testInput1"
                                  value={val?.input}
                                  placeholder="testcase input"
                                  multiline
                                  rows={1}
                                  maxRows={10}
                                  color="primary"
                                  focused
                                />
                                <TextField
                                  name="testOutput1"
                                  value={val?.output}
                                  placeholder="testcase output"
                                  multiline
                                  rows={1}
                                  maxRows={10}
                                  color="primary"
                                  focused
                                />
                              </Box>
                            );
                          })}
                        </Grid>
                        <Stack
                          spacing={2}
                          direction="row"
                          justifyContent={"flex-end"}
                          mt={2}
                        >
                          <Button
                            variant="contained"
                            sx={Addbtn}
                            onClick={addTest}
                          >
                            Add
                          </Button>
                          <Button variant="contained" sx={Addbtn}>
                            Close
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
          setMsg={setMsg}
          availableQuestions={availableQuestions}
          setAvailableQuestions={setAvailableQuestions}
          question={question}
          setQuestion={setQuestion}
          setContestQuestion={setContestQuestion}
          contestQuestion={contestQuestion}
          setEditQuestion={setEditQuestion}
          setQuesId={setQuesId}
          setAlert={setAlert}
          delFromContest={delFromContest}
          setProblemStatement={setProblemStatement}
          setTestCaseList={setTestCaseList}
          setSampleTestCase={setSampleTestCase}
          setIndex={setIndex}
        />
      </Container>
    </div>
  );
};

export default QuestionList;
