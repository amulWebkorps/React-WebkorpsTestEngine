import React, { useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

const delBtn1 = {
  position: "absolute",
  top: "-0.5%",
  right: "-0%",
  color: "red",
};
const title = {
  color: "red",
};
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TabAlert({
  warning,
  open,
  setOpen,
  finalSubmit,
  setExit,
  winCount,
}) {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (warning === 4) {
      setExit(false);
      finalSubmit(true);
      setTimeout(() => {
        localStorage.clear();
        navigate("/thanku");
      }, [1000]);
    }
    if (winCount === 4) {
      setExit(false);
      finalSubmit(true);
      setTimeout(() => {
        localStorage.clear();
        navigate("/thanku");
      }, [1000]);
    }
  }, [warning, winCount]);
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          style: { borderRadius: "10px" },
        }}
      >
        <IconButton color="primary" aria-label="add" sx={delBtn1}>
          <CancelIcon onClick={() => handleClose()} />
        </IconButton>
        <DialogTitle sx={title}>Warning</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You are suspected to switch tab {warning} / 3 Time..
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            You are suspected to switch to new Window {winCount} / 3 Time..
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
