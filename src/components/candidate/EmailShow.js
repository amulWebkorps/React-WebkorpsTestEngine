import { Grid } from "@mui/material";
import React,{useEffect,useState} from "react";
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


const background1 = {
  height: "100vh",
  background: ` linear-gradient(
      180deg,
      rgba(24, 135, 201, 0) 0%,
      rgba(24, 135, 201, 0.224167) 40.42%,
      rgba(24, 135, 201, 0.4) 100%
    )`,
};

const whiteContainer = {
  marginTop: "30px",
  height: "800px",
  background: "#f9fafc",
  boxShadow: " 2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "18px",
  paddingBottom:"100px",
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
  
};

const scrollDiv = {
  overflowY: "auto",
};

const emailContainer = {
  overflowY: "auto",
  height: "550px",
};
const buttonEmail={
  fontSize:"8",
  fontWeight: "600",
  color: "white",
  borderRadius: "6px",}

const EmailShow = () => {
  const [mail,setMail] = useState()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

// useEffect(() => {
//   sentMailForParticipator()
//       .then(function (response) {
//         // handle success
//         console.log(response.data,"showall")
//         setMail(response.data);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       });
//   }, []);

  console.log("sent mail", mail)

  return (
    <>
      <Modal2 open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} />
      <div style={background1}>
        <Header/>
        <Container maxWidth="lg" sx={whiteContainer}>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item>
            <Button variant="contained" sx={buttonEmail} onClick={handleClickOpen}>Sent Email</Button>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item justifyContent="center" flexDirection="column">
                  <TextField
                    fullWidth
                    id="standard-bare"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      ),
                    }}
                  />
                  <Grid item textAlign="center " mt={1}>
                    <Button
                      variant="contained"
                      
                      component="label"
                      sx={buttonEmail}
                    >
                      Upload File
                      <input type="file" hidden />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Container sx={emailContainer}>
            <Grid container>
              <Grid container sx={divSelect}>
                <Grid item sm={9} sx={scrollDiv}>
                  <Typography sx={divText} >
                    rajkushwah02hhg@gmail.com
                  </Typography>
                </Grid>
                <Grid item sm={2} mt={1}>
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon color="#0057ff" />}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                  />
                </Grid>
                <Grid item sm={1} mt={2} x={{ justifyContent: "end" }}>
                  <img src={crossbtn} alt="cross" />
                </Grid>
              </Grid>
              <Grid container sx={divSelect}>
                <Grid item sm={9} sx={scrollDiv}>
                  <Typography sx={divText} mt={2.5}>
                    rajkushwah02hhg@gmail.com
                  </Typography>
                </Grid>
                <Grid item sm={2} mt={1}>
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon color="primary" />}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                  />
                </Grid>
                <Grid item sm={1} mt={2} x={{ justifyContent: "end" }}>
                  <img src={crossbtn} alt="cross" />
                </Grid>
              </Grid>
              <Grid container sx={divSelect}>
                <Grid item sm={9} sx={scrollDiv}>
                  <Typography sx={divText} mt={2.5}>
                    rajkushwah02hhg@gmail.com
                  </Typography>
                </Grid>
                <Grid item sm={2} mt={1}>
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon color="primary" />}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                  />
                </Grid>
                <Grid item sm={1} mt={2} x={{ justifyContent: "end" }}>
                  <img src={crossbtn} alt="cross" />
                </Grid>
              </Grid>
              <Grid container sx={divSelect}>
                <Grid item sm={9} sx={scrollDiv}>
                  <Typography sx={divText} mt={2.5}>
                    rajkushwah02hhg@gmail.com
                  </Typography>
                </Grid>
                <Grid item sm={2} mt={1}>
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon color="primary" />}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                  />
                </Grid>
                <Grid item sm={1} mt={2} x={{ justifyContent: "end" }}>
                  <img src={crossbtn} alt="cross" />
                </Grid>
              </Grid>
              <Grid container sx={divSelect}>
                <Grid item sm={9} sx={scrollDiv} >
                  <Typography sx={divText} mt={2.5}>
                    rajkushwah02hhg@gmail.com
                  </Typography>
                </Grid>
                <Grid item sm={2} mt={1}>
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon color="#0057ff" />}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                  />
                </Grid>
                <Grid item sm={1} mt={2} x={{ justifyContent: "end" }}>
                  <img src={crossbtn} alt="cross" />
                </Grid>
              </Grid>
              <Grid container sx={divSelect}>
                <Grid item sm={9} sx={scrollDiv}>
                  <Typography sx={divText} mt={2.5}>
                    rajkushwah02hhg@gmail.com
                  </Typography>
                </Grid>
                <Grid item sm={2} mt={1}>
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon color="#0057ff" />}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                  />
                </Grid>
                <Grid item sm={1} mt={2} x={{ justifyContent: "end" }}>
                  <img src={crossbtn} alt="cross" />
                </Grid>
              </Grid>
              <Grid container sx={divSelect}>
                <Grid item sm={9} sx={scrollDiv}>
                  <Typography sx={divText} mt={2.5}>
                    rajkushwah02hhg@gmail.com
                  </Typography>
                </Grid>
                <Grid item sm={2} mt={1}>
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon color="#0057ff" />}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                  />
                </Grid>
                <Grid item sm={1} mt={2} x={{ justifyContent: "end" }}>
                  <img src={crossbtn} alt="cross" />
                </Grid>
              </Grid>
              <Grid item sx={divSelect}></Grid>
              <Grid item sx={divSelect}></Grid>
            </Grid>
          </Container>
          <Box
            display="flex"
            justifyContent="flex-end"
            mr={12}
            mt={3}
            alignItems="flex-end"
          >
            <Button variant="contained" size="large" sx={buttonEmail}>Email</Button>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default EmailShow;
