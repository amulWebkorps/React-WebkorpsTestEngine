import React from "react";
import { Grid,Card,CardActionArea, CardMedia,Fab,CardContent } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const createContest = {
    marginTop: "40px",
    width: "220px",
    maxHeight: "211px",
    borderRadius: "11px",
  };
  const addButton = {
    padding: "15px",
    marginTop: "30px",
    width: "84px",
    height: "84px",
    marginLeft: "68px",
    marginBottom: "13px",
    backgroundColor: "#2196F3",
  };

const cardBody = {
    height: "120vh",
    background: `linear-gradient(
      180deg,
      rgba(24, 135, 201, 0) 0%,
      rgba(24, 135, 201, 0.224167) 40.42%,
      rgba(24, 135, 201, 0.4) 100%
    )`,
    overflow: "auto",
    backgroundColor: "#F8F7F7",
  };
  const contestText = {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    color: "#3D3D3D",
  };
  const months = {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "14px",
  };
const CreateContest = ({handleClickOpen}) => {
  return (
    <Grid>
      <Card sx={createContest}>
        <CardActionArea>
          <CardMedia sx={{ paddingBottom: "16px" }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={addButton}
              onClick={() => handleClickOpen()}
            >
              <AddIcon fontSize="large" />
            </Fab>
          </CardMedia>
          <CardContent sx={cardBody}>
            <br />
            <h4 style={contestText}>create contest</h4>

            <p style={months}>add Description</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CreateContest;
