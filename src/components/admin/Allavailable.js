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
  height: "1000px",
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
  marginTop: "10px",
};

const containerUpper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};



const Allavailable = () => {
  const [allAvailQues, setAllAvailQues] = useState([]);
  const [filterValue, setFilterValue] = useState("All");
  const [msg, setMsg] = useState({
    state: false,
    msg: "",
    color: "",
  });
  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleDelete = (id, quesId) => {
    const arr = [`questionForLevel`, quesId];
    setMsg({
      state: true,
    });
    console.log("----------", id, quesId);
    setAllAvailQues((val) => {
      return val.filter((e, index) => index !== id);
    });
    try {
      const result = deleteQuestion(arr).then((res) => {
        setMsg({
          state: true,
          msg: "Question delete succesfully",
          color: "red",
        });
        setTimeout(() => {
          setMsg({
            state: false,
            msg: "",
            color: "",
          });
        }, 1200);
      });
    } catch (error) {}
  };
  console.log("------", allAvailQues);
  useEffect(() => {
    const result = filterQuestion(filterValue).then((res) => {
      console.log("res", res);
      setAllAvailQues(res.data);
    });
  }, [filterValue]);

  return (
    <div style={background1}>
      {msg.state && <MsgBar errMsg={msg.msg} color={msg.color} />}

      <Header />
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item mt={5}>
          <Box variant="contained" sx={buttonLevel}>
            All questions
          </Box>
        </Grid>
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
        <Grid container sx={{ maxHeight: "500px", overflow: "auto" }}>
          {allAvailQues?.map((val, index) => {
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
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Allavailable;
