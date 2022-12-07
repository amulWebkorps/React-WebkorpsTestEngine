import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "../UI/Header";
import BackButton from "../UI/BackButton";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import TabAlert from "../UI/TabAlert";
import $ from "jquery";
import ReactRouterPrompt from "react-router-prompt";
import { submitMcq } from "../services/candidate";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
const background1 = {
  height: "100vh",
  background: `linear-gradient(
    180deg,
    rgba(24, 135, 201, 0) 0%,
    rgba(24, 135, 201, 0.224167) 40.42%,
    rgba(24, 135, 201, 0.4) 100%
  )`,
};
const MainContainer = {
  background: "#F9FAFC",
  width: "53vw",
  height: "57vh",
  boxShadow: `2px 9px 19px rgba(230, 230, 230, 0.37)`,
  borderRadius: "17px",
  overflow: "auto",
  marginTop: "50px",
};
const innerHeading = {
  background: "#F9FAFC",
  borderRadius: " 17px 17px 0px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "25px",
  paddingTop: "10px",
  overflow:"auto"
};
const innerSearch = {
  display: "flex",
  height: "40px",
};
const searchIcon = {
  marginRight: "100px",
  fontWeight: "Bold",
  height: "23px",
};
const Answerheading = {
  width: "50%",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "34px",
};
const maindata = {
  marginTop: "40px",
  alignItems: "center",
  justifyContent: "space-between",
};
const UserName = {
  fontSize: "20px",
  marginLeft: "2vh",
};
const divText = {
  width: "80%",
  height: "28px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "20px",
  lineHeight: "23px",
  color: "black",
  marginLeft: "20px",
  marginTop: "20px",
};
const sentMails = {
  fontSize: "8",
  fontWeight: "600",
  color: "#1887C9",
  borderRadius: "6px",
  marginTop: "47px",
  marginLeft: "27px",
  background: "transparent",
  border: "#0057FF solid 3px",
};
const sendMails = {
  fontSize: "8",
  fontWeight: "600",
  color: "white",
  borderRadius: "6px",
  marginTop: "47px",
  marginLeft: "27px",
};
const btn = {
  width: "55vw",
  justifyContent: "end",
};
const divSelect = {
  width: "100%",
  height: "76px",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  marginTop: "10px",
  justifyContent: "space-between",
};
const innerCon = {
  overflow: "auto",
};
const selectedOptionsInitialState = {
  option1: false,
  option2: false,
  option3: false,
  option4: false,
};
function McqQuestion() {
  const location = useLocation();
  const [quesIds, setQuesIds] = useState(
    location?.state?.participatorsContestDetails?.mcqList?.map(
      (val) => val?.["mcqId"]
    )
  );

  const [exit, setExit] = useState(true);
  const [warning, setWarning] = useState(0);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [winCount, setWinCount] = useState(0);
  const [timer, setTimer] = useState("00:00:00");
  const [duration, setDuration] = useState(
    location?.state?.participatorsContestDetails?.contestTime
  );
  const [finish, setFinish] = useState();
  const [selectedOptions, setSelectedOptions] = useState(
    selectedOptionsInitialState
  );
  const [mcqList, setMcqList] = useState(
    location?.state?.participatorsContestDetails?.mcqList
  );
  const [queAns, setQueAns] = useState([]);

  const timerGet = duration?.match(/\d/g)?.join("");
  const Ref = useRef(null);
  const ref = useRef(null);
  const changeseconds = timerGet * 60;
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("blur", function () {
      setWinCount(winCount + 1);
      setOpen(true);
    });

    window.addEventListener("focus", function () {});
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") {
        setWarning(warning + 1);
        setOpen(true);
      }
    });
  }, [warning, winCount]);
  $(document).ready(function () {
    var ctrlDown = false,
      ctrlKey = 17,
      cmdKey = 91,
      vKey = 86,
      cKey = 67;
    $(document)
      .keydown(function (e) {
        if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = true;
      })
      .keyup(function (e) {
        if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = false;
      });
    $(".no-copy-paste").keydown(function (e) {
      if (ctrlDown && (e.keyCode == vKey || e.keyCode == cKey)) return false;
    });
  });
  useEffect(() => {
    {
      try {
        if (timer === "00:00:01") {
          setExit(false);
          submitCodes();
          setTimeout(() => {
            localStorage.clear();
            navigate("/thanku");
          }, 1500);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [timer]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token === null) {
      setExit(false);
      setTimeout(() => {
        navigate(`/login/:id`);
      }, [200]);
    }
  }, []);
  const isRefreshed = sessionStorage.getItem("isRefreshed");
  useEffect(() => {
    if (isRefreshed) {
      setExit(false);
      setTimeout(() => {
        navigate("/thanku");
        localStorage.clear();
      }, [1000]);
      sessionStorage.removeItem("isRefreshed");
    } else {
      sessionStorage.setItem("isRefreshed", true);
    }
  }, []);

  const selectOption = async (e, n) => {
    setSelectedOptions({
      ...selectedOptionsInitialState,
      [`option${n}`]: true,
    });
    handleQuestionAndAns(e, mcqList[count].mcqId, n);
 
  };

  const nextQuestion = (e) => {
    setSelectedOptions(selectedOptionsInitialState);
  
    setCount(function (prevCount) {
      if (prevCount <= mcqList?.length) {
        return (prevCount += 1);
      } else {
        return (prevCount = mcqList?.length);
      }
    });
  };

  const prevQuestion = (e) => {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
    setSelectedOptions(selectedOptionsInitialState);
  };

  const selectedOption = useMemo(() => {
    let Qid = mcqList?.[count].mcqId;
    let options = mcqList[count];
    let isAvialiable = false;
    let sOption = "";
   
    queAns?.map((data) => {
      if (data.mcqId === Qid) {
        isAvialiable = true;
        sOption = data.ans;
      }
    });

    if (isAvialiable) {
      [...Array(4)].map((i, index) => {
        let op = "option" + (index + 1);
        if (options[op] === sOption) {
          setSelectedOptions((p) => {
       
            return { ...p, [op]: true };
          });
        }
      });
    }
  }, [count]);

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
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + changeseconds);
    return deadline;
  };
  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 100);
    Ref.current = id;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  useEffect(() => {
    document.oncontextmenu = document.body.oncontextmenu = function () {
      return false;
    };
  }, [window]);
  const handleQuestionAndAns = (correctAns, id, n) => {
    let data = [...queAns];
    const ind = data.findIndex((d) => d.mcqId === id);

    if (ind !== -1) {
      data[ind].ans = correctAns;

      data[ind][`op${n}`] = "true";
    } else {
      data.push({ mcqId: id, ans: correctAns });
    }
    setQueAns([...data]);
  };

  useEffect(() => {
    localStorage.setItem("code", JSON.stringify(queAns));
  }, [queAns]);

  let mcqQuetionsId = [];
  let correctAnswers = [];

  const submitCodes = async () => {
    queAns.map((obj) => {
      mcqQuetionsId.push(obj.mcqId);
      correctAnswers.push(obj.ans);
    });

    const arr = {
      contestId: localStorage.getItem("contestId"),
      mcqQuetionsId: mcqQuetionsId,
      correctAnswers: correctAnswers,
      studentId: localStorage.getItem("studentId"),
    };
    setExit(false);

    try {
      const result = await submitMcq(arr).then((res) => {});
    } catch (error) {
      console.log(error);
    }
  
    setTimeout(() => {
      navigate("/thanku");
      localStorage.clear();
    }, [1500]);
  };

  return (
    <>
      <div style={background1}>
        <Header />
        <ReactRouterPrompt when={exit}>
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
                  <DialogTitle id="alert-dialog-title">{"Alert"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      There is no way to go back. Press the close button and
                      continue your test..!!
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={onCancel}
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            )
          }
        </ReactRouterPrompt>
        <TabAlert
          setExit={setExit}
          warning={warning}
          open={open}
          setOpen={setOpen}
          winCount={winCount}
          finalSubmit={submitCodes}
        />
        <BackButton />
        <Container>
          <Container sx={MainContainer}>
            <Box sx={innerHeading}>
              <Typography sx={Answerheading}>Question{count + 1}</Typography>
              <Box sx={innerSearch}>
                <Typography sx={searchIcon}>Time:{timer}</Typography>
              </Box>
            </Box>

            <Grid sx={maindata}>
              <Typography sx={UserName}>
                {mcqList?.[count]?.mcqQuestion}
              </Typography>
            </Grid>
            <Grid container sx={innerCon}>
              <Grid
                item
                sx={{
                  ...divSelect,
                  backgroundColor: selectedOptions.option1
                    ? "#1887C9"
                    : "white",
                }}
                onClick={() => selectOption(mcqList[count].option1, 1)}
              >
                <Typography sx={divText}>
                  {mcqList?.[count]?.option1}
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  ...divSelect,
                  backgroundColor: selectedOptions.option2
                    ? "#1887C9"
                    : "white",
                }}
                onClick={(e) => selectOption(mcqList[count].option2, 2)}
              >
                <Typography sx={divText}>
                  {mcqList?.[count]?.option2}
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  ...divSelect,
                  backgroundColor: selectedOptions.option3
                    ? "#1887C9"
                    : "white",
                }}
                onClick={(e) => selectOption(mcqList[count].option3, 3)}
              >
                <Typography sx={divText}>
                  {mcqList?.[count]?.option3}
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  ...divSelect,
                  backgroundColor: selectedOptions.option4
                    ? "#1887C9"
                    : "white",
                }}
                onClick={(e) => selectOption(mcqList[count].option4, 4)}
              >
                <Typography sx={divText}>
                  {mcqList?.[count]?.option4}
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Grid container sx={btn}>
              <Grid item>
                <Button
                  variant="contained"
                  sx={sendMails}
                  onClick={prevQuestion}
                  disabled={count === 0}
                >
                  Previous
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={sendMails}
                  onClick={nextQuestion}
                  disabled={mcqList.length - 1 === count}
                >
                  Next Question
                </Button>
                {mcqList.length - 1 === count ? (
                  <Button
                    variant="contained"
                    sx={sendMails}
                    onClick={() => {
                      submitCodes();
                    }}
                  >
                    {"submit"}
                  </Button>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </Container>
        </Container>
      </div>
    </>
  );
}
export default McqQuestion;
