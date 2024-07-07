import { Box, Typography } from "@mui/material";
import React from "react";

const DownloadApp = () => {
  return (
    <Box
      mt={{ xs: "20px", md: "122px" }}
      mb="40px"
      px={{ xs: "20px", md: "120px" }}
    >
      <Typography
        variant="h2"
        color="#605F5F"
        my={{ xs: "18px", md: "48px" }}
        mx={{ xs: "0px", md: "42px" }}
        fontSize={{ xs: "24px", md: "36px" }}
      >
        Download our app now
        <Box
          display={{ xs: "inline-block", md: "none" }}
          sx={{ float: "right" }}
        >
          <img src="/images/icons/rightArrow.png" width="24px" />
        </Box>
      </Typography>
      <Box position="relative" height={{ md: "316px", lg: "513px" }}>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "100%",
            height: "256px",
            backgroundColor: "#fff",
            borderRadius: "18px",
            border: "1px solid #EEE7E7CC",
            boxShadow: "0px 1px 8px 0px #0000000F",
            pr: "40px",
            display: { xs: "none", md: "block" },
          }}
        >
          <Typography
            color="#605F5F"
            lineHeight="28px"
            width={{ md: "360px", lg: "580px" }}
            ml="auto"
            mt={{ md: "32px", lg: "70px" }}
          >
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
            <Box display="flex" gap="24px" mt="40px">
              <Box>
                <img
                  src="/images/Stock/google_btn.png"
                  alt="google app store"
                  height={45}
                />
              </Box>
              <Box>
                <img
                  src="/images/Stock/apple_btn.png"
                  alt="apple app store"
                  height={45}
                />
              </Box>
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            position: { xs: "unset", md: "absolute" },
            backgroundImage: "url('/images/Stock/app.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "38%",
            height: { md: "290px", lg: "480px" },
            left: "32px",
            bottom: 0,
            display: { xs: "none", md: "block" },
          }}
        ></Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "18px",
            border: "1px solid #EEE7E7CC",
            boxShadow: "0px 1px 8px 0px #0000000F",
            pt: "50px",
            pb: "12px",
            px: "11px",
            display: { xs: "block", md: "none" },
          }}
        >
          <Box
            sx={{
              backgroundImage: "url('/images/Stock/app.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: { xs: "100%", sm: "45%" },
              mx: "auto",
              height: "320px",
              left: "32px",
              bottom: 0,
            }}
          ></Box>
          <Box
            display="flex"
            gap="18px"
            mt="12px"
            justifyContent="space-around"
          >
            <Box>
              <img
                src="/images/Stock/google_btn.png"
                alt="google app store"
                height={45}
              />
            </Box>
            <Box>
              <img
                src="/images/Stock/apple_btn.png"
                alt="apple app store"
                height={45}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadApp;
