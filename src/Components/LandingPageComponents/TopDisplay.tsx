import React from "react";
import { Box, Typography } from "@mui/material";

const TopDisplay = () => {
  return (
    <Box position="relative" height={{ xs: "450px", md: "450px", lg: "630px" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundImage: "url('/images/Stock/co_work_bg_1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "630px",
          width: "63%",
          display: { xs: "none", md: "inital" },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          backgroundImage: "url('/images/Stock/co_work_bg_2.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: { xs: "50%", lg: "24%" },
          height: "425px",
        }}
      />
      <Box
        sx={{
          top: "42px",
          right: "12px",
          position: { sx: "unset", md: "absolute" },
          backgroundImage: "url('/images/Stock/co_working.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "388px",
          width: { xs: "100%", md: "25%" },
        }}
      />
      <Box
        sx={{
          position: { sx: "unset", md: "absolute" },
          width: { sx: "100%", md: "806px" },
          left: "120px",
          top: "80px",
          px: { xs: "20px", md: "0px" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h1" fontSize={{ xs: "20px", md: "58px" }}>
          Host your meeting with world-class amenities. Starting at{" "}
          <Typography
            variant="h1"
            component="span"
            color="secondary.main"
            fontSize={{ xs: "20px", md: "58px" }}
          >
            ₹199/-!
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default TopDisplay;
