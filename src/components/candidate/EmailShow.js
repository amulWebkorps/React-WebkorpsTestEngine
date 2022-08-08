import { Grid } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { Typography } from "@mui/material";
import "../../App.css";
import { crossbtn } from "../assests/images";



const background1 = {
  height: "100vh",
  background: ` linear-gradient(
      180deg,
      rgba(24, 135, 201, 0) 0%,
      rgba(24, 135, 201, 0.224167) 40.42%,
      rgba(24, 135, 201, 0.4) 100%
    )`,
};

const whiteContainer = {
  marginTop: "30px",
  height: "96vh",
  background: "#f9fafc",
  boxShadow: " 2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "18px",
};

const buttonTest = {
  width: "120px",
  height: "40px",
  background: "#0057ff",
  borderRadius: "8px",
  color: "white",
  fontweight: "bold",
  margin: "10px",
  border: "1px solid #0057ff",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "19px",
};

const divSelect = {
  width: "100vh",
  height: "76px",
  background: "#FFFFFF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  marginTop: "10px",
  marginLeft: "100px",
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
  overflowY: "scroll",
};





const EmailShow = () => {
  return (
    <>
      <div style={background1}>
        <Container maxWidth="lg" sx={whiteContainer}>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <button style={buttonTest}> sent Email</button>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item justifyContent="center" flexDirection="column">
                  <TextField
                    fullWidth
                    id="standard-bare"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      ),
                    }}
                  />
                  <Grid item textAlign="center " mt={1}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        background: "#0057ff",
                      }}
                      component="label"
                    >
                      Upload File
                      <input type="file" hidden />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid container sx={divSelect}>
              <Grid item sm={8} sx={scrollDiv}>
                <Typography sx={divText}>
                  sdfgghjikomjnhbgbhnjymikjhgwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                  wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwws
                  sssssssssssssssssssss
                </Typography>
              </Grid>
              <Grid item sm={2}>
                <div>
              
                <div className="round">
                  <input
                    type="checkbox"
                    id="checkbox4"
                    name="color"
                    value="checkbox4"
                  />
                  <label for="checkbox4"></label>
                </div>
                </div>
              </Grid>
              <Grid item sm={1} mt={2} x={{ justifyContent: "end" }}>
              <img src={crossbtn} alt="cross" />
               
              </Grid>
            </Grid>
            <Grid item sx={divSelect}></Grid>
            <Grid item sx={divSelect}></Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default EmailShow;
