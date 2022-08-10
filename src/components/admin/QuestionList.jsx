import {
  Grid,
  Paper,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  Stack,
  InputAdornment,
  OutlinedInput,
  FormControl,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { FixedSizeList } from "react-window";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { makeStyles } from "@mui/styles";
import { Box, Container, display, fontSize } from "@mui/system";
import React from "react";
import Header from "../UI/Header";
import clsx from "clsx";
import AddedQues from "./AddedQues";
function renderRow(props) {
  const { index, style } = props;
  const testCase = {
    height: "42px",
    minHeight: "10px",
  };

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText
          primary=<Paper sx={testCase} elevation={2}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Container
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <FormControl
                  sx={{ width: "12ch", height: "5px", marginTop: "5px" }}
                >
                  <OutlinedInput placeholder="Input" sx={{ height: "30px" }} />
                </FormControl>
                <FormControl
                  sx={{ width: "12ch", height: "5px", marginTop: "5px" }}
                >
                  <OutlinedInput placeholder="Output" sx={{ height: "30px" }} />
                </FormControl>
                <div>
                  <IconButton aria-label="add" sx={delBtn}>
                    <CloseIcon sx={{ fontSize: "8px" }} />
                  </IconButton>
                </div>
              </Container>
            </Box>
          </Paper>
        />
      </ListItemButton>
    </ListItem>
  );
}

const useStyles = makeStyles({
  container: {
    height: "100%", // So that grids 1 & 4 go all the way down
    minHeight: 180, // Give minimum height to a div
  },
  containerTall: {
    minHeight: 250, // This div has higher minimum height
  },
  noBorder: {
    border: "none",
  },
});
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const sideColumn = {
  background: "#0057FF",
  /* vv */

  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: " 18px 0px 0px 18px",
};
const questionList = {
  height: "100vh",
  background: `linear-gradient(
        180deg,
        rgba(24, 135, 201, 0) 0%,
        rgba(24, 135, 201, 0.224167) 40.42%,
        rgba(24, 135, 201, 0.4) 100%
      )`,
  overflow: "auto",
};

const topButton = {
  display: "flex",
  justifyContent: "center",
};

const delBtn = {
  position: "absolute",
  marginTop: "8px",
  right: "8%",

  backgroundColor: "#E5E5E5",
  color: "black",
  borderRadius: "50%",
};
const tpBtn = {
  marginTop: "20px",
  width: "660px",
  borderRadius: "17px",
};
const qBtn = {
  borderRadius: "18px 0px 0px 18px",
  width: "330px",
  height: "61px",
  background: "#0057FF",
};
const pBtn = {
  width: "330px",
  height: "61px",
  background: "white",
  color: "black",
  borderRadius: "0px 18px 18px 0px",
};
const mainContainer = {
  marginTop: "20px",
  background: "white",
};

const cardBody = {
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "17px",
};
const addQues = {
  background: "#F9FAFC",
  /* vv */
};

const input = {
  borderColor: "none",
  background: "#FFFFFF",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "18px",
  lineHeight: "21px",
};

const testCol = {
  background: "#F9FAFC",
};
const label = {
  fontFamily: "railway",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "21px",
};
const btn = {
  background: "#0057FF",
  borderRadius: "8px",
};
const btn1 = {
  background: "#F9FAFC",
  color: "#0057FF",
  //   border: "2px solid #0057FF",
  borderRadius: "8px",
};
const QuestionList = () => {
  const classes = useStyles();
  const handleOnchange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div style={questionList}>
      <Header />
     
  
      
    </div>
  );
};

export default QuestionList;
