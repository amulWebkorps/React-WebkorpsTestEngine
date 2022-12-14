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
  marginTop: "25px",
  marginBottom: "20px",
  textTransform: "none",
  borderRadius: "6px",
};

const MainButton = ({ name,onClick, isLoading }) => {
  return (
    <>
      <Button variant="contained" onClick={onClick} sx={button} disabled={isLoading}>
        {name}
      </Button>
    </>
  );
};

export default MainButton;
