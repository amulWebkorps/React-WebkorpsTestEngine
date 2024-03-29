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
import Loader from "../auth/base/Loader";
import { greenColor, blueColor } from "../../alertColors";
import { useNavigate } from "react-router-dom";

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
  overflow: "scroll"
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
  fontFamily: "railway",
  paddingTop: 3,
  marginLeft: 2,
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "24px",
  lineHeight: "28px",
  color: "#000000",
  overflowY: "auto",
  maxHeight: "55px",
  display: "inline-block"
};

const scrollDiv = {
  overflowY: "auto",
};

const divSelect = {
  width: "1060px",
  height: "76px",
  background: "#FFFFFF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  marginTop: "12px",
  justifyContent: "space-between",
};

const containerUpper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};
const loaderStyle = {
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
};
const dataText = {
  display: "flex",
  justifyContent: "center",
  fontSize: "20px",
};
const All = ({
  showAlert,
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
  const [loader, setloader] = useState(true);
  const [selectiveQuestion, setSelectiveQuestion] = useState({
    questionsIds: "",
    contestId: [],
  });

  const navigate = useNavigate()
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
    setAvailableQuestions([]);
  };
  const addSelectiveQuestions = async () => {
    const questionsid = contestQuestion.map((v) => v.questionId);
    const selectId = selectiveQuestion.questionsIds.map((v) => v);
    let data = selectId.filter((arr) => !questionsid.includes(arr));
    if (data.length === 0 && questionArr.length == 0) {
      setshowselectquestion(true);
      setMsg({
        errMsg: "Please Select A Question...!",
        color: blueColor,
      });
      setTimeout(() => {
        setshowselectquestion(false);
      }, 1200);
    } else if (data.length === 0 && questionArr.length != 0) {
      setShowAlreadyQuestion(true);
      setMsg({
        errMsg: "Selected Question is already Present in Contest...!",
        color: blueColor,
      });
      setTimeout(() => {
        setShowAlreadyQuestion(false);
      }, 2000);
    } else {
      try {
        const result = await addSelectiveQuestion(selectiveQuestion);
        setMsg({
          errMsg: "Selected Question Added...!",
          color: greenColor,
        });
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 1200);
        setAvailableQuestions([]);
        setQuestionArr([]);
        setContestQuestion([...contestQuestion, ...result.data]);
      } catch (error) {
        console.log("question err", error);
        if(error.response.status === 403) navigate("/error")
      }
    }
  };
  useEffect(() => {
    setloader(true);
    const result = filterQuestion(dropValue).then((res) => {
      if (res.message == "success" && res.status == "200") {
        setloader(false);
      }
      setAvailableQuestions(res.data);
    });
  }, [dropValue, showAlert]);

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

        {loader ? (
          <Loader />
        ) : availableQuestions.length == 0 ? (
          <Typography sx={dataText}>No Data</Typography>
        ) : (
          availableQuestions?.map((val, index) => {
            return (
              <Grid container sx={{ maxHeight: "350px", overflowY: "auto" }}>
                <Grid container sx={divSelect} key={index}>
                  <Grid item sm={10} sx={scrollDiv}>
                    <Typography sx={divText}>{val?.question}</Typography>
                  </Grid>
                  <Grid item sm={1} mt={2} key={`${index}%%$`}>
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon color="#0057ff" />}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                      value={val?.questionId}
                      onChange={handleQuestion}
                    />
                  </Grid>
                </Grid>
              </Grid>
            );
          })
        )}
      </Container>
    </div>
  );
};

export default All;
