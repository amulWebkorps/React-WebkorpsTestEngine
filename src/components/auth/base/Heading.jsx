import { Typography } from "@mui/material";
import React from "react";

const Head = {
  fontSize: "32px",
  marginTop: "-5px",
  marginBottom: "35px",
  fontWeight: 600,
};

const Heading = ({ lable }) => {
  return (
    <>
      <Typography sx={Head}>{lable}</Typography>
    </>
  );
};

export default Heading;
