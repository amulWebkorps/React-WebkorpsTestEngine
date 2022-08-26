import { FormLabel, TextField } from "@mui/material";
import React from "react";

const FormLables = {
  color: "black",
  fontSize: 14,
  marginBottom: "6px",
  font: "Raleway",
  ".star": {
    color: "#0057FF",
  },
};

const InputField = {
  width: 320,
  marginBottom: "24px",
  borderRadius: "7px",
  opacity: 0.6,
  borderColor: "#0057FF",
  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    height: "10px",
    padding: "15px",
    background: "#C4C4C4",
    color: "black",
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
    },
  },
};

const TextInput = ({ onChange, label, value, name, star, type }) => {
  return (
    <>
      <FormLabel sx={FormLables}>
        {label}
        <span className="star">{star}</span>
      </FormLabel>
      <TextField
        onChange={onChange}
        value={value}
        name={name}
        sx={InputField}
        autoComplete="off"
        type={type}
      />
    </>
  );
};

export default TextInput;
