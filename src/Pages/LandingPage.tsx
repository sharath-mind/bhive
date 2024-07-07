import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLandingPageDataAction } from "../store/actions/landingPage";
import { Box } from "@mui/material";
import TopDisplay from "../Components/LandingPageComponents/TopDisplay";
import ChooseUsView from "../Components/LandingPageComponents/ChooseUsView";
import SpaceOverview from "../Components/LandingPageComponents/SpaceOverview";
import DownloadApp from "../Components/DownloadApp";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLandingPageDataAction());
  }, []);

  return (
    <Box>
      <TopDisplay />
      <ChooseUsView />
      <SpaceOverview />
      <DownloadApp />
    </Box>
  );
};

export default LandingPage;
