import { FormLabel, TextField } from "@mui/material";
import React from "react";

const FormLables = {
  color: "black",
  fontSize: 13,
  marginBottom: "6px",
};

const InputField = {
  width: 320,
  marginBottom: "24px",
  borderRadius: "6px",
  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    height: "10px",
    padding: "15px",
    background: "#C4C4C4",
  },
};

const TextInput = ({ onChange, label, value, name }) => {
  return (
    <>
      <FormLabel sx={FormLables}>{label}</FormLabel>
      <TextField
        onChange={onChange}
        value={value}
        name={name}
        sx={InputField}
      />
    </>
  );
};

export default TextInput;
