import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { deleteContest } from "../services/adminServices";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Popup({
  opens,
  setAlert,
  contest,
  setConfirm,
  setContestDetails,

}) {
  const handleDelete = async () => {
    const result = await deleteContest(contest.contestId).then();
    console.log("ressss", result);
    setContestDetails((val) => {
      return val.filter((val, index) => {
        return index !== contest.id;
      });
    });
    setConfirm(false);
    setAlert(true);
    setTimeout(() => {
        setAlert(false)
    }, 1000);
  };
  const handleClose = () => {
    setConfirm(false);
  };
  console.log("contest id", opens);
  return (
    <div>
      <Dialog
        open={opens}
        TransitionComponent={Transition}
        keepMounted
        onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Contest Name ~ {contest?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are You Sure Want To Delete These Contest
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}
          variant="contained"
          >
            Yes
          </Button>
          <Button onClick={handleClose} color="secondary" variant="contained">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
