import {
  Paper,
  Typography,
  Grid,
  CardContent,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import All from "./All";
import React, { useEffect, useState } from "react";
import { deleteQuestion } from "../services/contest/contestServices";

const heading = {
  height: "89px",
  background: "#F9FAFC",
  display: "flex",
  justifyContent: "space-between",
  overFlow: "auto",
};
const headText = {
  marginLeft: 2,
  fontStyle: "normal",
  fontWeight: " 600",
  fontSize: "34px",
  lineHeight: "40px",
};
const ques = {
  display: "flex",
  height: "70px",
  background: "#FFFFFF",
  /* vv */

  boxShadow: " 2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
};
const delBtn = {
  top: "29%",
  height: "30px",
  width: "30px",
  fontSize: "smaller",
  // backgroundColor: '#E5E5E5',
  backgroundColor: "#E5E5E5",
  color: "black",
  borderRadius: "50%",
};

const quesText = {
  width: "70%",
  fontFamily: "railway",
  paddingTop: 3,
  marginLeft: 2,
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "24px",
  lineHeight: "28px",
  color: "#000000",
};
const edit = {
  paddingTop: "2%",
  width: "24%",

  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "24px",
  lineHeight: "28px",
  textDecorationLine: "underline",

  color: "#0057FF",
};

const card = {
  background: "#F9FAFC",
  height: "466px",
  overflowY: "auto",
};

const btn = {
  fontSize: "8",
  fontWeight: "600",
  color: "white",
  borderRadius: "6px",
  width: "200px",
};

const AddedQues = ({
  setMsg,
  setAlert,
  delFromContest,
  availableQuestions,
  setQuesId,
  setIndex,
  question,
  contestQuestion,
  setContestQuestion,
  setEditQuestion,
  setDeleteQ,
  setProblemStatement,
  setSampleTestCase,
  setTestCaseList

  
}) => {
  const [showq, setShowQ] = useState(false);

  const editQuestion = (id,questionID) => {
    setEditQuestion(true);
    setQuesId(questionID);
    setIndex(id)
    setProblemStatement({
      question:contestQuestion?.[id]?.question
    })
    setSampleTestCase({
      constraints:contestQuestion?.[id]?.sampleTestCase?.[0]?.constraints,
      input:contestQuestion?.[id]?.sampleTestCase?.[0]?.input,
      output:contestQuestion?.[id]?.sampleTestCase?.[0]?.output
    })
    setTestCaseList(contestQuestion?.[id]?.testcases)
  };

  const delQuestion = async (id, quesId) => {
    setAlert(true);
    const arr = [delFromContest.state?delFromContest.contestId:`questionForLevel`, quesId];
    setContestQuestion((val) => {
      return val.filter((val, index) => {
        return index !== id;
      });
    });
    try {
      const result = await deleteQuestion(arr).then((res) => {
        const response = res.data;
        setMsg({
          errMsg:"Question deleted successfully...!",
          color:"red"
        })
        setTimeout(() => {
          setAlert(false)
        }, 1200);
        if (response) {
          setDeleteQ(true);
        }
      });
    } catch (error) {
      console.log("eroror", error);
    }
  };
console.log('contest question from addedd edit',question)
  return (
    <>
      <Paper sx={heading}>
        <div>
          <Typography sx={headText}>
            Contest Contain Following
            <br />
            Questions:
          </Typography>
        </div>
        <div>
          {" "}
          <Button variant="contained" sx={btn} onClick={() => setShowQ(true)}>
            available Question
          </Button>
        </div>
      </Paper>
      <CardContent sx={card}>
        <Grid container direction="row" flexDirection={"column"}>
          {contestQuestion?.map?.((val, index) => {
            return (
              <Grid item mt={2}>
                <Paper sx={ques}>
                  <Typography sx={quesText}>
                    {val?.question?.length >= 59
                      ? `${val?.question.substring(0, 59)} .....`
                      : val?.question}
                  </Typography>
                  <Link
                    underline="always"
                    sx={edit}
                    onClick={() => editQuestion(index,val?.questionId)}
                  >
                    {"Edit Question"}
                  </Link>
                  <IconButton
                    aria-label="add"
                    sx={delBtn}
                    onClick={() => delQuestion(index, val?.questionId)}
                  >
                    <CloseIcon fontSize="x-small" />
                  </IconButton>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
      {showq && <All availableQuestions={availableQuestions} />}
    </>
  );
};

export default AddedQues;
