import {
  Paper,
  Typography,
  Grid,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import All from "./All";
import React,{useState} from "react";

const heading = {
  height: "89px",
  background: "#F9FAFC",
  display:"flex",
justifyContent:"space-between",
  overFlow: "auto",
};
const headText = {
  marginLeft: 2,
  fontStyle: "normal",
  fontWeight: " 600",
  fontSize: "34px",
  lineHeight: "40px",
};
const ques = {
  display: "flex",
  height: "70px",
  background: "#FFFFFF",
  /* vv */

  boxShadow: " 2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
};
const delBtn = {
    top:"29%",
  height: "30px",
  width: "30px",
  fontSize: "smaller",
  // backgroundColor: '#E5E5E5',
  backgroundColor: "#E5E5E5",
  color: "black",
  borderRadius: "50%",
};

const quesText = {
    width:"70%",
  fontFamily: "railway",
  paddingTop: 3,
  marginLeft: 2,
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "24px",
  lineHeight: "28px",
  color: "#000000",
};
const edit={
    paddingTop:"2%",
    width:"24%",
   
fontFamily: 'Raleway',
fontStyle: 'normal',
fontWeight: 300,
fontSize: '24px',
lineHeight: '28px',
textDecorationLine: 'underline',

color: '#0057FF',
}

const card = {
  background: "#F9FAFC",
  height: "466px",
  overflowY: "auto",
};

const btn = {
  fontSize: "8",
  fontWeight: "600",
  color: "white",
  borderRadius: "6px",
  width: "200px",
};

const AddedQues = () => {
  const [showq, setShowQ]=useState(false);

  return (
    <>
      <Paper sx={heading}>
      <div>
      <Typography sx={headText}>
          Contest Contain Following
          <br />
          Questions:
        </Typography>
      </div>        
        <div>  <Button variant="contained" sx={btn}  onClick={()=>setShowQ(true)}>available Question</Button></div>  
      </Paper>
      <CardContent sx={card}>
        <Grid container direction="row" flexDirection={"column"}>
          <Grid item mt={2}>
            <Paper sx={ques}>
              <Typography sx={quesText}>
                lorem ipsum lorem ipsum lorem ipsum lorem....
              </Typography>
              <Typography component="span" sx={edit}>Edit Question</Typography>
              <IconButton aria-label="add" sx={delBtn}>
                <CloseIcon fontSize="x-small" />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item mt={2}>
            <Paper sx={ques}>
              <Typography sx={quesText}>
                lorem ipsum lorem ipsum lorem ipsum lorem....
              </Typography>
              <Typography component="span" sx={edit}>Edit Question</Typography>
              <IconButton aria-label="add" sx={delBtn}>
                <CloseIcon fontSize="x-small" />
              </IconButton>
            </Paper>
          </Grid><Grid item mt={2}>
            <Paper sx={ques}>
              <Typography sx={quesText}>
                lorem ipsum lorem ipsum lorem ipsum lorem....
              </Typography>
              <Typography component="span" sx={edit}>Edit Question</Typography>
              <IconButton aria-label="add" sx={delBtn}>
                <CloseIcon fontSize="x-small" />
              </IconButton>
            </Paper>
          </Grid><Grid item mt={2}>
            <Paper sx={ques}>
              <Typography sx={quesText}>
                lorem ipsum lorem ipsum lorem ipsum lorem....
              </Typography>
              <Typography component="span" sx={edit}>Edit Question</Typography>
              <IconButton aria-label="add" sx={delBtn}>
                <CloseIcon fontSize="x-small" />
              </IconButton>
            </Paper>
          </Grid><Grid item mt={2}>
            <Paper sx={ques}>
              <Typography sx={quesText}>
                lorem ipsum lorem ipsum lorem ipsum lorem....
              </Typography>
              <Typography component="span" sx={edit}>Edit Question</Typography>
              <IconButton aria-label="add" sx={delBtn}>
                <CloseIcon fontSize="x-small" />
              </IconButton>
            </Paper>
          </Grid><Grid item mt={2}>
            <Paper sx={ques}>
              <Typography sx={quesText}>
                lorem ipsum lorem ipsum lorem ipsum lorem....
              </Typography>
              <Typography component="span" sx={edit}>Edit Question</Typography>
              <IconButton aria-label="add" sx={delBtn}>
                <CloseIcon fontSize="x-small" />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
      {showq &&
        <All/>}
    </>
  );
};

export default AddedQues;
