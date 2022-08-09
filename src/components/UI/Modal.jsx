import React, { useState } from "react";
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
const names = ["Level 1", "Level 2", "Level 3"];

function getStyles(name,  level, theme) {
  return {
    fontWeight:
       level.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
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
const Modal = ({ handleClickOpen, open, setOpen }) => {
  const [contestDetails, setContestDetails] = useState({
    name: "",
    description: "",
    level: "",
  });
  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  
  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e?.target;
    setContestDetails({
      ...contestDetails,
      [name]: value,
    });
  };

  const createContest = () => {
    handleClose();
    console.log("------0", contestDetails);
  };
  return (
    <div>
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
                  name="name"
                  value={contestDetails?.name}
                />
                <label style={label}>Add Description</label>
                <TextField
                  id="outlined-multiline-static"
                  name="description"
                  onChange={handleOnChange}
                  value={contestDetails?.description}
                  multiline
                  rows={2}
                  fullWidth
                  InputProps={{
                    style: description,
                  }}
                  //   sx={{description}}
                />

                <FormControl sx={{ width: 300, mt: 2 }}>
                  <label style={label}>Level</label>
                  <Select
                    displayEmpty
                    name="level"
                    value={contestDetails?.level}
                    onChange={handleOnChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
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
                        style={getStyles(name,  contestDetails?.level, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
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
                  onClick={() => createContest()}
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
