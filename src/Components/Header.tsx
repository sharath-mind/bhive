import { Box, Grid } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Grid
        container
        px={{ xs: "20px", md: 15 }}
        py={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Box>
            <img
              src="/images/icons/logo.png"
              alt="bhive_logo"
              width={125}
            ></img>
          </Box>
        </Grid>
        <Grid item>
          <a href="tel:+000000000000">
            <Box
              sx={{
                borderRadius: "4px",
                borderStyle: "solid",
                borderColor: "primary.main",
                height: "37px",
                width: "37px",
                textAlign: "center",
                alignContent: "center",
                boxShadow: "4px 4px 14px 0px #0000000F",
              }}
            >
              <img
                src="/images/icons/call.png"
                alt="bhive_logo"
                width={24}
              ></img>
            </Box>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
