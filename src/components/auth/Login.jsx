import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Header from "../UI/Header";
import { background } from "../assests/images";
import TextInput from "./base/TextInput";
import Heading from "./base/Heading";
import LoginButton from "./base/LoginButton";
import { Button } from "@mui/material";

const ContainerStyle = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "noRepeat",
  backgroundSize: "cover",
  position: "relative",
  height: "86vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const MainBox = {
  position: "absolute",
  height: "100%",
  width: "100%",
  background: `rgba(3, 3, 3, 0.7)`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Boxstyle = {
  width: "430px",
  height: "480px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 3,
  position: "absolute",
};

const footerOne = {
  color: "#616166",
  fontSize: 14,
  marginLeft: "65px",
};

const footerTwo = {
  color: "#616166",
  fontSize: 14,
  marginLeft: "105px",
};

const RegisterButton = {
  fontSize: 14,
  fontWeight: 600,
  color: "#0057FF",
  textTransform: "none",
};

const checkboxname = {
  ".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root": {
    marginTop: "-13px",
  },
  ".css-ahj2mt-MuiTypography-root": {
    fontSize: "13px",
    fontWeight: "100",
    marginTop: "-10px",
  },
};

const copyright = {
  color: "white",
  textAlign: "center",
  fontSize: "15px",
  fontWeight: "600",
  position: "absolute",
  bottom: "0",
  transform: `translate(-50%, -50%)`,
  left: "50%",
};
const Login = () => {
  return (
    <>
      <Header />
      <Container maxWidth={false} sx={ContainerStyle}>
        <Box sx={MainBox}>
          <Box sx={Boxstyle}>
            <Heading lable="Login" />
            <Stack>
              <TextInput label="Email Address" name="email" />

              <TextInput label="Password" name="password" />
              <FormControlLabel
                control={<Checkbox size="10px" />}
                label="Remember me"
                sx={checkboxname}
              />
              <LoginButton name="Log in" />
              <Typography sx={footerOne}>
                Don't have account?
                <Button sx={RegisterButton}>Register</Button>
              </Typography>
              <Typography sx={footerTwo}>Forgot Password?</Typography>
            </Stack>
          </Box>
        </Box>
        <Typography sx={copyright}>Copyright@webkorps2021</Typography>
      </Container>
    </>
  );
};

export default Login;
