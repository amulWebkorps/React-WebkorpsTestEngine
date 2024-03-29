import React, { useEffect, useState } from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import "../../App.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import Header from "../UI/Header";
import CloseIcon from "@mui/icons-material/Close";
import { filterQuestion } from "../services/contest/contestServices";
import MsgBar from "../auth/base/MsgBar";
import { deleteQuestion } from "../services/contest/contestServices";
import BackButton from "../UI/BackButton";
import Loader from "../candidate/base/Loader";
import { useNavigate } from "react-router-dom";
import { redColor } from "../../alertColors";

const background1 = {
  height: "100%",
  background: ` linear-gradient(
      180deg,
      rgba(24, 135, 201, 0) 0%,
      rgba(24, 135, 201, 0.224167) 40.42%,
      rgba(24, 135, 201, 0.4) 100%
    )`,
};

const whiteContainer = {
  marginTop: "50px",
  height: "650px",
  background: "#f9fafc",
  boxShadow: " 2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "18px",
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
  width: "1120px",
  height: "76px",
  background: "#FFFFFF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  marginTop: "10px",
};

const containerUpper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};
const allQuestion = {
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
const mcqBtn = {
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
const dataText = {
  display: "flex",
  justifyContent: "center",
  fontSize: "20px"
}
const Allavailable = () => {
  const navigate = useNavigate();
  const [allAvailQues, setAllAvailQues] = useState([]);
  const [filterValue, setFilterValue] = useState("All");
  const [msg, setMsg] = useState({
    state: false,
    msg: "",
    color: "",
  });
  const [loader, setloader] = useState(true);
  const handleChange = (e) => {
    setFilterValue(e.target.value);
    setAllAvailQues([]);
  };

  const handleDelete = (id, quesId) => {
    const arr = [`questionForLevel`, quesId];

    setAllAvailQues((val) => {
      return val.filter((e, index) => index !== id);
    });
    try {
      const result = deleteQuestion(arr).then((res) => {
        setMsg({
          state: true,
          msg: "Question Deleted....!",
          color: redColor,
        });
        setTimeout(() => {
          setMsg({
            state: false,
            msg: "",
            color: "",
          });
        }, 1200);
      });
    } catch (error) {if(error.response.status === 403) navigate("/error") }
  };
  useEffect(() => {
    setloader(true);
    const result = filterQuestion(filterValue).then((res) => {
      if (res.message == "success" && res.status == "200") {
        setloader(false);
      }
      setAllAvailQues(res.data);
    });
  }, [filterValue]);

  return (
    <div style={background1}>
      {msg.state && <MsgBar errMsg={msg.msg} color={msg.color} />}
      <Header />
      <BackButton />
      {/* <Grid container sx={{ justifyContent: "center" }}>
        <Grid item mt={5}>
          <Box variant="contained" sx={buttonLevel}>
            All questions
          </Box>
         
        </Grid>
      </Grid> */}
      {/* //my change */}
      <Grid container sx={{ justifyContent: "center" }} mt={5}>
        <Box variant="contained" sx={allQuestion}>
          All question
        </Box>
        <Box sx={mcqBtn} onClick={() => navigate("/allmcq")}>
          MCQ
        </Box>
      </Grid>

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
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={"All"}
                onChange={handleChange}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Level 1"}>Level 1</MenuItem>
                <MenuItem value={"Level 2"}>Level 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item mt={2}>
            {/* <Button variant="contained" sx={buttonEmail}>
              Add questions
            </Button> */}
          </Grid>
        </Grid>
        {/* <Grid>{loader && <Loader />}</Grid> */}
        <Grid container sx={{ maxHeight: "500px", overflow: "auto", justifyContent: "center" }}>
          {loader ? (
            <Loader />
          ) : allAvailQues.length <= 0 ? (
            <Typography align="center" sx={dataText}>No Data</Typography>
          ) : (
            allAvailQues?.map((val, index) => {
              return (
                <Grid container sx={divSelect} key={index}>
                  <Grid item sm={10} sx={scrollDiv}>
                    <Typography sx={divText}>{val?.question}</Typography>
                  </Grid>
                  <Grid item sm={1} mt={1}></Grid>
                  <Grid item sm={1} mt={0} x={{ justifyContent: "end" }}>
                    <IconButton
                      aria-label="add"
                      sx={delBtn}
                      onClick={() => handleDelete(index, val?.questionId)}
                    >
                      <CloseIcon fontSize="x-small" />
                    </IconButton>
                  </Grid>
                </Grid>
              );
            })
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Allavailable;
