import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { crossbtn } from "../assests/images";
import Loader from "../auth/base/Loader";

const emailContainer = {
  overflowY: "auto",
  maxHeight: "340px",
};

const scrollDiv = {
  overflowY: "auto",
};
const divText = {
  margin: "9px",

  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "20px",
  lineHeight: "28px",
  color: "#000000",
  marginLeft: "20px",
};
const divSelect = {
  width: "1000h",
  background: "#FFFFFF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  marginTop: "10px",
};
const modalBody = {
  background: "#F9FAFC",
  boxShadow: `2px 9px 19px rgba(230, 230, 230, 0.37)`,
  borderRadius: "18px",
  height: "50vh",
  width: "70vh",
};
const btn = {
  marginTop: "50px",
  justifyContent: "end",
  display: "flex",
};
function McqModel({ open, setOpen, sent, setSent }) {
  const [disable, setDisable] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: modalBody,
        }}
      >
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Button>
            <img src={crossbtn} onClick={handleClose} alt="logo" />
          </Button>
        </Box>
        <DialogContent>
          {sent ? (
            <Container sx={emailContainer}>
              <Grid container>
                {[
                  "chandan.r@webkorps.com",
                  "chandan.r@webkorps.com",
                  "chandan.r@webkorps.com",
                  "chandan.r@webkorps.com",
                  "chandan.r@webkorps.com",
                  "chandan.r@webkorps.com",
                  "chandan.r@webkorps.com",
                ].map((val,index) => {
                  return (
                    <Grid container sx={divSelect} key={index}>
                      <Grid item sm={9} sx={scrollDiv}>
                        <Typography sx={divText} mt={2.5}>
                          {val}
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          ) : (
            <div>
              <DialogContentText>
                <Box sx={{ minWidth: 50 }}>
                  <FormControl fullWidth>
                    <InputLabel
                      id="demo-multiple-name-label"
                      sx={{
                        marginTop: "-10px",
                        fontSize: "15px",
                        marginLeft: "-10px",
                      }}
                    >
                      Please Select Contest
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue={10}
                    >
                      {["aaa", "bbb"].map((val, index) => {
                        return <MenuItem value={val}>{val}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                  <Box sx={btn}>
                    <Button
                      marginTop={2}
                      variant="contained"
                      // onClick={() => handleMail()}
                    >
                      Send
                    </Button>
                  </Box>
                </Box>
              </DialogContentText>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default McqModel;


