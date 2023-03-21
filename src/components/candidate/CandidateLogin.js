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
import { useDispatch, useSelector } from "react-redux";
import MsgBar from "./base/MsgBar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { TryRounded } from "@mui/icons-material";
import Header from "../UI/Header";
const ContainerStyle = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "noRepeat",
  backgroundSize: "cover",
  position: "relative",
  height: "86.8vh",
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

const showIcon = {
  position: "absolute",
  margin: "126px 0px 0px 290px",
};
const hideIcon = {
  position: "absolute",
  margin: "126px 0px 0px 290px",
};

const CandidateLogin = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showAlert, setAlert] = useState(false);
  const [showMsg, setMsg] = useState(false);
  const [errMsg, setErrorMsg] = useState(false);
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [seenPassword, setSeenpassword] = useState(false);
  const path = window?.location?.pathname;
  const { id } = useParams();
  const date = new Date();
  const year = date.getFullYear();
  const handleLogin = async () => {
    const role = localStorage?.getItem("role");
    setLoading(true);
    if (credential.email === "" || credential.password === "") {
      setAlert(true);
      setLoading(false);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    } else if (role === "student") {
      setErrorMsg(true);
      setTimeout(() => {
        setErrorMsg(false);
      }, 1200);
    } else {
      try {
        const result = await participatorLogin(id, credential);
        localStorage.setItem(
          "contestId",
          result?.data?.data?.student?.contestId
        );
        localStorage.setItem("studentId", result?.data?.data?.student?.id);
        localStorage.setItem("name", result?.data?.data?.student?.name);
        localStorage.setItem("email", result?.data?.data?.student?.email);
        localStorage.setItem("role", "student");
        localStorage.setItem(
          "contestLevel",
          result?.data?.data?.student?.contestLevel
        );
        const token = result?.data?.data?.token;
        localStorage.setItem("token", token);
        setLoading(true);
        setMsg(true);
        localStorage.setItem("login", "true");
        setTimeout(() => {
          const contestLevel = result?.data?.data?.student?.contestLevel;
          console.log(contestLevel, "level");
          if (contestLevel === "level 1") {
            navigate("/mcqInstruction", { state: { data: result.data } });
          } else {
            navigate("/instruction", { state: { data: result.data } });
          }
        }, 1500);
        console.log(result.data, "result");
      } catch (error) {
        console.log("err", error);
        setLoading(false);
        setErrorMsg(true);
        setTimeout(() => {
          setErrorMsg(false);
        }, 2000);
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
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
  };
  return (
    <>
      <Grid container>
        <Header setColor={true} />
        {showAlert && (
          <MsgBar
            empty={"Please fill all Details"}
            color={"Red"}
            errMsg={response}
          />
        )}
      </Grid>
      {showMsg && <MsgBar errMsg={"Login Succesfully...!"} color={"green"} />}
      {errMsg && (
        <MsgBar errMsg={"email and password does not match"} color={"red"} />
      )}
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
              />{" "}
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
            </Stack>
          </Box>
        </Box>
        <Typography sx={copyright}>Copyright@webkorps{year}</Typography>
      </Container>
    </>
  );
};

export default CandidateLogin;
