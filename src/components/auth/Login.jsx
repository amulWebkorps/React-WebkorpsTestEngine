import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//import Header from "../UI/Header";
import { background } from "../assests/images";
import TextInput from "./base/TextInput";
import Heading from "./base/Heading";
import LoginButton from "./base/LoginButton";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { logo } from "../assests/images";
import { NavLink, useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/adminServices";
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
  "a:-webkit-any-link": {
    cursor: "pointer",
    textDecoration: "none",
  },
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
    marginTop: "3px",
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

const Headers = {
  height: "14vh",
  background: "#121419",
  width: "100%",
  display: "flex",
  flexDirection: "Row",
};

const logoText = {
  height: " 56px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "45px",
  lineHeight: "52.35px",
  color: "#1887C9",
};

const Login = ({ admin }) => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const path = window?.location?.pathname;

  const handleLogin = () => {
    if (path === "/candidate") {
      navigate("/user");
      console.log("-----", credential);
    } else {
      //const response=loginAdmin().then();

      navigate("/dashboard");
      console.log("-----", credential);
    }
  };
  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Grid container>
        <Grid item sx={Headers}>
          <Box ml={2} my={2}>
            <img src={logo} alt="logo" />
          </Box>
          <Box sx={logoText} my={3}>
            WEBKORPS
          </Box>
        </Grid>
      </Grid>
      <Container maxWidth={false} sx={ContainerStyle}>
        <Box sx={MainBox}>
          <Box sx={Boxstyle}>
            <Heading lable="Login" />
            <Stack>
              <TextInput
                label="Email Address"
                name="email"
                onChange={(e) => handleChange(e)}
                value={credential?.email}
              />

              <TextInput
                label="Password"
                name="password"
                type={"password"}
                onChange={(e) => handleChange(e)}
                value={credential?.password}
              />
              {admin && (
                <FormControlLabel
                  control={<Checkbox size="10px" />}
                  label="Remember me"
                  sx={checkboxname}
                />
              )}
              {/* <NavLink to={path==="/candidate"?"/user":"/dashboard"} style={{ textDecoration: "none" }}>
               
              </NavLink> */}
              <LoginButton name="Log in" onClick={handleLogin} />
              {admin && (
                <>
                  <Typography sx={footerOne}>
                    Don't have account?
                    <NavLink to="/register">
                      <Button sx={RegisterButton}>Register</Button>
                    </NavLink>
                  </Typography>
                  <Typography sx={footerTwo}>Forgot Password?</Typography>
                </>
              )}
            </Stack>
          </Box>
        </Box>
        <Typography sx={copyright}>Copyright@webkorps2021</Typography>
      </Container>
    </>
  );
};

export default Login;
