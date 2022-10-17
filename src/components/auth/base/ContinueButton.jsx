import React from "react";
import { Button } from "@mui/material";

const button = {
  width: "160px",
  background: "#0057FF",
  height: "45px",
  fontSize: 18,
  fontWeight: 600,
  color: "white",
  marginLeft: "82px",
  marginTop: "5px",
  marginBottom: "15px",
  textTransform: "none",
  borderRadius: "6px",
};

const ContinueButton = ({name , onClick}) => {
  return (
    <>
      <Button variant="contained" sx={button} onClick={onClick}>
        {name}
      </Button>
    </>
  );
};

export default ContinueButton;
