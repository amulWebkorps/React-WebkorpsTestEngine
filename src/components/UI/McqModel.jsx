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
import React, { useEffect, useState } from "react";
import { crossbtn } from "../assests/images";
import Loader from "../auth/base/Loader";
import { getAllContestList, sendMail } from "../services/adminServices";

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
function McqModel({
  open,
  setOpen,
  sent,
  setSent,
  setIsAlert,
  setMsg,
  emails,
  setAlert,
  setEmails,
  sentEmails,
  loadContestDetails
}) {
  const [disable, setDisable] = useState(false);
  const [contestId, setContestId] = useState();
  const [contestDetails, setContestDetails] = useState(null);
  useEffect(() => {
    const response = getAllContestList().then((res) => {
      setContestDetails(res?.data);
    });
  }, []);

  const handleMail = async () => {
    if (contestId === undefined || contestId === null) {
      setIsAlert(true);
      setMsg({
        errMsg: "Please select contest",
        color: "red",
      });
    } else {
      setDisable(true);
      try {
        const result = await sendMail(contestId, emails);
        setAlert(true);
        setEmails([]);
        setMsg({
          errMsg: "Mail send successfully...!",
          color: "green",
        });
        loadContestDetails();
        setTimeout(() => {
          setAlert(false);
        }, 1100);
        setOpen(false);
        setDisable(false);
      } catch (error) {
        setAlert(true);
        setMsg({
          errMsg: "Mail not send...!",
          color: "red",
        });
        setTimeout(() => {
          setAlert(false);
        }, 1100);
        setOpen(false);
        setDisable(false);
      }
    }
  };
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSent(false);
    }, 500);
  };
  const handleChange = (e) => {
    setContestId(e.target.value);
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
                {sentEmails?.length === 0 ? (
                  <h3 style={{ marginTop: "20px" }}>
                    Sent emails is empty now...
                  </h3>
                ) : (
                  sentEmails?.map((val) => {
                    return (
                      <Grid container sx={divSelect}>
                        <Grid item sm={9} sx={scrollDiv}>
                          <Typography sx={divText} mt={2.5}>
                            {val}
                          </Typography>
                        </Grid>
                      </Grid>
                    );
                  })
                )}
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
                  <Box>{disable && <Loader mt={6} ml={12} />}</Box>
                  <Box sx={btn}>
                    <Button
                      marginTop={2}
                      variant="contained"
                      onClick={() => handleMail()}
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
