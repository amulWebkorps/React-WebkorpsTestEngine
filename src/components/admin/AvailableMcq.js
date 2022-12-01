import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Box, Container } from "@mui/system";
import { Grid, Button, Typography } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { addSelectiveMcq } from "../services/contest/mcqService";
import Loader from "../candidate/base/Loader";

function AvailableMcq({
  avaiableMcqs,
  contestId,
  loader,
  loadContestDetails,
  setAlert,
  setMsg,
  setshowselectMcq,
  setAvaiableMcqs,
}) {
  const AddMcq = {
    width: "141px",
    height: "39px",
  };
  const title = {
    marginTop: "15px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "30px",
    lineHeight: "35px",

    color: " ##F9FAFC",
  };
  const mcqContainer = {
    marginTop: "17px",
    overflowY: "auto",
    height: "377px",
  };
  const divSelect = {
    width: "100%",
    height: "76px",
    background: "#FFFFFF",
    boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
    borderRadius: "14px",
    marginTop: "10px",
    // marginLeft: "100px",
    justifyContent: "space-between",
  };
  const scrollDiv = {
    overflowY: "auto",
    width: "80%",
  };
  const divText = {
    width: "80%",
    height: "28px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#000000",
    marginLeft: "20px",
    marginTop: "20px",
  };
  const test = {
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
  };
  const dataText = {
    display: "flex",
    justifyContent: "center",
    fontSize: "20px",
  };

  const ref = useRef(null);
  const [mcqArr, setMcqArr] = useState([]);

  const handleMcq = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setMcqArr([...mcqArr, value]);
    } else {
      setMcqArr((val) => {
        return val.filter((index) => index !== value);
      });
    }
  };

  const addSelectiveMcqs = async () => {
    const arr = {
      contestId: [contestId],
      mcqIds: mcqArr,
    };
    if (mcqArr.length <= 0) {
      setshowselectMcq(true);
      setMsg({
        errMsg: "Please select a question...!",
        color: "blue",
      });
      setTimeout(() => {
        setshowselectMcq(false);
      }, 1200);
    } else {
      try {
        const result = await addSelectiveMcq(arr).then((res) => {
          loadContestDetails();

          setAlert(true);
          setMsg({
            state: true,
            errMsg: "Mcq Add succesfully",
            color: "Green",
          });
          setTimeout(() => {
            setAlert(false);
            setMsg({
              state: false,
              errMsg: "",
              color: "",
            });
          }, 1200);
          setAvaiableMcqs([]);
        });
      } catch (error) {
        console.log("question err", error);
      }
    }
  };

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={ref}>
      <Container ref={ref}>
        <Grid item textAlign="center " mt={4}>
          <Box sx={test}>
            <DialogTitle id="alert-dialog-title" sx={title}>
              {"Avalaible MCQ’s"}
            </DialogTitle>
            <Button
              variant="contained"
              component="label"
              sx={AddMcq}
              onClick={() => addSelectiveMcqs()}
            >
              Add MCQ’s
            </Button>
          </Box>
        </Grid>
      </Container>
      <Container sx={mcqContainer}>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          {loader ? (
            <Loader />
          ) : avaiableMcqs.length <= 0 ? (
            <Typography sx={dataText}> No Data</Typography>
          ) : (
            avaiableMcqs?.map((val, index) => {
              return (
                <Grid container sx={divSelect} key={index}>
                  <Grid item sm={10} sx={scrollDiv}>
                    <Typography sx={divText}>{val?.mcqQuestion}</Typography>
                  </Grid>
                  <Grid item mt={1}>
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon color="#0057ff" />}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                      value={val?.mcqId}
                      onChange={handleMcq}
                    />
                  </Grid>
                </Grid>
              );
            })
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default AvailableMcq;
