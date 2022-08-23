import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
//import Header from "../UI/Header";
import { background } from "../assests/images";
import { Ellips } from "../assests/images";
import TextInput from "./base/TextInput";
import ContinueButton from "./base/ContinueButton";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { logo } from "../assests/images";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Validation from "./base/Validation";
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
  width: "450px",
  height: "520px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 3,
  position: "absolute",
  marginTop: "-11px",
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
  fontSize: "14px",
  fontWeight: "bold",
  marginLeft: "5px",
  font: "Raleway",
  marginBottom: "10px",
  marginTop: "30px",
  ".star": {
    color: "#0057FF",
  },
};

const pages = {
  display: "flex",
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
  cursor: "pointer",
};

const second = {
  marginLeft: "10px",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "50%",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#747475",
  position: "relative",
  cursor: "pointer",
  ".image": {
    position: "absolute",
    height: "25px",
    width: "25px",
  },
};

const lining = {
  color: "#747475",
  marginTop: "-8px",
};

const Head = {
  fontSize: "32px",
  marginTop: "15px",
  marginBottom: "5px",
  fontWeight: 600,
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

const RegisterOne = ({ setregistercredential }) => {
  const [showAlert, setAlert] = useState(false);

  const navigate = useNavigate();

  const [credential, setcredential] = useState({
    hName: "",
    email: "",
    hNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredential({ ...credential, [name]: value });
    setregistercredential({ ...credential, [name]: value });
  };
  const handleClick = () => {
    if (
      credential.hName === "" ||
      credential.email === "" ||
      credential.hNumber === ""
    ) {
      setAlert(true);
    } else {
      navigate("/password");
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
        <Validation severity={"error"} empty={"please fill all details"} />
      )}
      <Container maxWidth={false} sx={ContainerStyle}>
        <Box sx={MainBox}>
          <Box sx={Boxstyle}>
            <Typography sx={Head}>Register</Typography>
            <Box sx={pages}>
              <Typography sx={first}>1</Typography>
              <Typography sx={lining}>___</Typography>
              <Typography sx={second}>
                <img src={Ellips} className="image" alt="error" />2
              </Typography>
            </Box>
            <Stack>
              <Typography sx={Required}>
                <span className="star">*</span>Required Field
              </Typography>
              <TextInput
                label="Full Name"
                star={"*"}
                onChange={handleChange}
                value={credential.hName}
                name="hName"
                type="text"
              />
              <TextInput
                label="Email Address"
                star={"*"}
                onChange={handleChange}
                value={credential.email}
                name="email"
                type="email"
              />
              <TextInput
                label="Phone Number"
                star={"*"}
                onChange={handleChange}
                value={credential.hNumber}
                name="hNumber"
              />
              {/* <NavLink to="/password" style={{ textDecoration: "none" }}> */}
              {/* <Link
                to={"/password"}
                // state={{ credential: credential }}
                style={{ textDecoration: "none" }}
              > */}
              <ContinueButton name="Continue" onClick={handleClick} />
              {/* </Link> */}

              <Typography sx={footerOne}>
                Have an account?
                <NavLink to="/">
                  {" "}
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

export default RegisterOne;
