import { Grid, InputBase } from "@mui/material";
import React, { useState } from "react";
import { Container, Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import "../../App.css";
import { crossbtn } from "../assests/images";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Modal2 from "../UI/Modal2";
import Header from "../UI/Header";
import { useLocation } from "react-router-dom";
import MsgBar from "../auth/base/MsgBar";
import { sentMail, uploadParticipator } from "../services/adminServices";
import { ContactSupportOutlined } from "@mui/icons-material";
import Loader from "../auth/base/Loader";
import { deletestudent } from "../services/mail/particiaptiorMail";

const background1 = {
  height: "100%",
  background: ` linear-gradient(
      180deg,
      rgba(24, 135, 201, 0) 0%,
      rgba(24, 135, 201, 0.224167) 40.42%,
      rgba(24, 135, 201, 0.4) 100%
    )`,
};
const innerSearch = {
  display: "flex",
  height: "40px",
  width: "212px",
};

const searchIcon = {
  background: "#F1F1F1",
  borderRadius: `15px 0px 0px 15px`,
  color: "#0057FF",
};

const searchField = {
  background: "#F1F1F1",
  opacity: 0.5,
  borderRadius: `0px 15px 15px 0px`,
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "16px",
  color: "#000000",
};

const whiteContainer = {
  marginTop: "30px",
  height: "82vh",
  background: "#f9fafc",
  boxShadow: " 2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "18px",
  paddingBottom: "100px",
};

const divSelect = {
  width: "1000h",
  height: "76px",
  background: "#FFFFFF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  marginTop: "10px",
  marginLeft: "100px",
};

const divText = {
  width: "515px",
  height: "28px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#000000",
  marginLeft: "20px",
  marginTop: "25px",
};

const scrollDiv = {
  overflowY: "auto",
};

const emailContainer = {
  overflowY: "auto",
  height: "350px",
};

const EmailShow = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const [contestDetails, setContestDetails] = useState(location?.state?.data);
  const [emails, setEmails] = useState([]);
  const [delAlert,setDelAlert]=useState(false);
  const [sentEmails, setSentEmails] = useState([]);
  const [uploadEmail, setUploadEmail] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [sent, setSent] = useState(false);
  const [upload, setUpload] = useState({
    alert: false,
    loader: false,
  });
  const [showAlert, setAlert] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setEmails([...emails, value]);
    } else {
      setEmails((val) => {
        return val.filter((mail) => mail !== value);
      });
    }
  };

  const handleDelete = async (mail) => {
    setDelAlert(true);
    try {
      const result = await deletestudent(mail).then();
      setTimeout(() => {
        setDelAlert(false)
      }, 1200);
      setUploadEmail((val) => {
        return val.filter((id) => id !== mail);
      });
      console.log("respisssss", result.data);
    } catch (error) {
      console.log("errrrrrrrrrrrr", error);
    }
  };
  const handleSentMail = async () => {
    setSent(true);
    const result = await sentMail().then();
    setSentEmails(result?.data);
    setOpen(true);
  };
  const handleFileSelect = (event) => {
    setUpload({
      alert: true,
      loader: true,
    });
    try {
      const result = uploadParticipator(event.target.files[0]).then((res) => {
        const response = res?.data;
        setUploadEmail(response);
        if (response === []) {
          alert();
        }
        setTimeout(() => {
          setUpload({
            alert: false,
            loader: false,
          });
        }, 1000);
      });

      console.log("------response", result);
    } catch (error) {
      console.log("---------", error);
    }
  };
  const handleOnChange = (e) => {
    setSearchString(e.target.value);
    setUploadEmail([]);
  };

  const handleSearch = () => {
    setUploadEmail((val) => {
      return val.filter((element) => {
        if (element.includes(searchString)) {
          return true;
        }
      });
    });
    const matches = uploadEmail.filter((element) => {
      if (element.includes(searchString)) {
        return true;
      }
    });
  };
  console.log("macthes", uploadEmail.length);

  const buttonEmail = {
    fontSize: "8",
    fontWeight: "600",
    color: "white",
    marginLeft: "10px",
    borderRadius: "6px",
  };

  return (
    <>
      <Modal2
        setAlert={setAlert}
        sentEmails={sentEmails}
        showAlert={showAlert}
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        contestDetails={contestDetails}
        emails={emails}
        sent={sent}
        setSent={setSent}
      />
      {showAlert || upload.alert ? (

        <MsgBar
          errMsg={
           ( showAlert
              ? "Mail send successfully....!"
              : "Upload participator successfully...!")
          }
          color={"green"}
        />
      ) : (
        <></>
      )}
      {delAlert&&
        <MsgBar
          errMsg={"Student deleted successfully.....!"
          }
          color={"red"}
        />
      
      }
      <div style={background1}>
        <Header />
        <Container maxWidth="lg" sx={whiteContainer}>
          <Grid
            container
            sx={{ justifyContent: "space-between", paddingTop: "21px" }}
          >
            <Grid item>
              <Button
                variant="contained"
                sx={buttonEmail}
                onClick={handleSentMail}
              >
                Sent Email
              </Button>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item justifyContent="center" flexDirection="column">
                  <Box sx={innerSearch}>
                    <IconButton type="submit" sx={searchIcon}>
                      <SearchIcon onClick={handleSearch} />
                    </IconButton>
                    <InputBase
                      placeholder="Unique ID or Name"
                      sx={searchField}
                      onChange={handleOnChange}
                    />
                  </Box>
                  <Grid item textAlign="center " mt={1}>
                    <Box sx={{ display: "flex" }}>
                      {upload.loader && <Loader />}
                      {upload.loader ? (
                        <Button
                          variant="contained"
                          component="label"
                          sx={buttonEmail}
                          disabled
                        >
                          Upload File
                          <input type="file" hidden />
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          component="label"
                          sx={buttonEmail}
                          onChange={handleFileSelect}
                        >
                          Upload File
                          <input type="file" hidden />
                        </Button>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Container sx={emailContainer}>
            <Grid container>
              {uploadEmail.length === 0 ? (
                <h1>No participator found</h1>
              ) : (
                uploadEmail?.map((val) => {
                  return (
                    <Grid container sx={divSelect}>
                      <Grid item sm={9} sx={scrollDiv}>
                        <Typography sx={divText}>{val}</Typography>
                      </Grid>
                      <Grid item sm={2} mt={1}>
                        <Checkbox
                          value={val}
                          onChange={handleChange}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<CheckCircleIcon color="#0057ff" />}
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                        />
                      </Grid>
                      <Grid item sm={1} mt={2} x={{ justifyContent: "end" }}>
                        <img
                          onClick={() => handleDelete(val)}
                          src={crossbtn}
                          alt="cross"
                        />
                      </Grid>
                    </Grid>
                  );
                })
              )}
            </Grid>
          </Container>
          <Box
            display="flex"
            justifyContent="flex-end"
            mr={12}
            mt={3}
            alignItems="flex-end"
          >
            <Button
              variant="contained"
              size="large"
              sx={buttonEmail}
              onClick={handleClickOpen}
            >
              Email
            </Button>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default EmailShow;
