import { Box, Typography } from "@mui/material";
import React from "react";
import DownloadApp from "../Components/DownloadApp";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Box m={{ xs: "20px", md: "120px" }}>
      <Typography variant="h1" fontSize={{ xs: "24px", md: "36px" }}>
        Oops! You came to a wrong page. Please wisit our{" "}
        <Link to="/">Home</Link> page.
      </Typography>
      <DownloadApp />
    </Box>
  );
};

export default PageNotFound;
