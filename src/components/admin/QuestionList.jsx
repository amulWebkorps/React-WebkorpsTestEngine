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
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

import { makeStyles } from "@mui/styles";
import { Box, Container, display } from "@mui/system";
import React from "react";
import Header from "../UI/Header";
import clsx from "clsx";

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`TEST CASE ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

const useStyles = makeStyles({
  container: {
    height: "100%", // So that grids 1 & 4 go all the way down
    minHeight: 150, // Give minimum height to a div
   
  },
  containerTall: {
    minHeight: 250, // This div has higher minimum height
  },
});
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
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
  background: "#FFFFFF",
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
const btn={
    background: '#0057FF',
borderRadius: '8px',
}
const btn1={
    border: '2px solid #0057FF',
borderRadius: '8px',
}
const QuestionList = () => {
  const classes = useStyles();
  return (
    <div style={questionList}>
      <Header />
      <Container sx={topButton}>
        <Paper sx={tpBtn}>
          <Grid container>
            <Grid item>
              <Button sx={qBtn} size="large" variant="contained">
                Questions
              </Button>
            </Grid>
            <Grid item>
              <Button sx={pBtn} size="large" variant="text">
                Participator
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Container sx={mainContainer}>
        <Grid>
          <Card sx={cardBody}>
            <CardContent>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={0.3}>
                  <div className={classes.container} style={sideColumn}></div>
                </Grid>
                <Grid item xs={7} sx={addQues} borderRight={1}>
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
                        fullWidth
                        id="fullWidth"
                        placeholder="Write Problem statement here"
                        mt={5}
                        sx={input}
                      />
                      <br />
                      <br />
                      <Typography sx={label} display="inline">
                        Constraints
                      </Typography>
                      {/* <label style={label}>Constraints</label> */}
                      <TextField
                      sx={input}
                        fullWidth
                        id="fullWidth"
                        placeholder="Write Constraints here"
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
                          <TextField id="fullWidth" placeholder="Input here" sx={input} />
                        </Grid>
                        <Grid item xs={5}>
                          <Typography sx={label} display="inline">
                            Sample Output
                          </Typography>
                          <TextField id="fullWidth" placeholder="Output here" sx={input} />
                        </Grid>
                      </Grid>
                      <hr style={{ marginTop: "20px" }} />

                      <Stack
                        spacing={2}
                        direction="row"
                        justifyContent={"flex-end"}
                        mt={2}
                      >
                        <Button variant="contained" sx={btn}>Add Question</Button>
                        <Button variant="outlined" sx={btn1}>Available Questions</Button>
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
                          mt={5}
                          container
                          direction="row"
                          justifyContent={"space-between"}
                        >
                          <Grid item xs={5}>
                            <Typography sx={label} display="flex">
                              Sample Input
                            </Typography>
                            <TextField
                            sx={input}
                              id="fullWidth"
                              placeholder="Input here"
                            />
                          </Grid>
                          <Grid item xs={5}>
                            <Typography sx={label} display="flex">
                              Sample Output
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
                  <Grid item xs mt={-4}>
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
                            height: 150,
                            bgcolor: "white",
                          }}
                        >
                          <FixedSizeList
                            height={150}
                          
                            itemSize={46}
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
                        <Button variant="contained" sx={btn}>Add</Button>
                        <Button variant="outlined" sx={btn1}>Close</Button>
                      </Stack>
                      </Container>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
      </Container>
    </div>
  );
};

export default QuestionList;
