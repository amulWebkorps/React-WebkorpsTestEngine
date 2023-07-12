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
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Header from "../UI/Header";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { redColor, greenColor } from "../../alertColors";

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

const showIcon = {
  position: "absolute",
  margin: "110px 0px 0px 290px",
};
const hideIcon = {
  position: "absolute",
  margin: "110px 0px 0px 290px",
};

const showIconConfirm = {
  position: "absolute",
  margin: "200px 0px 0px 290px",
};
const hideIconConfirm = {
  position: "absolute",
  margin: "200px 0px 0px 290px",
};

const RegisterStepTwo = ({ registerCredential, SetRegisterCredential }) => {
  const [confirmPassword, setConfirmpassword] = useState("");
  const [seenPassword, setSeenpassword] = useState(false);
  const [seenConfirmPassword, setSeenConfirmpassword] = useState(false);
  const navigate = useNavigate();
  const [showAlert, setAlert] = useState(false);
  const [fillalert, setfillalert] = useState(false);
  const [showalertpassword, setalertpassword] = useState(false);
  const [conditionpassword, setconditionpassword] = useState(false);
  const [showemail, setshowemail] = useState(false);
  const date = new Date();
  const year = date.getFullYear();
  // const [credential, setcredential] = useState({
  //   password: "",
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setcredential({ ...credential, [name]: value });
    SetRegisterCredential({ ...registerCredential, [name]: value });
  };

  const register = async () => {
    if (registerCredential.password === "" || confirmPassword === "") {
      setalertpassword(true);
      setTimeout(() => {
        setalertpassword(false);
      }, 2000);
    } else if (registerCredential.password !== confirmPassword) {
      setfillalert(true);
      setTimeout(() => {
        setfillalert(false);
      }, 2000);
    } else if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#@?&]{8,}$/.test(
        registerCredential.password
      ) === false
    ) {
      setconditionpassword(true);
      setTimeout(() => {
        setconditionpassword(false);
      }, 3000);
    } else if (registerCredential.password === confirmPassword) {
      try {
        const response = await registerAdmin(registerCredential);
        setAlert(true);
        setTimeout(() => {
          SetRegisterCredential([
            {
              hName: "",
              email: "",
              hNumber: "",
              password: "",
            },
          ]);
          navigate("/");
        }, 2000);
      } catch (error) {
        setshowemail(true);
        setTimeout(() => {
          setshowemail(false);
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

  const showPasswordConfirm = () => {
    setSeenConfirmpassword(true);
  };
  const hidePasswordConfirm = () => {
    setSeenConfirmpassword(false);
  };

  return (
    <>
      <Grid container>
        <Header setColor={true} setShow={true} />
      </Grid>

      {showAlert && (
        <MsgBar errMsg={"Admin Register Succesfully......!"} color={greenColor} />
      )}
      {showalertpassword && (
        <MsgBar errMsg={"Please Fill All Details."} color={redColor} />
      )}
      {fillalert && (
        <MsgBar errMsg={"Password Mismatch."} color={redColor} />
      )}
      {showemail && (
        <MsgBar errMsg={"Email Already Registered."} color={redColor} />
      )}
      {conditionpassword && (
        <MsgBar
          errMsg={
            "Minimum Eight Characters, at least One Letter, One Number and One Special Character."
          }
          color={redColor}
        />
      )}
      <Container maxWidth={false} sx={ContainerStyle}>
        <Box sx={MainBox}>
          <Box sx={Boxstyle}>
            <ArrowBackIcon
              sx={{ marginLeft: "-350px", marginTop: "10px" }}
              onClick={() => navigate(-1)}
            />
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
                type={seenPassword ? "text" : "password"}
                onChange={handleChange}
                value={registerCredential.password}
                name="password"
              />
              {registerCredential?.password !== "" &&
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
              <TextInput
                label="Confirm Password"
                star={"*"}
                type={seenConfirmPassword ? "text" : "password"}
                onChange={(e) => setConfirmpassword(e.target.value)}
                value={confirmPassword}
              />
              {confirmPassword !== "" &&
                (seenConfirmPassword ? (
                  <VisibilityIcon
                    sx={showIconConfirm}
                    fontSize="small"
                    onClick={hidePasswordConfirm}
                  />
                ) : (
                  <VisibilityOffIcon
                    sx={hideIconConfirm}
                    fontSize="small"
                    onClick={showPasswordConfirm}
                  />
                ))}

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
        <Typography sx={copyright}>Copyright@webkorps{year}</Typography>
      </Container>
    </>
  );
};

export default RegisterStepTwo;
