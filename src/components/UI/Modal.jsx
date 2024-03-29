import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { color, Container } from "@mui/system";
import { Grid, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { addContest } from "../services/adminServices";
import { getAllContestList } from "../services/adminServices";
import MsgBar from "../auth/base/MsgBar";
import { redColor } from "../../alertColors";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const MenuPropsfortime = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};
const names = ["Level 1", "Level 2"];
const types = ["Question", "MCQ"];
const times = ["30 min", "60 min", "90 min", "120 min"];

function getStyles(name, level, theme) {
  return {};
}

const modalBody = {
  background: "#F9FAFC",
  boxShadow: `2px 9px 19px rgba(230, 230, 230, 0.37)`,
  borderRadius: "18px",
  height: "510px",
};
const title = {
  marginTop: "15px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "30px",
  lineHeight: "35px",

  color: " #000000",
};
const delBtn = {
  position: "absolute",
  top: "3%",
  right: "2%",
  fontSize: "smaller",
  // backgroundColor: '#E5E5E5',
  backgroundColor: "#E5E5E5",
  color: "black",
  borderRadius: "50%",
};
const label = {
  marginBottom: "8px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#000000",
};
const nameInput = {
  marginTop: "5px",
  marginBottom: "15px",
  width: "521px !important",
  height: "38px !important",
  background: "#FFFFFF ",
  border: "1px solid #E5E5E5 !important",
  borderRadius: "2px !important",
};

const description = {
  marginTop: "5px",
  width: "100%",
  height: "81px !important",
  background: "#FFFFFF",
  border: "1px solid #E5E5E5 !important",
  borderRadius: " 2px !important",
};
const secLevel = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "20px",
};
const level = {
  background: "#FFFFFF !important ",
  boxShadow: `0px 4px 14px rgba(0, 0, 0, 0.1)`,
  borderRadius: "8px",
};

const crebtn = {
  background: `#0057FF`,
  marginLeft: "-7px",
  borderRadius: "6px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "21px",
  color: "#FFFFFF",
};
const notbtn = {
  marginLeft: "25px",
  background: "#F9FAFC",
  boxShadow: "4px 9px 19px rgba(230, 230, 230, 0.37)",
  // border:"2px",
  borderRadius: "10px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "21px",
  color: "#0057FF",
};
const Modal = ({
  setAlert,
  open,
  setOpen,
  setContestDetails,
  contestDetails,
  fetchContestData,
}) => {
  const [showMessage, setshowMessage] = useState(false);
  const [inputData, setInputData] = useState({
    contestName: "",
    contestDescription: "",
    contestLevel: "",
    contestTime: "",
    contestType: "",
  });
  const [msg, setMsg] = useState(false)
  const handleClose = () => {
    setshowMessage(false);
    setOpen(false);
    inputData.contestName = "";
    inputData.contestDescription = "";
    inputData.contestLevel = "";
    inputData.contestTime = "";
    inputData.contestType = ""
  };
  const theme = useTheme();

  const handleOnChange = (e) => {
    e.preventDefault();
    setshowMessage(false);
    const { name, value } = e?.target;
    setInputData({
      ...inputData,
      [name]: value,
    });

  };

  const createContest = async () => {
    if (
      inputData.contestName === "" ||
      inputData.contestDescription === "" ||
      inputData.contestLevel === "" ||
      inputData.contestTime === "" ||
      inputData.contestType === ""
    ) {
      setshowMessage(true);
    } else {
      try {
        console.log(inputData, "inputdata");
        const response = await addContest(inputData);
        // setContestDetails([...contestDetails, inputData]);
        fetchContestData();
        if (response) {
          handleClose();
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
          }, 2000);
        }
      } catch (error) {
        const status = error.response.data.status
        if (status === 409) {
          setMsg(true);
          setTimeout(() => {
            setMsg(false);
          }, 3000)
        }
      }
    }
  };
  return (
    <div>
      {showMessage && (
        <MsgBar errMsg={"Please Fill All Details"} color={redColor} />
      )}
      {msg && (
        <MsgBar errMsg={"Contest With Same Name already Exists"} color={redColor} />
      )}
      <Dialog
        open={open}
        onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: modalBody,
        }}
      >
        <IconButton aria-label="add" sx={delBtn} onClick={() => handleClose()}>
          <CloseIcon fontSize="x-small" />
        </IconButton>
        <Container>
          <DialogTitle id="alert-dialog-title" sx={title}>
            {"Create A Contest"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <label style={label}>Name of Contest</label>
                <TextField
                  InputProps={{
                    style: nameInput,
                  }}
                  fullWidth
                  id="fullWidth"
                  onChange={handleOnChange}
                  name="contestName"
                  value={contestDetails?.contestName}
                />
                <label style={label}>Add Description</label>
                <TextField
                  id="outlined-multiline-static"
                  name="contestDescription"
                  onChange={handleOnChange}
                  value={contestDetails?.contestDescription}
                  multiline
                  rows={2}
                  fullWidth
                  InputProps={{
                    style: description,
                  }}
                //   sx={{description}}
                />
                <FormControl sx={{ width: 150, mt: 2 }}>
                  <label style={label}>Level</label>
                  <Select
                    displayEmpty
                    name="contestLevel"
                    value={contestDetails?.contestLevel}
                    onChange={handleOnChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected?.length === 0) {
                        return <em style={secLevel}>Select Level</em>;
                      }
                      return selected;
                    }}
                    MenuProps={MenuProps}
                    sx={level}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value=""></MenuItem>
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, theme)}
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl sx={{ width: 110, mt: 2, ml: 3 }}>
                  <label style={label}>Time</label>
                  <Select
                    displayEmpty
                    name="contestTime"
                    value={contestDetails?.contestTime}
                    onChange={handleOnChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected?.length === 0) {
                        return <em style={secLevel}>Select Time</em>;
                      }
                      return selected;
                    }}
                    MenuProps={MenuPropsfortime}
                    sx={level}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value=""></MenuItem>
                    {times.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        sx={{ justifyContent: "center" }}
                        style={getStyles(name, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ width: 150, mt: 2, ml: 3 }}>
                  <label style={label}>Type</label>
                  <Select
                    displayEmpty
                    name="contestType"
                    value={contestDetails?.contestType}
                    onChange={handleOnChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected?.length === 0) {
                        return <em style={secLevel}>Select Type</em>;
                      }
                      return selected;
                    }}
                    MenuProps={MenuPropsfortime}
                    sx={level}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value=""></MenuItem>
                    {inputData?.contestLevel === "Level 1" ||
                      inputData?.contestLevel === "" ? (
                      types.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem
                        key={"name"}
                        value={"Question"}
                        style={getStyles("name", theme)}
                      >
                        {"Question"}
                      </MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Container>
              <Grid container sx={{ justifyContent: "start" }}>
                <Button
                  variant="contained"
                  sx={crebtn}
                  onClick={createContest}
                >
                  Create
                </Button>
                <Button
                  variant="outlined"
                  sx={notbtn}
                  onClick={() => handleClose()}
                >
                  Not now
                </Button>
              </Grid>
            </Container>
          </DialogActions>
        </Container>
      </Dialog>
    </div>
  );
};

export default Modal;
