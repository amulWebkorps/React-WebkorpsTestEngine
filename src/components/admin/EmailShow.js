import { Grid, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
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
import { getParticipator } from "../services/mail/particiaptiorMail";
import Loader from "../auth/base/Loader";
import { deletestudent } from "../services/mail/particiaptiorMail";
import BackButton from "../UI/BackButton";

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
  width: "100%",
  height: "66px",
  background: "#FFFFFF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "14px",
  marginTop: "10px",
  marginLeft: "100px",
  justifyContent: "space-between",
};
const delBtn = {
  marginTop: "4px !important",
  width: "30px !important",
  fontSize: "smaller",

  backgroundColor: "#E5E5E5",
  color: "black",
  borderRadius: "50%",
};

const divText = {
  width: "80%",
  height: "28px",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#000000",
  marginLeft: "20px",
  marginTop: "20px",
};

const scrollDiv = {
  overflowY: "auto",
  width: "80%",
};

const emailContainer = {
  overflowY: "auto",
  height: "360px",
};

const EmailShow = () => {
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = useState({
    errMsg: "",
    color: "",
  });
  const [emails, setEmails] = useState([]);
  const [sentEmails, setSentEmails] = useState([]);
  const [uploadEmail, setUploadEmail] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [sent, setSent] = useState(false);
  const [upload, setUpload] = useState({
    alert: false,
    loader: false,
  });
  const [showAlert, setAlert] = useState(false);
  const handleClickOpen = () => {
    if (emails.length <= 0) {
      setUpload({
        alert: true,
        loader: false,
      });
      setMsg({
        errMsg: "Please select participator...!",
        color: "red",
      });
      setTimeout(() => {
        setUpload({
          alert: false,
          loader: false,
        });
      }, 1200);
    } else {
      setOpen(true);
    }
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
    setUpload({
      alert: true,
      loader: false,
    });
    try {
      const result = await deletestudent(mail);
      setMsg({
        errMsg: "Participator deleted Successfully...!",
        color: "red",
      });
      setTimeout(() => {
        setUpload({
          alert: false,
          loader: false,
        });
      }, 1200);
      getParticipatorData();
      setUploadEmail((val) => {
        return val.filter((id) => id !== mail);
      });
    } catch (error) {
      setUpload({
        alert: false,
        loader: false,
      });
    }
  };

  const handleSentMail = async () => {
    setSent(true);
    const result = await sentMail();
    setSentEmails(result?.data);
    setOpen(true);
  };
  useEffect(() => {
    getParticipatorData();
  }, [showAlert]);
  const getParticipatorData = async () => {
    try {
      const res = await getParticipator();
      setUploadEmail(res?.data);
      setFilteredResults(res?.data);
    } catch (error) {}
  };

  const handleFileSelect = (event) => {
    const { files } = event.target;
    setUpload({
      alert: true,
      loader: true,
    });
    try {
      const result = uploadParticipator(files[0]).then((res) => {
        const response = res;
        setUploadEmail(response?.data);
        setMsg({
          errMsg: "Participator Uploaded Successfully...!",
          color: "green",
        });
        getParticipatorData();
        if (response?.data?.length === 0) {
          setMsg({
            errMsg: "Participator is already uploaded...!",
            color: "#EE9A4D",
          });
        }
        setTimeout(() => {
          setUpload({
            alert: false,
            loader: false,
          });
        }, 1500);
      });
    } catch (error) {
      setUpload({
        alert: false,
        loader: false,
      });
      console.log("---------", error);
    }
  };

  // useEffect(() => {
  //   setUploadEmail((val) => {
  //     console.log("pppp", val);
  //     return val.filter((data) => data !== "");
  //   });

  // }, [uploadEmail]);
  const handleOnChange = (e) => {
    setSearchString(e.target.value);
    if (searchString !== "") {
      const filteredData = uploadEmail?.filter((item) => {
        return Object?.values(item)
          ?.join("")
          ?.toLowerCase()
          ?.includes(searchString?.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(uploadEmail);
    }
  };
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
        setMsg={setMsg}
        sentEmails={sentEmails}
        showAlert={showAlert}
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        emails={emails}
        setEmails={setEmails}
        sent={sent}
        setSent={setSent}
      />
      {showAlert || upload.alert ? (
        <MsgBar errMsg={msg.errMsg} color={msg.color} />
      ) : (
        <></>
      )}

      <div style={background1}>
        <Header />
        <BackButton />
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
                      <SearchIcon disabled />
                    </IconButton>
                    <InputBase
                      placeholder="Search emails"
                      sx={searchField}
                      color="black"
                      value={searchString}
                      onChange={handleOnChange}
                    />
                  </Box>
                  <Grid item textAlign="center " mt={1}>
                    <Box sx={{ display: "flex" }}>
                      {upload.loader && <Loader />}
                      <Button
                        variant="contained"
                        component="label"
                        sx={buttonEmail}
                        onChange={handleFileSelect}
                        disabled={upload?.loader}
                      >
                        Upload File
                        <input type="file" hidden />
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Container sx={emailContainer}>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              {uploadEmail?.length <= 0 || filteredResults?.length <= 0 ? (
                <h1>No data </h1>
              ) : searchString?.length > 1 ? (
                filteredResults.map((val, index) => {
                  return (
                    <Grid key={`${index}-${val}`} container sx={divSelect}>
                      s
                      <Grid item sm={10} sx={scrollDiv}>
                        <Typography sx={divText}>{val}</Typography>
                      </Grid>
                      <Grid item mt={1}>
                        <Checkbox
                          // checked={true}
                          value={val}
                          onChange={handleChange}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<CheckCircleIcon color="#0057ff" />}
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                        />
                      </Grid>
                      <Grid item sm={1} mt={2} x={{ justifyContent: "end" }}>
                        <IconButton
                          aria-label="add"
                          sx={delBtn}
                          onClick={(e) => handleDelete(val)}
                        >
                          <CloseIcon fontSize="x-small" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  );
                })
              ) : (
                uploadEmail?.map((val, index) => {
                  return (
                    <Grid key={`${index}-${val}`} container sx={divSelect}>
                      <Grid item sm={10} sx={scrollDiv}>
                        <Typography sx={divText}>{val}</Typography>
                      </Grid>
                      <Grid item mt={1}>
                        <Checkbox
                          value={val}
                          onChange={handleChange}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<CheckCircleIcon color="#0057ff" />}
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                        />
                      </Grid>
                      <Grid item sm={1} mt={2} x={{ justifyContent: "end" }}>
                        <IconButton
                          aria-label="add"
                          sx={delBtn}
                          onClick={(e) => handleDelete(val)}
                        >
                          <CloseIcon fontSize="x-small" />
                        </IconButton>
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
