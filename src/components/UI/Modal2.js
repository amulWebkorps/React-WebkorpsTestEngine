import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { crossbtn } from "../assests/images";
import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { sendMail } from "../services/adminServices";

const modalBody = {
  background: "#F9FAFC",
  boxShadow: `2px 9px 19px rgba(230, 230, 230, 0.37)`,
  borderRadius: "18px",
  height: "30vh",
  width:"70vh",
};

const btn={
  marginTop:"50px",
  justifyContent:"end",
  display:"flex"
  
}

export default function Model2({ handleClickOpen, open, setOpen, contestDetails,emails }) {
  console.log('email',emails)
  const [contestId,setContestId]=React.useState();
  const handleClose = () => {
    setOpen(false);
  };
  const handleMail=async()=>{
    const result=await sendMail(contestId,emails).then();
    const data=await result.data
    console.log(data,"response")
  }
  const handleChange=(e)=>{
    setContestId(e.target.value)
  }

  return (
    <div>
      <Dialog open={open}   aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: modalBody,
        }} >
      
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
        
          <Button onClick={handleClose}>

            <img src={crossbtn} alt="logo" />
          </Button>
        </Box>

        <DialogContent>
          <DialogContentText>
            <Box sx={{ minWidth: 120 }} >
              <FormControl fullWidth >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={10}
                  
                  onChange={handleChange}
                >
                {contestDetails?.map((val,index)=>{
                return(
                  <MenuItem value={val?.contestId}
                  
                  >{val.contestName}</MenuItem>
                )
                  
                })}
              
                </Select>
              </FormControl>
            </Box>
            
          </DialogContentText>
          <Box  sx={btn}>
          <Button marginTop={2} variant="contained" onClick={()=>handleMail()}>Send </Button>
          </Box>
         
        </DialogContent>
      </Dialog>
    </div>
  );
}
