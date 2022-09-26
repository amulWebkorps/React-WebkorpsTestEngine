import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { logo } from "../assests/images";
import { useNavigate } from "react-router-dom";
import { borderRadius } from "@mui/system";

const Headers = {
  height: "13vh",
  // background: setColor ? "#FDFEFF" : "#121419",
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
  lineHeight: "52px",
  color: "#1887C9",
  width: "85vw",
};
const displayFlex1 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

const logoutButton = {
  color: "white",
  fontWeight: "600",
  cursor: "pointer",
  fontSize: "25px",
  marginLeft: "-50px",
  background: "#0057ff",
  padding: "8px 20px 0px 20px",
  marginBottom: "27px",
  borderRadius: "15px",
};

const Header = ({ setShow, setColor }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Grid container sx={Headers} bgcolor={setColor ? "#121419" : "#FDFEFF"}>
      <Grid item sx={displayFlex1}>
        <Box ml={2} my={2}>
          <img src={logo} alt="logo" />
        </Box>
        <Box mx={0.5} sx={logoText} my={3}>
          Webkorps
        </Box>
        {!setShow && (
          <>
            <Box mt={4} sx={logoutButton} onClick={handleClose}>
              Logout
            </Box>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
