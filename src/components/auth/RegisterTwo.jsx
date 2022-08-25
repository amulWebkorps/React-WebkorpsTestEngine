import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Alert from "./base/Alert";
import Stack from "@mui/material/Stack";
// import Header from "../UI/Header";
import CheckIcon from "@mui/icons-material/Check";
import { background } from "../assests/images";
import TextInput from "./base/TextInput";
import Heading from "./base/Heading";
import { Button } from "@mui/material";
import RegisterButton from "./base/RegisterButton";
import Grid from "@mui/material/Grid";
import { logo } from "../assests/images";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { registerAdmin } from "../services/adminServices";

import Validation from "./base/Validation";
import MsgBar from "./base/MsgBar";

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

const RegisterTwo = ({ registercredential, setregistercredential }) => {
  const [confirmPassword, setConfirmpassword] = useState("");

  const navigate = useNavigate();
  const [showAlert, setAlert] = useState(false);
  const [fillalert, setfillalert] = useState(false);
  const [showalertpassword, setalertpassword] = useState(false);
  const [showemail, setshowemail] = useState(false);
  const [credential, setcredential] = useState({
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredential({ ...credential, [name]: value });
    setregistercredential({ ...registercredential, [name]: value });
  };

  const register = async () => {
    if (credential.password === "" || confirmPassword === "") {
      setalertpassword(true);
      setAlert(false);
      setfillalert(false);
    } else if (credential.password !== confirmPassword) {
      setfillalert(true);
      setalertpassword(false);
      setAlert(false);
    } else if (credential.password === confirmPassword) {
      try {
        const response = await registerAdmin(registercredential).then(
          (res) => setAlert(true),
          setalertpassword(false),
          setfillalert(false)
        );
        setTimeout(() => {
          navigate("/");
        }, 3500);
        console.log("------awit-");
        if (response) {
          console.log("------if-");
        }
      } catch (error) {
        setfillalert(false);
        setalertpassword(false);
        setAlert(false);
        setshowemail(true);
        console.log("erro", error);
      }
    } else {
      setalertpassword(true);
      setAlert(false);
    }
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

      {showAlert && (
        <MsgBar errMsg={"Admin Register Succesfully......!"} color={"green"} />
      )}
      {showalertpassword && (
        <MsgBar errMsg={"Please fill all details."} color={"red"} />
      )}
      {fillalert && (
        <MsgBar errMsg={"Please fill correct password."} color={"red"} />
      )}
      {showemail && (
        <MsgBar errMsg={"Email already registered."} color={"red"} />
      )}
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
              <TextInput
                label="Password"
                star={"*"}
                type="password"
                onChange={handleChange}
                value={credential.password}
                name="password"
              />
              <TextInput
                label="Confirm Password"
                star={"*"}
                type="password"
                onChange={(e) => setConfirmpassword(e.target.value)}
                value={confirmPassword}
              />
              {/* <NavLink  style={{ textDecoration: "none" }}>
                
              </NavLink> */}
              <RegisterButton name="Register" onClick={register} />
              <Typography sx={footerOne}>
                Have an account?
                <NavLink to="/">
                  <Button sx={LoginButton}>Log in</Button>
                </NavLink>
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
