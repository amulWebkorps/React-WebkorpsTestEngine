import React from "react";
import { Stack, Alert as Al } from "@mui/material";

const Alert = ({ severity, errMsg , empty }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2} >
      <Al variant="filled" severity={severity} sx={{justifyContent:"center"}}>
        {errMsg} {empty}
      </Al>
    </Stack>
  );
};

export default Alert;
