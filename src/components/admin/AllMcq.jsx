import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  Select,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";

import BackButton from "../UI/BackButton";
import Header from "../UI/Header";
import { useNavigate } from "react-router-dom";
import { uploadMcqs } from "../services/contest/mcqService";
import Loader from "../candidate/base/Loader";

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

const containerUpper = {
  display: "flex",
  flexDirection: "row",
  // justifyContent: "center",
};
const levelSubHeading = {
  width: "100%",
  height: "89px",
  background: "#F9FAFC",
  borderRadius: "17px 17px 0px 0px",
};
const levelText = {
  fontFamily: "Raleway",
  fontSize: "34px",
  fontWeight: "600",
  lineHeight: "40px",
  letterSpacing: "0em",
  textAlign: "left",
};
const buttonUploadMCQ = {
  width: "146px",
  fontSize: "8",
  fontWeight: "600",
  color: "white",
  borderRadius: "6px",
  marginRight: "30px",
};

const allQuestion = {
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
const mcqBtn = {
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

const divSelect = {
  width: "1120px",
  height: "76px",
  background: "#FFFFFF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  marginTop: "10px",
};
const scrollDiv = {
  overflow: "auto",
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
const dataText = {
  display: "flex",
  justifyContent: "center",
  fontSize: "20px",
};
function AllMcq() {
  const navigate = useNavigate();
  const [showValidation, setShowValidation] = useState(false);
  const [loader, setloader] = useState(true);
  const [msg, setMsg] = useState({
    state: false,
    msg: "",
    color: "",
  });
  const [mcqQuestion, setMcqQuestion] = useState([]);
  useEffect(() => {
    setloader(false)
  }, [setMcqQuestion]);

  const uploadMcq = async (e) => {
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
      setTimeout(() => {
        setShowValidation(false);
        setMsg({
          errMsg: "",
          color: "",
        });
      }, 1500);
    } else {
      try {
        const result = await uploadMcqs(files[0], "");

        setMcqQuestion(result?.data);
        setShowValidation(true);
        setMsg({
          errMsg: "Question uploaded successfully...!",
          color: "green",
        });
        setTimeout(() => {
          setShowValidation(false);
          setMsg({
            errMsg: "",
            color: "",
          });
        }, 1200);
      } catch (error) {
        setShowValidation(false);
        setMsg({
          errMsg: "",
          color: "",
        });
        console.log("ee", error);
      }
    }
  };
  console.log(mcqQuestion, "dfghjkl;");
  return (
    <>
      <div style={background1}>
        <Header />
        <BackButton />

        <Grid container sx={{ justifyContent: "center" }} mt={5}>
          <Box
            variant="contained"
            sx={allQuestion}
            onClick={() => navigate(-1)}
          >
            All question
          </Box>
          <Box sx={mcqBtn}>MCQ</Box>
        </Grid>

        <Container sx={whiteContainer} fixed>
          <Grid sx={containerUpper}>
            <Grid item sx={levelSubHeading}>
              <Typography sx={levelText} mt={2}>
                All MCQ's
              </Typography>
            </Grid>

            <Grid item mt={2}>
              <Button
                variant="contained"
                component="label"
                sx={buttonUploadMCQ}
                onChange={uploadMcq}
                onClick={(e) => (e.target.value = null)}
              >
                Upload MCQ's
                <input hidden accept="file/*" multiple type="file" />
              </Button>
            </Grid>
          </Grid>
          {/* <Grid>{loader && <Loader />}</Grid> */}
          <Grid container sx={{ maxHeight: "500px", overflow: "auto" }}>
            {loader ? (
              <Loader />
            ) : mcqQuestion.length == 0 ? (
              <Typography align="center" sx={dataText}  ></Typography>
            ) : (
              mcqQuestion?.map((val, index) => {
                return (
                  <Grid container sx={divSelect} key={index}>
                    <Grid item sm={10} sx={scrollDiv}>
                      <Typography sx={divText}>{val.mcqQuestion}</Typography>
                    </Grid>
                    <Grid item sm={1} mt={1}></Grid>
                    <Grid item sm={1} mt={0} x={{ justifyContent: "end" }}>
                      <IconButton aria-label="add" sx={delBtn}>
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
    </>
  );
}

export default AllMcq;
