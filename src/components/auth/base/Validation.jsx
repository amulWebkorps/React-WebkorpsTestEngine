import React from "react";
import { Stack, Alert as Al } from "@mui/material";

const Validation = ({ severity, empty }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2} >
      <Al variant="filled" severity={severity} sx={{justifyContent:"center"}}>
       {empty}
      </Al>
    </Stack>
  );
};

export default Validation;
