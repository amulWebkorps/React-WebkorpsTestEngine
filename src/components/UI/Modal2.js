import React, { useState, useEffect } from "react";
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
import { getAllContestList, sendMail } from "../services/adminServices";
import Loader from "../auth/base/Loader";

const scrollDiv = {
  // overflowY: "auto",
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
  overflowX:"auto",
  width: "100%",
  // height: "76px",
  background: "#FFFFFF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  marginTop: "10px",


};
const emailContainer = {
  // overflow: "hidden",
  maxHeight: "340px",

};

const btn = {
  marginTop: "50px",
  justifyContent: "end",
  display: "flex",
};

export default function Model2({
  setIsAlert,
  isAlert,
  setAlert,
  open,
  setOpen,
  emails,
  sentEmails,
  setEmails,
  sent,
  setSent,
  setMsg,
  participatorFilter
}) {
  const [disable, setDisable] = useState(false);
  const [contestId, setContestId] =useState();
  const [contestDetails, setContestDetails]=useState(null);

  useEffect(() => {
   const response=getAllContestList().then((res)=>{
    setContestDetails(res?.data);
   });
  }, [])

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSent(false);
    }, 500);
  };
  const modalBody = {
    background: "#F9FAFC",
    boxShadow: `2px 9px 19px rgba(230, 230, 230, 0.37)`,
    borderRadius: "18px",
    height: `${sent ? "320px" : ""}`,
    width: "550px",
  };
  const handleMail = async () => {
    if(contestId===undefined || contestId===null){
      setIsAlert(true);
      setMsg({
        errMsg:"Please select contest",
        color:"red"
      })
    }else{
      setDisable(true);
      try {
        const result = await sendMail(contestId, emails);
        setAlert(true);
        setEmails([]);
        setMsg({
          errMsg: "Mail send successfully...!",
          color: "green",
        });
        participatorFilter();
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
  const handleChange = (e) => {
    setContestId(e.target.value);
  };
  useEffect(()=>{
    setTimeout(() => {
      setIsAlert(false)
    },2500);
  },[isAlert])  
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
        <DialogContent sx={{  marginBottom:"30px"}}>
          {sent ? (
            <Container sx={emailContainer}>
              <Grid container sx={{marginTop:'-27px'}}>
                {sentEmails?.length === 0 ? (
                  <h3 style={{marginTop:"20px"}}>Sent emails is empty now...</h3>
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
                      Send
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
