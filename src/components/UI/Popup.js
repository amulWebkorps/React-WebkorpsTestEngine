import * as React from "react";
import {Button,IconButton} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { deleteContest } from "../services/adminServices";
import CancelIcon from "@mui/icons-material/Cancel";

const delBtn1 = {
  position: "absolute",
  top: "-0.5%",
  right: "-0%",
  color: "primary",
};
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Popup({
  opens,
  setBar,
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
    setBar(true);
    setTimeout(() => {
        setBar(false)
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
        PaperProps={{
          style: {borderRadius:"10px"},
        }}
      >
        <IconButton
                          color="primary"
                          aria-label="add"
                          sx={delBtn1}
                        >
                          <CancelIcon
                            onClick={() =>
                              handleClose()
                            }
                          />
                          </IconButton>
        <DialogTitle>Contest Name ~ {contest?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are You Sure To Delete These Contest
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}
          variant="contained"
          >
            Yes
          </Button>
          <Button onClick={handleClose} color="primary" variant="outlined">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
