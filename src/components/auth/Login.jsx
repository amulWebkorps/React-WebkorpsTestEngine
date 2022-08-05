import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import Header from "../UI/Header";
import { background } from "../assests/images";
const Login = () => {
  const ContainerStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    position: "relative",
    minHeight: "100vh",
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const Boxstyle = {
    width: 350,
    height: 470,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    position: "absolute",
    marginTop: -14,
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

  const Heading = {
    fontSize: 28,
    marginTop:5,
    marginBottom: 1,
    fontWeight: 600,
  };

  const FormLables = {
    marginTop: "5px",
    color: "black",
    fontSize: 12,
  };
  const FormLables1 = {
    marginTop: "40px !important",
    color: "black",
    fontSize: 12,
  };

  const InputField = {
    height: 35,
    width: 290,
    marginTop: "5px",
  };

  const button = {
    width: "8vw",
    background: "#0057FF",
    height: "5vh",
    fontSize: 17,
    fontWeight: 600,
  };

  const footer = {
    color: "#616166",
    fontSize: 14,
  };

  const RegisterButton = {
    fontSize: 14,
    fontWeight: 600,
  };

  return (
    <>
      <Header />
      <Container sx={ContainerStyle}>
        <Box sx={MainBox}>
          <Box sx={Boxstyle}>
            <Typography sx={Heading} margin={2}>
              Login
            </Typography>
            <Stack spacing={2}>
              <FormLabel sx={FormLables}>Email Address</FormLabel>
              <TextField sx={InputField} />
              <FormLabel sx={FormLables1}>Password</FormLabel>
              <TextField sx={InputField} />
              <FormControlLabel
                control={<Checkbox />}
                label="Remember me"
          
              />
              <Button variant="contained" type="submit" sx={button}>
                Log in
              </Button>
              <Typography sx={footer}>
                Don't have account?
                <Button sx={RegisterButton}>Register</Button>
              </Typography> 
              <Typography sx={footer}>Forgot Password</Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
