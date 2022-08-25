import React, { useState } from "react";
import {
  Button,
  Dialog,
  Container,
  Grid,
  Typography,
  InputLabel,
} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { crossbtn } from "../assests/images";
import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { sendMail } from "../services/adminServices";
import Loader from "../auth/base/Loader";

const scrollDiv = {
  overflowY: "auto",
};
const divText = {
  // width: "515px",
  // height: "28px",
  margin: "9px",
  // textAlign: "center",
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
  // height: "76px",
  background: "#FFFFFF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  marginTop: "10px",
  // marginLeft: "100px",
};
const emailContainer = {
  overflowY: "auto",
  height: "250px",
};

const btn = {
  marginTop: "50px",
  justifyContent: "end",
  display: "flex",
};

export default function Model2({
  setAlert,
  open,
  setOpen,
  contestDetails,
  emails,
  sentEmails,
  sent,
  setSent,
}) {
  const [loading, setLoading] = useState(true);
  const [disable, setDisable] = useState(false);
  const [contestId, setContestId] = React.useState();
  
  const handleClose = () => {
    setOpen(false);
    setSent(false);
  };
  const modalBody = {
    background: "#F9FAFC",
    boxShadow: `2px 9px 19px rgba(230, 230, 230, 0.37)`,
    borderRadius: "18px",
    height: `${sent ? "50vh" : "30vh"}`,
    width: "70vh",
  };
  const handleMail = async () => {
    setDisable(true);
    try {
      const result = await sendMail(contestId, emails).then();
      const data = await result.data;
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 1100);
      setOpen(false);
      setDisable(false);
    } catch (error) {
      console.log("errorororr", error);
    }
  };
  const handleChange = (e) => {
    setContestId(e.target.value);
  };

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: modalBody,
        }}
      >
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Button onClick={handleClose}>
            <img src={crossbtn} alt="logo" />
          </Button>
        </Box>

        <DialogContent>
          {sent ? (
            <Container sx={emailContainer}>
              <Grid container>
              {sentEmails.map((val)=>{
               return(
                <Grid container sx={divSelect}>
                  <Grid item sm={9} sx={scrollDiv}>
                    <Typography sx={divText} mt={2.5}>
                     {val}
                    </Typography>
                  </Grid>
                </Grid>
               )
              })}
                
              </Grid>
            </Container>
          ) : (
            <div>
              <DialogContentText>
                <Box sx={{ minWidth: 100 }}>
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
                      onChange={handleChange}
                    >
                      {contestDetails?.map((val, index) => {
                        return (
                          <MenuItem value={val?.contestId}>
                            {val.contestName}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </DialogContentText>
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Box>{disable && <Loader mt={6} ml={12} />}</Box>
                <Box sx={btn}>
                  {disable ? (
                    <Button marginTop={2} variant="contained" disabled>
                      Send
                    </Button>
                  ) : (
                    <Button
                      marginTop={2}
                      variant="contained"
                      onClick={() => handleMail()}
                    >
                      Send{" "}
                    </Button>
                  )}
                </Box>
              </Box>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
