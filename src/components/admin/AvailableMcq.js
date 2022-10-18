import React from "react";
import { useRef } from "react";
import { Box, Container } from "@mui/system";
import { Grid, Button, Typography } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function AvailableMcq() {
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
  const whiteContainer = {
    marginTop: "30px",
    maxHeight: "600px",
    background: "#f9fafc",
    boxShadow: " 2px 9px 19px rgba(230, 230, 230, 0.37)",
    borderRadius: "18px",
    paddingBottom: "100px",
  };
  const ref = useRef(null);
  return (
    <div ref={ref}>
      <Container>
        <Grid item textAlign="center " mt={4}>
          <Box sx={test}>
            <DialogTitle id="alert-dialog-title" sx={title}>
              {"Avalaible MCQ’s"}
            </DialogTitle>
            <Button variant="contained" component="label" sx={AddMcq}>
              Add MCQ’s
            </Button>
          </Box>
        </Grid>
      </Container>
      <Container sx={mcqContainer}>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          {[
            "1 Avatars containing simple characters can be created by ",
            "2 Avatars containing simple characters can be created by. ",
            "3 Avatars containing simple characters can be created by. ",
            "4 Avatars containing simple characters can be created by. ",
            "5 Avatars containing simple characters can be created by. ",
            "6 Avatars containing simple characters can be created by. ",
          ].map((val, index) => {
            return (
              <Grid container sx={divSelect}>
                <Grid item sm={10} sx={scrollDiv}>
                  <Typography sx={divText}>{val}</Typography>
                </Grid>
                <Grid item mt={1}>
                  <Checkbox
                    value={val}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon color="#0057ff" />}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                  />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default AvailableMcq;
