import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { chooseUsData } from "../../constant";

interface ChooseUsInterface {
  img: string;
  label: string;
}

const ChooseUsView = () => {
  return (
    <Box my="36px" mx={{ xs: "20px", md: "120px" }}>
      <Typography
        variant="h2"
        mb={{ xs: "30px", md: "40px" }}
        fontSize={{ xs: "24px", md: "36px" }}
      >
        Why Choose us?
        <Box
          display={{ xs: "inline-block", md: "none" }}
          sx={{ float: "right" }}
        >
          <img src="/images/icons/rightArrow.png" width="24px" />
        </Box>
      </Typography>
      <Grid
        container
        spacing={{ xs: "12px", md: "24px" }}
        sx={{
          position: "relative",
          "&::before": {
            position: "absolute",
            background: "#f9faff",
            width: "3px",
            height: "100%",
            content: '""',
            top: 0,
            left: -1,
            display: { xs: "none", md: "initial" },
          },
          "&::after": {
            position: "absolute",
            background: "#f9faff",
            width: "100%",
            height: "3px",
            content: '""',
            bottom: -1,
            left: 0,
            display: { xs: "none", md: "initial" },
          },
        }}
      >
        {chooseUsData.map((data: ChooseUsInterface) => (
          <Grid
            item
            key={data.label}
            xs={6}
            md={4}
            lg={3}
            p={{ xs: "12px", md: "24px" }}
            sx={{
              borderLeft: { xs: "none", md: "1px solid #D3D3D399" },
              borderBottom: { xs: "none", md: "1px solid #D3D3D399" },
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              flexDirection={{ xs: "column", md: "initial" }}
              boxShadow={{ xs: "0px 2px 4px 0px #0000000F", md: "none" }}
              borderRadius={{ xs: "6px", md: "none" }}
              height={{ xs: "100%", md: "inital" }}
            >
              <img src={data.img} alt={data.label + " icon"} width="32" />
              <Typography
                variant="subtitle1"
                fontSize={{ xs: "14px", md: "20px" }}
              >
                {data.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChooseUsView;
