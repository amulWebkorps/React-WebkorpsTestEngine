import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { background } from "../assests/images";
import TextInput from "./base/TextInput";
import Heading from "./base/Heading";
import LoginButton from "./base/LoginButton";
import Grid from "@mui/material/Grid";
import { logo } from "../assests/images";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { participatorLogin } from "../services/candidate";
import Loader from "./base/Loader";
import MsgBar from "./base/MsgBar";
import axios from "axios";
import { TryRounded } from "@mui/icons-material";
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

const CandidateLogin = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showAlert, setAlert] = useState(false);
  const [showMsg, setMsg] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState(false);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const path = window?.location?.pathname;
  const { id } = useParams();

  //   useEffect(() => {
  //     let login = localStorage.getItem("login");
  //     if (!login) {
  //       navigate("/");
  //     }
  //   }, []);

  const handleLogin = async () => {
    setLoading(true);
    if (credential.email === "" || credential.password === "") {
      setAlert(true);
      setLoading(false);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    } else {
      try {
        const result = await participatorLogin(id, credential).then();
        const token = result?.data?.token;
        localStorage.setItem("token",token);
        setLoading(true);
        setMsg(true);
        setTimeout(() => {
          navigate("/instruction", { state: { data: result.data } });
        }, 1500);
        console.log(result.data,"result")
      } catch (error) {
        setLoading(false);
        setErrorMsg(true);
        setTimeout(() => {
          setErrorMsg(false);
        }, 2000);
      }
    }
  };

  useEffect(() => {
    setAlert(false);
  }, [credential]);

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
        {showAlert && (
          <MsgBar
            empty={"Please fill all Details"}
            color={"Red"}
            errMsg={response}
          />
        )}
      </Grid>
      {showMsg && <MsgBar errMsg={"Login Succesfully...!"} color={"green"} />}
      {ErrorMsg && (
        <MsgBar errMsg={"Please fill correct details"} color={"red"} />
      )}
      <Container maxWidth={false} sx={ContainerStyle}>
        <Box sx={MainBox}>
          <Box sx={Boxstyle}>
            <Heading lable="Login" />
            {loading && <Loader />}
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
              <LoginButton name="Log in" onClick={handleLogin} />
            </Stack>
          </Box>
        </Box>
        <Typography sx={copyright}>Copyright@webkorps2021</Typography>
      </Container>
    </>
  );
};

export default CandidateLogin;
