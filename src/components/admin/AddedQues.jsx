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
import React, { useState } from "react";

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

const AddedQues = ({ question, setQuesId, setQuestion, contestQuestion, setContestQuestion,setEditQuestion }) => {
  const [showq, setShowQ] = useState(false);
  const editQuestion=(id)=>{
    setEditQuestion(true);
    setQuesId(id)
    setQuestion({
      problem: `${contestQuestion?.[id]?.problem}`,
      constraints: `${contestQuestion?.[id]?.constraints}`,
      sampleInput: `${contestQuestion?.[id]?.sampleInput}`,
      sampleOutput: `${contestQuestion?.[id]?.sampleOutput}`,
      input: `${contestQuestion?.[id]?.input}`,
      output: `${contestQuestion?.[id]?.output}`,
      testCase: {}
    })
    
  }
  
  const delQuestion=(id)=>{
   
    setContestQuestion((val) => {
      return val.filter((val, index) => {
        return index !== id;
      });
    });
  }
 
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
               
                    {val?.problem?.length >= 59
                      ? `${val?.problem.substring(0, 59)} .....`
                      : val?.problem}
                  </Typography>
                  {/* <Typography component="span" sx={edit}>
                    Edit Question
                  </Typography> */}
                  <Link href="#" underline="always" sx={edit} onClick={()=>editQuestion(index)}>
                    {'Edit Question'}
                  </Link>
                  <IconButton aria-label="add" sx={delBtn}  onClick={()=>delQuestion(index)}>
                    <CloseIcon fontSize="x-small"  />
                  </IconButton>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
      {showq && <All />}
    </>
  );
};

export default AddedQues;
