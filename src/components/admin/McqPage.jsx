import React, { useRef } from "react";
import Header from "../UI/Header";
import BackButton from "../UI/BackButton";
import { Box, Container } from "@mui/system";
import { Grid, Button, Typography } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import AvailableMcq from "./AvailableMcq";
import { useLocation, useNavigate } from "react-router-dom";
import { uploadMcqs } from "../services/contest/mcqService";
import { deleteMcq } from "../services/contest/mcqService";
import { useEffect } from "react";
import { getContestDetail } from "../services/adminServices";
import Loader from "../candidate/base/Loader";
import MsgBar from "../auth/base/MsgBar";

const background1 = {
  height: "100vh",
  background: `linear-gradient(
      180deg,
      rgba(24, 135, 201, 0) 0%,
      rgba(24, 135, 201, 0.224167) 40.42%,
      rgba(24, 135, 201, 0.4) 100%
    )`,
  overflow: "auto",
};
const Participator = {
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
const MCQBox = {
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
const topButton = {
  display: "flex",
  justifyContent: "center",
};
const whiteContainer = {
  marginTop: "30px",
  maxHeight: "1200px",
  background: "#f9fafc",
  boxShadow: " 2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "18px",
  paddingBottom: "100px",
};
const buttonUploadMCQ = {
  fontSize: "8",
  fontWeight: "600",
  color: "white",
  borderRadius: "6px",
  marginRight: "30px",
};
const buttonAvalaible = {
  fontSize: "8",
  fontWeight: "600",
  color: "white",
  borderRadius: "6px",
  marginRight: "50px",
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
const delBtn = {
  marginTop: "4px !important",
  width: "30px !important",
  fontSize: "smaller",

  backgroundColor: "#E5E5E5",
  color: "black",
  borderRadius: "50%",
};
const noData = {
  display: "flex",
  justifyContent: "center",
  fontSize: "20px",
};

function McqPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMcq, setShowMcq] = useState(false);
  const ref = useRef(null);
  const [loader, setloader] = useState(true);
  const [showSelectMcq, setshowselectMcq] = useState(false);
  const [showAlert, setAlert] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [mcqQuestion, setMcqQuestion] = useState([]);
  const [avaiableMcqs, setAvaiableMcqs] = useState([]);

  const [msg, setMsg] = useState({
    errMsg: "",
    color: "",
  });

  const [contestData, setContestData] = useState(
    location?.state?.result?.data?.contest
  );

  const scrollBottom = () => {
    setShowMcq(true);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        const result = await uploadMcqs(files[0], contestData?.contestId);
        loadContestDetails();
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

  const handleDelete = async (contestId, mcqId) => {
    const arr = [contestId, mcqId];
    setloader(true);
    try {
      const result = await deleteMcq(arr).then((res) => {
        loadContestDetails();
        setAlert(true);
        setMsg({
          state: true,
          errMsg: "Question delete succesfully",
          color: "red",
        });
        setTimeout(() => {
          setAlert(false);
          setMsg({
            state: false,
            errMsg: "",
            color: "",
          });
        }, 1200);
      });
    } catch (error) {}
    setloader(false);
  };

  const loadContestDetails = async () => {
    try {
      const result = await getContestDetail(
        contestData?.contestId,
        contestData?.contestType
      );
      setMcqQuestion(result?.data?.contestMCQDetail);
      setAvaiableMcqs(result?.data?.totalAvailableMCQ);
      setloader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadContestDetails();
  }, []);

  return (
    <div style={background1}>
      <Header />
      <BackButton />
      <Container sx={topButton}>
        {showAlert || showValidation || showSelectMcq ? (
          <MsgBar errMsg={msg.errMsg} color={msg.color} />
        ) : (
          <></>
        )}

        <Grid container sx={{ justifyContent: "center" }} mt={3}>
          <Box sx={MCQBox}>MCQ</Box>
          <Box
            sx={Participator}
            onClick={() =>
              navigate("/mcqParticipator", { state: location?.state })
            }
          >
            Participators
          </Box>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={whiteContainer}>
        <Grid container>
          <Grid item textAlign="center " mt={4} style={{ marginLeft: "auto" }}>
            <Box sx={{ display: "flex" }}>
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
              <Button
                variant="contained"
                component="label"
                sx={buttonAvalaible}
                onClick={() => scrollBottom()}
              >
                Avalaible MCQ's
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Container>
          <DialogTitle id="alert-dialog-title" sx={title}>
            {"Added MCQ's"}
          </DialogTitle>
        </Container>
        <Container sx={mcqContainer}>
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            {loader ? (
              <Loader />
            ) : mcqQuestion.length == 0 ? (
              <Typography sx={noData}>No Data</Typography>
            ) : (
              mcqQuestion?.map((val, index) => {
                return (
                  <Grid container sx={divSelect} key={index}>
                    <Grid item sm={10} sx={scrollDiv}>
                      <Typography sx={divText}>{val.mcqQuestion}</Typography>
                    </Grid>

                    <Grid item sm={1} mt={2} sx={{ justifyContent: "end" }}>
                      <IconButton
                        aria-label="add"
                        sx={delBtn}
                        onClick={(e) =>
                          handleDelete(contestData?.contestId, val?.mcqId)
                        }
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

        {showMcq && (
          <AvailableMcq
            ref={ref}
            avaiableMcqs={avaiableMcqs}
            setAvaiableMcqs={setAvaiableMcqs}
            contestId={contestData?.contestId}
            loader={loader}
            loadContestDetails={loadContestDetails}
            setAlert={setAlert}
            setMsg={setMsg}
            setshowselectMcq={setshowselectMcq}
          />
        )}
      </Container>
    </div>
  );
}

export default McqPage;
