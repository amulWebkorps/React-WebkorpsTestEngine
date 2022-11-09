import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Stack, Button, Grid } from "@mui/material";
import { background } from "../assests/images";
import TextInput from "./base/TextInput";
import Heading from "./base/Heading";
import LoginButton from "./base/LoginButton";
import { NavLink, useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/adminServices";
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

const RegisterButton = {
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

const showIcon = {
  position: "absolute",
  margin: "126px 0px 0px 290px",
};

const hideIcon = {
  position: "absolute",
  margin: "126px 0px 0px 290px",
};

const initialState = {
  hName: "",
  email: "",
  hNumber: "",
  password: "",
};

const credInitialField = {
  email: "",
  password: "",
};

const Login = ({ setRegisterCredential }) => {
  const [credential, setCredential] = useState(credInitialField);
  const [showAlert, setAlert] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showMsg, setMsg] = useState(false);
  const [seenPassword, setSeenPassword] = useState(false);
  const navigate = useNavigate();
  const date = new Date();
  const year = date.getFullYear();
  const tokens = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogin = async () => {
    if (credential.email === "" || credential.password === "") {
      setAlert(true);
      setLoading(false);
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
        setShowWarning(true);
        navigate("/");
      }
    }
  };

  const showPassword = () => setSeenPassword(true);

  const hidePassword = () => setSeenPassword(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
  };

  useEffect(() => {
    if (showAlert) setTimeout(() => setAlert(false), 3000);

    if (showWarning) setTimeout(() => setShowWarning(false), 3000);
  }, [showAlert, showWarning]);

  useEffect(() => {
    setRegisterCredential(initialState);
    if (tokens !== null && role !== "student") {
      navigate("/dashboard");
    } else if (role === "student") {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Grid container>
        <Header setColor={true} setShow={true} />
        {showAlert && (
          <MsgBar empty={"Please fill all Detailslll"} color={"Red"} />
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
