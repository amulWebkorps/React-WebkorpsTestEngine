import {
  Grid,
  Paper,
  Button,
  Card,
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

import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import React from "react";
import Header from "../UI/Header";
import clsx from "clsx";
import { crossbtn } from "../assests/images";
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
                  <OutlinedInput
                    placeholder="Input"
                    sx={{ height: "30px" }}
                    multiline
                    rows={1}
                    maxRows={10}
                  />
                </FormControl>
                <FormControl
                  sx={{ width: "12ch", height: "5px", marginTop: "5px" }}
                >
                  <OutlinedInput
                    placeholder="Output"
                    sx={{ height: "30px" }}
                    multiline
                    rows={1}
                    maxRows={10}
                  />
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

const sideColumn = {
  background: "#0057FF",
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

const delBtn = {
  position: "absolute",
  marginTop: "8px",
  right: "8%",

  backgroundColor: "#E5E5E5",
  color: "black",
  borderRadius: "50%",
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
  fontSize: "8",
  fontWeight: "600",
  color: "white",
  borderRadius: "6px",
};

const buttonLevel = {
  width: "260px",
  height: "51px",
  background: "#0057ff",
  borderRadius: "18px 18px 18px 18px",
  fontWeight: "700",
  fontSize: "25px",
  lineHeight: "19px",
  textTransform: "none",
  fontFamily: "Raleway",
  fontStyle: "normal",
  paddingTop: "12px",
  paddingLeft: "25px",
  marginTop: "25px",
  color: "#FFFFFF",
};

const levelText = {
  fontFamily: "Raleway",
  fontSize: "34px",
  fontWeight: "600",
  lineHeight: "40px",
  letterSpacing: "0em",
  textAlign: "left",
};

const levelSubHeading = {
  width: "100%",
  height: "89px",
  background: "#F9FAFC",
  borderRadius: "17px 17px 0px 0px",
};

const divText = {
  width: "515px",
  height: "28px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#000000",
  margin: "20px",
};

const scrollDiv = {
  overflowY: "auto",
};

const divSelect = {
  width: "1120px",
  height: "76px",
  background: "#FFFFFF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  marginTop: "10px",
};

const containerUpper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const editQuestion = {
  width: "147px",
  height: "28px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "20px",
  lineHeight: "28px",
  textDecorationLine: "underline",
  paddingTop: "15px",
  color: "#0057ff",
};

const array = [1, 2, 3, 4, 5, 6, 4, 4, 45, 5, 5, 1, 22, 5, 5, 4, 5, 6];

const Level2 = () => {
  const classes = useStyles();
  const handleOnchange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div style={questionList}>
      <Header />
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item>
          <Box variant="contained" sx={buttonLevel}>
            Level2 Questions
          </Box>
        </Grid>
      </Grid>

      <Container sx={mainContainer}>
        <Grid>
          <Card sx={cardBody}>
            <CardContent>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={0.3}>
                  <div className={classes.container} style={sideColumn}></div>
                </Grid>
                <Grid item xs={7} sx={addQues}>
                  <div className={classes.container}>
                    <Grid
                      xs={11}
                      sx={{
                        marginLeft: 3,
                        marginTop: 5,
                      }}
                    >
                      <Typography sx={label} display="inline">
                        Write Problem statement
                      </Typography>
                      {/* <label style={label}>Write Problem statement</label> */}
                      <TextField
                        multiline
                        rows={3}
                        maxRows={10}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <BorderColorIcon sx={{ color: "#0057FF" }} />
                            </InputAdornment>
                          ),
                        }}
                        onChange={handleOnchange}
                        fullWidth
                        id="fullWidth"
                        placeholder="Write Problem statement here"
                        mt={5}
                        sx={input}
                        x
                      />
                      <br />
                      <br />
                      <Typography sx={label} display="inline">
                        Constraints
                      </Typography>
                      {/* <label style={label}>Constraints</label> */}
                      <TextField
                        multiline
                        rows={3}
                        maxRows={10}
                        sx={input}
                        fullWidth
                        id="fullWidth"
                        placeholder="Write Constraints here"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <BorderColorIcon sx={{ color: "#0057FF" }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <br />
                      <br />
                      <Grid
                        container
                        direction="row"
                        justifyContent={"space-between"}
                      >
                        <Grid item xs={5}>
                          <Typography sx={label} display="inline">
                            Sample Input
                          </Typography>
                          <TextField
                            id="fullWidth"
                            placeholder="Input here"
                            multiline
                            rows={3}
                            maxRows={10}
                            sx={input}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="start">
                                  <BorderColorIcon sx={{ color: "#0057FF" }} />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <Typography sx={label} display="inline">
                            Sample Output
                          </Typography>
                          <TextField
                            multiline
                            rows={3}
                            maxRows={10}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="start">
                                  <BorderColorIcon sx={{ color: "#0057FF" }} />
                                </InputAdornment>
                              ),
                            }}
                            id="fullWidth"
                            placeholder="Output here"
                            sx={input}
                          />
                        </Grid>
                      </Grid>
                      <hr style={{ marginTop: "20px" }} />

                      <Stack
                        spacing={2}
                        direction="row"
                        justifyContent={"flex-end"}
                        mt={2}
                      >
                        <Button variant="contained" sx={btn}>
                          Add Question
                        </Button>
                      </Stack>
                    </Grid>
                  </div>
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  xs
                  spacing={0}
                  sx={testCol}
                >
                  <Grid item xs>
                    <div className={classes.container}>
                      <Container>
                        <Grid
                          mt={7}
                          container
                          direction="row"
                          justifyContent={"space-between"}
                        >
                          <Grid item xs={5}>
                            <Typography sx={label} display="flex">
                              Input
                            </Typography>
                            <TextField
                              sx={input}
                              id="fullWidth"
                              placeholder="Input here"
                            />
                          </Grid>
                          <Grid item xs={5}>
                            <Typography sx={label} display="flex">
                              Output
                            </Typography>
                            <TextField
                              sx={input}
                              id="fullWidth"
                              placeholder="Output here"
                            />
                          </Grid>
                        </Grid>
                      </Container>
                    </div>
                  </Grid>
                  <Grid item xs mt={-10}>
                    <div
                      className={clsx(classes.container, classes.containerTall)}
                    >
                      <Container>
                        <Typography sx={label} display="flex">
                          Test case List
                        </Typography>
                        <Grid
                          sx={{
                            width: "100%",
                            height: 180,
                            bgcolor: "white",
                          }}
                        >
                          <FixedSizeList
                            height={180}
                            itemSize={80}
                            itemCount={4}
                            overscanCount={5}
                          >
                            {renderRow}
                          </FixedSizeList>
                        </Grid>
                        <Stack
                          spacing={2}
                          direction="row"
                          justifyContent={"flex-end"}
                          mt={2}
                        >
                          <Button variant="contained" sx={btn}>
                            Add
                          </Button>
                          <Button variant="contained" sx={btn}>
                            Close
                          </Button>
                        </Stack>
                      </Container>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={containerUpper} mt={3}>
          <Grid item sx={levelSubHeading}>
            <Typography sx={levelText} m={2}>
              Available Questions
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ height: "400px", overflow: "auto" }} p={5}>
          {array.map((val) => {
            return (
              <Grid container sx={divSelect}>
                <Grid item sm={9} sx={scrollDiv}>
                  <Typography sx={divText}>
                    write a progrom to make a star
                  </Typography>
                </Grid>
                <Grid item sm={2} mt={1}>
                  <Typography sx={editQuestion}>Edit Questions</Typography>
                </Grid>
                <Grid item sm={1} mt={2} x={{ justifyContent: "end" }}>
                  <img src={crossbtn} alt="cross" />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Level2;
