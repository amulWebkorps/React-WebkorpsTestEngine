import React, { useEffect, useRef, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Button, IconButton, InputLabel } from "@mui/material";
import "../../App.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { crossbtn } from "../assests/images";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  addSelectiveQuestion,
  filterQuestion,
} from "../services/contest/contestServices";

const background1 = {
  height: "100%",
  background: ` linear-gradient(
      180deg,
      rgba(24, 135, 201, 0) 0%,
      rgba(24, 135, 201, 0.224167) 40.42%,
      rgba(24, 135, 201, 0.4) 100%
    )`,
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
const whiteContainer = {
  marginTop: "50px",
  height: "460px",
  background: "#f9fafc",
  boxShadow: " 2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "18px",
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
  paddingLeft: "50px",

  color: "#FFFFFF",
};

const levelText = {
  fontFamily: "Raleway",
  fontSize: "34px",
  fontWeight: "600",
  lineHeight: "40px",
  letterSpacing: "0em",
  textAlign: "left",
};

const buttonEmail = {
  fontSize: "8",
  fontWeight: "600",
  color: "white",
  borderRadius: "6px",
  width: "160px",
  marginLeft: "20px",
};

const levelSubHeading = {
  width: "100%",
  height: "89px",
  background: "#F9FAFC",
  borderRadius: "17px 17px 0px 0px",
};

const divText = {
  width: "70%",
  fontFamily: "railway",
  paddingTop: 3,
  marginLeft: 2,
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "24px",
  lineHeight: "28px",
  color: "#000000",
  overflowY: "auto",
};

const scrollDiv = {
  overflowY: "auto",
};

const divSelect = {
  width: "1120px",
  height: "76px",
  background: "#FFFFFF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  marginTop: "12px",
};

const containerUpper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const All = ({
  setshowselectquestion,
  setShowAlreadyQuestion,
  availableQuestions,
  setAvailableQuestions,
  setContestQuestion,
  contestQuestion,
  setAlert,
  setMsg,
  contestId,
}) => {
  const ref = useRef(null);
  const [dropValue, setDropValue] = useState("All");
  const [questionArr, setQuestionArr] = useState([]);
  const [selectiveQuestion, setSelectiveQuestion] = useState({
    questionsIds: "",
    contestId: [],
  });
  const handleQuestion = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setQuestionArr([...questionArr, value]);
    } else {
      setQuestionArr((val) => {
        return val.filter((index) => index !== value);
      });
    }
  };

  const handleFocus = () => {
    setSelectiveQuestion({
      questionsIds: questionArr,
      contestId: [contestId],
    });
  };

  const handleChange = async (e) => {
    const { value } = e.target;
    setDropValue(value);
  };
  const addSelectiveQuestions = async () => {
    const questionsid = contestQuestion.map((v) => v.questionId);
    if (
      JSON.stringify(questionsid) ===
      JSON.stringify(selectiveQuestion?.questionsIds)
    ) {
      setShowAlreadyQuestion(true);
      setMsg({
        errMsg: "selected Question is already present in contest...!",
        color: "blue",
      });
      setTimeout(() => {
        setShowAlreadyQuestion(false);
      }, 2000);
    } else {
      try {
        const result = await addSelectiveQuestion(selectiveQuestion);
        if (result?.data?.length === 0) {
          setshowselectquestion(true);
          setMsg({
            errMsg: "Please select a question...!",
            color: "blue",
          });
          setTimeout(() => {
            setshowselectquestion(false);
          }, 1200);
        } else {
          setMsg({
            errMsg: "selected Question  added successfully...!",
            color: "green",
          });
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
          }, 1200);
          setContestQuestion([...contestQuestion, ...result.data]);
        }
      } catch (error) {
        console.log("question err", error);
      }
    }
  };
  useEffect(() => {
    const result = filterQuestion(dropValue).then((res) => {
      setAvailableQuestions(res.data);
    });
  }, [dropValue]);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={ref}>
      <Grid container sx={{ justifyContent: "center" }}></Grid>
      <Container sx={whiteContainer} fixed>
        <Grid sx={containerUpper}>
          <Grid item sx={levelSubHeading}>
            <Typography sx={levelText} mt={2}>
              Available Questions
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <FormControl sx={{ mt: 2, minWidth: 160 }} size="small">
              <Select
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                value={dropValue}
                onChange={handleChange}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Level 1"}>Level 1</MenuItem>
                <MenuItem value={"Level 2"}>Level 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item mt={2}>
            <Button
              variant="contained"
              sx={buttonEmail}
              onMouseOver={handleFocus}
              onClick={() => addSelectiveQuestions()}
            >
              Add questions
            </Button>
          </Grid>
        </Grid>
        <Grid container sx={{ maxHeight: "350px", overflowY: "auto" }}>
          {availableQuestions?.map((val, index) => {
            return (
              <Grid container sx={divSelect} key={index}>
                <Grid item sm={10} sx={scrollDiv}>
                  <Typography sx={divText}>{val?.question}</Typography>
                </Grid>
                <Grid item sm={1} mt={2}>
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon color="#0057ff" />}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                    value={val?.questionId}
                    onChange={handleQuestion}
                  />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default All;
