import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Header from "../UI/Header";
import { background } from "../assests/images";
import TextInput from "./base/TextInput";
import Heading from "./base/Heading";
import { Button } from "@mui/material";
import RegisterButton from "./base/RegisterButton";

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

const LoginButton = {
  fontSize: 14,
  fontWeight: 600,
  color: "#0057FF",
  textTransform: "none",
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

const Required = {
  fontSize: "13px",
  fontWeight: "bold",
  marginLeft: "5px",
  font: "Raleway",
  marginBottom: "25px",
  marginTop: "30px",
  ".star": {
    color: "#0057FF",
  },
};

const pages = {
  display: "flex",
  marginTop: "-25px",
};
const first = {
  height: "25px",
  width: "25px",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "50%",
  backgroundColor: "#014EE1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
};

const second = {
  height: "25px",
  width: "25px",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "50%",
  backgroundColor: "#014EE1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
};

const lining = {
  color: "#747475",
  marginTop: "-7px",
};
const RegisterTwo = () => {
  return (
    <>
      <Header />
      <Container maxWidth={false} sx={ContainerStyle}>
        <Box sx={MainBox}>
          <Box sx={Boxstyle}>
            <Heading lable="Register" />
            <Box sx={pages}>
              <Typography sx={first}>1</Typography>
              <Typography sx={lining}>___</Typography>
              <Typography sx={second}>2</Typography>
            </Box>
            <Stack>
              <Typography sx={Required}>
                <span className="star">*</span>Required Field
              </Typography>
              <TextInput label="Password" star={"*"} />
              <TextInput label="Confirm Password" star={"*"} />
              <RegisterButton name="Register" />
              <Typography sx={footerOne}>
                Have an account?
                <Button sx={LoginButton}>Log in</Button>
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Typography sx={copyright}>Copyright@webkorps2021</Typography>
      </Container>
    </>
  );
};

export default RegisterTwo;
