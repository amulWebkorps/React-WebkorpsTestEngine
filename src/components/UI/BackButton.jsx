import React from "react";
import KeyboardBackspaceTwoToneIcon from "@mui/icons-material/KeyboardBackspaceTwoTone";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();

  const goback = () => {
    if (window.location.pathname === "/dashboard") {
      navigate("/dashboard");
    } else {
      navigate(-1);
    }
  };
  return (
    <Button variant="text" onClick={goback}>
      <KeyboardBackspaceTwoToneIcon /> Back
    </Button>
  );
};

export default BackButton;
