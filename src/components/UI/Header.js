import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { logo } from "../assests/images";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";



const Headers = {
  height: "13vh",
  background: "#FDFEFF",
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
  width:"85vw",
};
const displayFlex1 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
const headerc={
  display:"flex",
  
}

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
   const navigate = useNavigate(); 
  return (
      <Grid container sx={headerc}>
        <Grid item sx={displayFlex1}>
          <Box ml={2} my={2} >
            <img src={logo} alt="logo" />
          </Box>
          <Box mx={0.5} sx={logoText} my={3} >
            Webkorps
          </Box>
        </Grid>
        
      </Grid>
    
  );
};

export default Header;
