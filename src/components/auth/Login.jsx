import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from "@mui/material";
import { background } from "../assests/images";
import TextInput from "./base/TextInput";
import Heading from "./base/Heading";
import LoginButton from "./base/LoginButton";
import { logo } from "../assests/images";
import { NavLink, useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/adminServices";
import Loader from "./base/Loader";
import MsgBar from "./base/MsgBar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Header from "../UI/Header";
const ContainerStyle = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "noRepeat",
  backgroundSize: "cover",
  position: "relative",
  height: "87vh",
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

const showIcon = {
  position: "absolute",
  margin: "126px 0px 0px 290px",
};
const hideIcon = {
  position: "absolute",
  margin: "126px 0px 0px 290px",
};

const Login = ({ SetRegisterCredential }) => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showAlert, setAlert] = useState(false);
  const [showWarning, setShowwarning] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showMsg, setMsg] = useState(false);
  const [seenPassword, setSeenpassword] = useState(false);
  const date = new Date();
  const year = date.getFullYear();

  const handleLogin = async () => {
    if (credential.email === "" || credential.password === "") {
      setAlert(true);
      setLoading(false);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    } else {
      try {
        const result = await loginAdmin(credential);
        setLoading(true);
        setMsg(true);
        const token = result?.data?.data;
        localStorage.setItem("token", token);
        localStorage.setItem("role", "admin");
        setTimeout(() => {
          navigate("/dashboard", { state: { data: result.data } });
        }, 1500);
      } catch (error) {
        setLoading(false);
        setShowwarning(true);
        setTimeout(() => {
          setShowwarning(false);
        }, 3000);
        navigate("/");
      }
    }
  };

  const showPassword = () => {
    setSeenpassword(true);
  };

  const hidePassword = () => {
    setSeenpassword(false);
  };

  useEffect(() => {
    setAlert(false);
  }, [credential]);

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const tokens = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {
    SetRegisterCredential({
      hName: "",
      email: "",
      hNumber: "",
      password: "",
    });
    if (tokens != null && role != "student") {
      navigate("/dashboard");
    } else if (role === "student") {
      navigate("/");
    }
  }, []);
  console.log("---dd", SetRegisterCredential);
  return (
    <>
      <Grid container>
        <Header setColor={true} setShow={true} />
        {showAlert && (
          <MsgBar empty={"Please fill all Details"} color={"Red"} />
        )}
        {showWarning && (
          <MsgBar color={"Red"} errMsg={"email and password does not match"} />
        )}
      </Grid>
      {showMsg && <MsgBar errMsg={"Login Succesfully...!"} color={"green"} />}

      <Container maxWidth={false} sx={ContainerStyle}>
        <Box sx={MainBox}>
          <Box sx={Boxstyle}>
            <Heading lable="Login" />
            {/* {loading && <Loader />} */}

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
                type={seenPassword ? "text" : "password"}
                onChange={(e) => handleChange(e)}
                value={credential?.password}
              ></TextInput>
              {credential?.password !== "" &&
                (seenPassword ? (
                  <VisibilityIcon
                    sx={showIcon}
                    onClick={hidePassword}
                    fontSize="small"
                  />
                ) : (
                  <VisibilityOffIcon
                    sx={hideIcon}
                    onClick={showPassword}
                    fontSize="small"
                  />
                ))}
              {/* <FormControlLabel
                control={<Checkbox size="10px" />}
                label="Remember me"
                sx={checkboxname}
              /> */}
              <LoginButton
                name="Log in"
                onClick={handleLogin}
                isLoading={isLoading}
              />
              <>
                <Typography sx={footerOne}>
                  Don't have account?
                  <NavLink to="/register">
                    <Button sx={RegisterButton}>Register</Button>
                  </NavLink>
                </Typography>
                {/* <Typography sx={footerTwo}>Forgot Password?</Typography> */}
              </>
            </Stack>
          </Box>
        </Box>
        <Typography sx={copyright}>Copyright@webkorps{year}</Typography>
      </Container>
    </>
  );
};

export default Login;
