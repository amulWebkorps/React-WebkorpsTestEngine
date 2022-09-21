import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import "../../App.css";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Header from "../UI/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { showAllLanguage } from "../services/candidate";
import { startContestPage } from "../services/candidate";
const background1 = {
  height: "100%",
  background: ` linear-gradient(
      180deg,
      rgba(24, 135, 201, 0) 0%,
      rgba(24, 135, 201, 0.224167) 40.42%,
      rgba(24, 135, 201, 0.4) 100%
    )`,
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
  height: "1000px",
  background: "#f9fafc",
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
};

const divText = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "28px",
  lineHeight: "60px",
  color: "#000000",
};
const divTextmain = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "25px",
  marginLeft: "24px",
  marginTop: "-46px",

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
  "If you change window or tab so test will be submited automatically.",
  "Copy and Past would not work.",
  "You select language once.",
  "Program should be dynamic means your code can able to run for any possible test cases.",
  "Once your test time is over code will be submitted automatically.",
];

const Instruction = () => {
  const axios = require("axios").default;
  const navigate = useNavigate();
  const [language, setLanguage] = React.useState("");
  const location = useLocation();
  const [participatorData, setParticipator] = useState(
    location?.state?.data?.data?.student
  );
  const [languages, setLanguages] = useState();
  const [participatorsContestDetails, setParticipatorsContestDetails] =
    useState();
  const [defaultCode, setDefaultCode] = useState();
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  console.log(location, "location getjhbjb");

  useEffect(() => {
    showAllLanguage()
      .then(function (response) {
        // handle success
        console.log(response.data, "showall");
        setLanguages(response?.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", (event) => {
      console.log("INSIDE!");
      navigate('/instruction')
    });
  }, [window, navigate]);

  const dataLan = languages?.filter((lan2) => lan2.language == language);
  useEffect(() => {
    dataLan === undefined ? (
      <div></div>
    ) : (
      setDefaultCode(() => {
        return dataLan[0]?.codeBase;
      })
    );
  }, [language]);

  useEffect(() => {
    window.addEventListener("popstate", (event) => {
      navigate("/instruction");
    });
  }, [window, navigate]);

  const fetchStartContestData = async () => {
    try {
      const result = await startContestPage(language);
      console.log("result", result);
      setParticipatorsContestDetails(result?.data, "result.data");
    } catch (error) {
      console.log("error");
    }
  };

  if (participatorsContestDetails) {
    setTimeout(() => {
      navigate("/user", {
        state: {
          language,
          participatorData,
          languages,
          defaultCode,
          participatorsContestDetails,
        },
      });
    }, 1000);
  }

  return (
    <div style={background1}>
      <Header />
      <Container sx={whiteContainer} fixed>
        <Grid sx={containerUpper}>
          <Grid item sx={levelSubHeading}>
            <Typography sx={levelText} mt={2}>
              Instruction
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
                  <Grid container sx={divSelect}>
                    <Grid item>
                      <Typography sx={divText} variant="h1">
                        {`${index + 1}. `}
                      </Typography>
                      <Typography sx={divTextmain}>{`  ${val}`}</Typography>
                    </Grid>
                  </Grid>
                </>
              );
            })}
          </Grid>
          <Grid container>
            <Typography mt={2} sx={selectTechnology}>
              Select Technology:
            </Typography>

            <Box sx={{ minWidth: 120 }}>
              <FormControl sx={{ m: 2, minWidth: 120 }}>
                <Select
                  value={language}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="C">C</MenuItem>
                  <MenuItem value={"C++"}>C++</MenuItem>
                  <MenuItem value={"Java"}>Java</MenuItem>
                  <MenuItem value={"Python"}>Python</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid container>
            <Button
              variant="contained"
              onClick={() => {
                fetchStartContestData();
              }}
              sx={startContest}
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
  );
};

export default Instruction;
