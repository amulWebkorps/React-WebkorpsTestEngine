import {
  Grid,
  Paper,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  Stack,
  InputAdornment,
  OutlinedInput,
  FormControl,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { FixedSizeList } from "react-window";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import Header from "../UI/Header";
import clsx from "clsx";
import AddedQues from "./AddedQues";
import { useNavigate } from "react-router-dom";
import All from "./All";
function renderRow(props) {
  const { index, style } = props;
  const testCase = {
    height: "42px",
    minHeight: "10px",
  };

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText
          primary=<Paper sx={testCase} elevation={2}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Container
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <FormControl
                  sx={{ width: "12ch", height: "5px", marginTop: "5px" }}
                >
                  <OutlinedInput
                    placeholder="Input"
                    sx={{ height: "30px" }}
                    multiline
                    rows={1}
                    maxRows={10}
                  />
                </FormControl>
                <FormControl
                  sx={{ width: "12ch", height: "5px", marginTop: "5px" }}
                >
                  <OutlinedInput
                    placeholder="Output"
                    sx={{ height: "30px" }}
                    multiline
                    rows={1}
                    maxRows={10}
                  />
                </FormControl>
                <div>
                  <IconButton aria-label="add" sx={delBtn}>
                    <CloseIcon sx={{ fontSize: "8px" }} />
                  </IconButton>
                </div>
              </Container>
            </Box>
          </Paper>
        />
      </ListItemButton>
    </ListItem>
  );
}

const useStyles = makeStyles({
  container: {
    height: "100%", // So that grids 1 & 4 go all the way down
    minHeight: 180, // Give minimum height to a div
  },
  containerTall: {
    minHeight: 250, // This div has higher minimum height
  },
  noBorder: {
    border: "none",
  },
});

const sideColumn = {
  background: "#0057FF",
  /* vv */

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
const quesIntialField = {
  problem: "",
  constraints: "",
  sampleInput: "",
  sampleOutput: "",
  input: "",
  output: "",
  testCase: {},
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

const Level1 = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [question, setQuestion] = useState(quesIntialField);
  const [quesId, setQuesId] = useState(null);
  const [contestQuestion, setContestQuestion] = useState([
    {
      problem:
        "Given a String S, reverse the string without reversing its individual words. Words are separated by dots.",
      constraints: "1 <= |S| <= 2000",
      sampleInput: "S = i.like.this.program.very.much",
      sampleOutput: "much.very.program.this.like.i",
      input: "",
      output: "",
      testCase: {},
    },
  ]);
  const [editQuestion, setEditQuestion] = useState(false);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setQuestion({
      ...question,
      [name]: value,
    });
  };
  const addQuestion = (e) => {
    if (editQuestion) {
      setEditQuestion(false);
      setQuestion(quesIntialField);
      return (contestQuestion[quesId] = question);
    } else {
      if (quesIntialField.problem === "") {
        alert("fill all field");
      } else {
        setContestQuestion([...contestQuestion, question]);
        setQuestion(quesIntialField);
      }
    }
  };

  return (
    <div style={questionList}>
      <Header />
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item>
          <Box variant="contained" sx={buttonLevel}>
            Level1 Questions
          </Box>
        </Grid>
      </Grid>
      {/* <Container sx={topButton}>
        <Grid container sx={{ justifyContent: "center" }} mt={3}>
          <Box sx={QuestionBox}>Questions</Box>
          <Box sx={AnswerBox} onClick={() => navigate("/participator")}>
            Participators
          </Box>
        </Grid>
      </Container> */}
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
                      {/* <label style={label}>Write Problem statement</label> */}
                      <TextField
                        multiline
                        rows={3}
                        maxRows={10}
                        onChange={handleOnchange}
                        name="problem"
                        value={question?.problem}
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
                      {/* <label style={label}>Constraints</label> */}
                      <TextField
                        multiline
                        rows={3}
                        maxRows={10}
                        sx={input}
                        fullWidth
                        onChange={handleOnchange}
                        name="constraints"
                        value={question?.constraints}
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
                            onChange={handleOnchange}
                            name="sampleInput"
                            value={question?.sampleInput}
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
                            onChange={handleOnchange}
                            name="sampleOutput"
                            value={question?.sampleOutput}
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
                              onChange={handleOnchange}
                              name="input"
                              value={question?.input}
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
                              onChange={handleOnchange}
                              name="output"
                              value={question?.output}
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
                          }}
                        >
                          <FixedSizeList
                            height={180}
                            itemSize={80}
                            itemCount={4}
                            overscanCount={5}
                          >
                            {renderRow}
                          </FixedSizeList>
                        </Grid>
                        <Stack
                          spacing={2}
                          direction="row"
                          justifyContent={"flex-end"}
                          mt={2}
                        >
                          <Button variant="contained" sx={Addbtn}>
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
          question={question}
          setQuestion={setQuestion}
          setContestQuestion={setContestQuestion}
          contestQuestion={contestQuestion}
          setEditQuestion={setEditQuestion}
          setQuesId={setQuesId}
        />
      </Container>
    </div>
  );
};

export default Level1;
