import React, { useState } from "react";
import { Button,  Dialog, InputLabel } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { crossbtn } from "../assests/images";
import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { sendMail } from "../services/adminServices";
import Loader from "../auth/base/Loader";

const modalBody = {
  background: "#F9FAFC",
  boxShadow: `2px 9px 19px rgba(230, 230, 230, 0.37)`,
  borderRadius: "18px",
  height: "30vh",
  width: "70vh",
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
  showAlert
}) {
  const [loading, setLoading] = useState(true);
  const [disable,setDisable]=useState(false);
  const [contestId, setContestId] = React.useState();
  const handleClose = () => {
    setOpen(false);
  };
  const handleMail = async () => {
    setDisable(true);
    try {
      const result = await sendMail(contestId, emails).then();
      const data = await result.data;
      console.log(data, "response");
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
          <DialogContentText>
            <Box sx={{ minWidth: 100 }}>
              <FormControl fullWidth>
              <InputLabel id="demo-multiple-name-label" sx={{marginTop:"-10px", fontSize:"15px", marginLeft:"-10px"}}>Please Select Contest</InputLabel>
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
            <Box>
              {disable&&<Loader mt={6} ml={12} />}
            </Box>
            <Box sx={btn}>
            {disable?<Button marginTop={2} variant="contained" disabled>Send</Button>:<Button
                marginTop={2}
                variant="contained"
                onClick={() => handleMail()}
              >
                Send{" "}
              </Button>}
              
              
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
