import { Box, Button, Typography } from "@mui/material";
import "./TopBar.scss";

const TopBar = () => {
  return (
    <Box className="topbar">
      <Box marginLeft={"0.2rem"}>
        <Typography>Welcome to The Churches of Christ</Typography>
      </Box>
      <Box>
        <Button>Contact</Button>
        <Button>About Us</Button>
      </Box>
    </Box>
  );
};

export default TopBar;
