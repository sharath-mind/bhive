import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getLandingPageData } from "../../store/reducers/landingPage";
import { PRIMARY, SECONDARY, spaceTags } from "../../constant";
import PassBtn from "./PassBtn";

const SpaceOverview = () => {
  const landingPageData = useSelector(getLandingPageData);

  const handleDayPassBtnClick = () => {};
  const handleBulkPassBtnClick = () => {};

  return (
    <Box m={{ xs: "20px", md: "120px" }}>
      <Typography
        variant="h2"
        fontSize="24px"
        display={{ xs: "initial", sm: "none" }}
      >
        Our Spaces
        <Box display="inline-block" sx={{float: 'right'}}>
          <img src="/images/icons/rightArrow.png" width="24px" />
        </Box>
      </Typography>
      <Typography
        variant="h2"
        fontSize="36px"
        display={{ xs: "none", sm: "initial" }}
      >
        Our Space Overview
      </Typography>
      <Grid
        container
        my={{ xs: "30px", md: "40px" }}
        spacing={{ xs: "16px", sm: "20px", md: "45px" }}
      >
        {landingPageData?.length > 0 ? (
          landingPageData?.map((data, index) => (
            <Grid item xs={12} sm={6} lg={4} key={data?.id}>
              <Box
                p="12px"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0px 1.08px 8.63px 0px #0000000F",
                }}
              >
                <Box>
                  <Box
                    display="flex"
                    alignContent="center"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <Typography variant="h5">{data?.name}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        width: "52px",
                        height: "52px",
                        alignItems: "center",
                        backgroundColor: "#F9F9F9",
                        borderRadius: "6px",
                        border: "1px solid #EEE7E7",
                      }}
                    >
                      <img src="/images/icons/direction.png" width="18px" />
                      <Typography
                        variant="subtitle2"
                        sx={{ opacity: 0.5 }}
                        fontSize="8px"
                        fontWeight="500"
                        mt={1}
                      >
                        6 KM
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    height="202px"
                    sx={{
                      backgroundImage: `url('/images/${data?.images?.[0]}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      borderRadius: "6px",
                      padding: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        background:
                          "linear-gradient(100.27deg, #263238 22.66%, #2F4B59 67.67%)",
                        display: "flex",
                        alignItems: "center",
                        minWidth: "109px",
                        height: "32px",
                        width: "fit-content",
                        borderRadius: "5px",
                        px: "8px",
                      }}
                    >
                      <Box mx="8px" my="10px" height="18px">
                        <img
                          src={spaceTags[index % spaceTags.length].img}
                          width={18}
                        />
                      </Box>
                      <Typography
                        fontSize="14px"
                        letterSpacing="2px"
                        lineHeight="17px"
                        fontWeight="500"
                        color="primary.main"
                        sx={{ textShadow: "0px 1px 3px #FFD04F99" }}
                      >
                        {spaceTags[index % spaceTags.length].label}
                      </Typography>
                    </Box>
                  </Box>
                  <Box mt="22px" display="flex" alignItems="center" gap="12px">
                    <PassBtn
                      data={data}
                      variant={SECONDARY}
                      onClick={handleDayPassBtnClick}
                    />
                    <PassBtn
                      data={data}
                      variant={PRIMARY}
                      days="10"
                      onClick={handleBulkPassBtnClick}
                      offerLabel={{
                        label:
                          data?.day_pass_discounts_percentage?.["10"]?.value +
                          "% Discount",
                        title:
                          data?.day_pass_discounts_percentage?.["10"]?.message,
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))
        ) : (
          <Typography variant="h3">No space available</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default SpaceOverview;
