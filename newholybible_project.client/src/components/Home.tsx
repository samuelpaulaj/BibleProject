import { Box, Grid2 } from "@mui/material";
import TopBar from "./TopBar/TopBar.tsx";
import Header from "./Header/Header.tsx";
import Navigation from "./Navigation/Navigation.tsx";
import MainContent from "./MainContent/MainContent.tsx";
// import IndexContent from "./MainContent/IndexContent/IndexContent.tsx";

const Home = () => {
  return (
    <Box>
      <Grid2 container bgcolor={"lightgreen"}>
        {/* <AppBar> */}
        <Grid2 size={{ xs: 12, lg: 12 }}>
          <TopBar />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 12 }}>
          <Header />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 12 }}>
          {/* <NavBar /> */}
          <Navigation />
        </Grid2>
        {/* </AppBar> */}
        <Grid2 size={{ xs: 12, lg: 12 }}>
          <MainContent />
          {/* <IndexContent /> */}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Home;
