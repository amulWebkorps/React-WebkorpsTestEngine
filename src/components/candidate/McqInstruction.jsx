import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import "../../App.css";
import Header from "../UI/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./base/Loader";
import { startMcqPage } from "../services/candidate";
const background1 = {
  minHeight: "100vh",
  background: ` linear-gradient(
        180deg,
        rgba(24, 135, 201, 0) 0%,
        rgba(24, 135, 201, 0.224167) 40.42%,
        rgba(24, 135, 201, 0.4) 100%
      )`,
  //   overflow:"auto"
};
const selectTechnology = {
  fontWeight: "600",
  fontSize: "25px",
  lineHeight: "45px",
  color: "#000000",
  marginLeft: "29px",
};
const whiteContainer = {
  marginTop: "50px",
  minHeight: "72.5vh",
  background: "#F9FAFC",
  boxShadow: " 2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "18px",
};
const levelText = {
  fontFamily: "Raleway",
  fontSize: "45px",
  fontWeight: "600",
  lineHeight: "40px",
  letterSpacing: "0em",
  textAlign: "left",
  marginLeft: "29px",
  marginTop: "25px",
};
const levelSubHeading = {
  width: "100%",
  height: "89px",
  background: "#F9FAFC",
  borderRadius: "17px 17px 0px 0px",
};
const containerUpper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};
const divSelect = {
  height: "50px",
  marginLeft: "30px",
  display: "flex",
};
const divText = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "350",
  fontSize: "28px",
  lineHeight: "60px",
  color: "#000000",
};
const instructions = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "25px",
  marginLeft: "24px",
  marginTop: "11px",
  color: "#000000",
};
const instructionSubHead = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "25px",
  lineHeight: "39px",
  color: "#000000",
  marginLeft: "29px",
};
const startContest = {
  width: "200px",
  height: "50px",
  bordeRadius: "15.0909px",
  fontweight: "700",
  fontSize: "19px",
  lineHeight: "33px",
  color: "#FFFFFF",
  margin: "20px",
};
const cancelBtn = {
  width: "150px",
  height: "50px",
  fontWeight: "500",
  fontSize: "22px",
  lineHeight: "33px",
  color: "#0057FF",
  margin: "20px",
};
const InstructionData = [
  "Use command line argument for input.",
  "If you change window or tab or reload the page so test will be submited automatically.",
  "Copy and Past would not work.",
  "You select language once.",
  "Program should be dynamic means your code can able to run for any possible test cases.",
  "Once your test time is over code will be submitted automatically. ",
];
function McqInstruction() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLoader, setLoader] = useState(false);
  const [participatorData, setParticipator] = useState(
    location?.state?.data?.data?.student
  );
  const [participatorsContestDetails, setParticipatorsContestDetails] =
    useState();

  const fetchStartContestData = async () => {
    try {
      setLoader(true);
      const result = await startMcqPage();
      setParticipatorsContestDetails(result?.data, "result.data");
    } catch (error) {
      setLoader(false);
      console.log("error");
    }
  };
  if (participatorsContestDetails) {
    setTimeout(() => {
      navigate("/mcqQuestion", {
        state: {
          participatorData,
          participatorsContestDetails,
        },
      });
    }, 1000);
  }
  useEffect(() => {
    window.addEventListener("popstate", (event) => {
      console.log("INSIDE!");
      navigate("/mcqInstruction");
    });
  }, [window, navigate]);

  return (
    <>
      <div style={background1}>
        <Header setShow={true} />
        <Container sx={whiteContainer} fixed>
          <Grid sx={containerUpper}>
            <Grid item sx={levelSubHeading}>
              <Typography sx={levelText} mt={2}>
                Instructions
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item mb={1}>
              <Typography sx={instructionSubHead}>
                Please follow the instructions while giving the test.
              </Typography>
            </Grid>
            <Grid item>
              {InstructionData.map((val, index) => {
                return (
                  <>
                    <Grid container>
                      <Grid item sx={divSelect}>
                        <Typography sx={divText} variant="h1">
                          {`${index + 1}. `}
                        </Typography>
                        <Typography sx={instructions}>{`  ${val}`}</Typography>
                      </Grid>
                    </Grid>
                  </>
                );
              })}
            </Grid>
            <Grid container>
              <Button
                variant="contained"
                sx={startContest}
                onClick={() => {
                  fetchStartContestData();
                }}
              >
                Start Contest
              </Button>
              <Button variant="outlined" sx={cancelBtn}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
export default McqInstruction;
