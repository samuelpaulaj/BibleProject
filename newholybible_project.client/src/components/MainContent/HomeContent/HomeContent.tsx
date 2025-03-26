import { Box } from "@mui/material";
import "./HomeContent.scss";
import TodayVerse from "./TodayVerse/TodayVerse";

const HomeContent = () => {
  return (
    <Box className="homecontent">
      <TodayVerse />
    </Box>
  );
};

export default HomeContent;
