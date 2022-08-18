import React from "react";
import { Grid, Typography } from "@mui/material";
import { Container} from "@mui/system";
import { Button } from "@mui/material";
import "../../App.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { crossbtn } from "../assests/images";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box } from "@mui/system";
import Header from "../UI/Header";

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
  width: "515px",
  height: "28px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#000000",
  marginLeft: "20px",
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

const array = [1, 2, 3, 4, 5,6,4,4,45,5,5,1,22,5,5,4,5,6,];

const Allavailable = () => {
  return (
    <div style={background1}>
      <Header/>
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
                defaultValue={1}
              >
                <MenuItem value={1}>All</MenuItem>
                <MenuItem value={2}>Level1</MenuItem>
                <MenuItem value={3}>Level2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item mt={2}>
            <Button variant="contained" sx={buttonEmail}>
              Add questions
            </Button>
          </Grid>
        </Grid>
        <Grid container sx={{height: '800px' , overflow: 'auto'}}>
          {array.map((val) => {
            return (
              <Grid container sx={divSelect}>
                <Grid item sm={10} sx={scrollDiv}>
                  <Typography sx={divText}>
                    write a progrom to make a star
                  </Typography>
                </Grid>
                <Grid item sm={1} mt={1}>
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon color="#0057ff" />}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                  />
                </Grid>
                <Grid item sm={1} mt={2} x={{ justifyContent: "end" }}>
                  <img src={crossbtn} alt="cross" />
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