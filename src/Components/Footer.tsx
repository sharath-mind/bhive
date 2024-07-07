import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#222E34",
        py: "12px",
        textAlign: "center",
      }}
    >
      <Typography
        fontSize={{ xs: "12px", md: "14px" }}
        lineHeight="20px"
        color="#DDDDDD"
      >
        © Copyright 2024. Bhive Private Limited
      </Typography>
    </Box>
  );
};

export default Footer;
