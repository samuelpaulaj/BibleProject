import { Box } from "@mui/material";
import "./MainContent.scss";
import HomeContent from "./HomeContent/HomeContent";
import IndexContent from "./IndexContent/IndexContent";
import { useConfigStore } from "../../store/useConfigStore";
import ListsContent from "./ListsContent/ListsContent";
import WordSearchContent from "./WordSearchContent/WordSearchContent";
import BibleQuizContent from "./BibleQuizContent/BibleQuizContent";
import FavoriteContent from "./FavoriteContent/FavoriteContent";
import HelpContent from "./HelpContent/HelpContent";

const MainContent = () => {
  const { selectedNav } = useConfigStore();

  const renderSelectedNav = (navId: number): any => {
    switch (navId) {
      case 1:
        return <HomeContent />;
      case 2:
        return <IndexContent />;
      case 3:
        return <ListsContent />;
      case 4:
        return <WordSearchContent />;
      case 5:
        return <BibleQuizContent />;
      case 6:
        return <FavoriteContent />;
      case 7:
        return <HelpContent />;
      default:
        return <HomeContent />;
    }
  };
  return (
    <Box sx={{ width: "100vw" }} className="maincontent">
      {" "}
      {renderSelectedNav(selectedNav)}
    </Box>
  );
};

export default MainContent;
