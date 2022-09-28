import { Grid } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

const MainBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
  background: `linear-gradient(
    180deg,
    rgba(24, 135, 201, 0) 0%,
    rgba(24, 135, 201, 0.224167) 40.42%,
    rgba(24, 135, 201, 0.4) 100%
  )`,
};

const text = {
  fontSize: "200px",
  fontWight: 600,
  color: "#1887C9",
  height: "27vh",
};

const textData = {
  fontSize: "50px",
  fontWight: 500,
  color: "#1887C9",
  height: "27vh",
  marginTop: "40px",
};

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  //   componentDidCatch(error, errorInfo) {
  //     this.setState({ hasError: true })
  //     // You can also log the error to an error reporting service
  //     // logErrorToMyService(error, errorInfo);
  //   }

  render() {
    return this.state.hasError ? (
      <Box sx={MainBox}>
        <Typography sx={text}>Error</Typography>
        <Typography sx={textData}>
          Oops, something went wrong. Please try again later.
        </Typography>
      </Box>
    ) : (
      this.props.children
    );
  }
}
