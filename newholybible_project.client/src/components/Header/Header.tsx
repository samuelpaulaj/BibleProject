import { Box, Typography } from "@mui/material";
import "./Header.scss";

const Header = () => {
  return (
    <Box className="header">
      <Typography fontSize={30} fontWeight={"bold"}>
        The Churches of Christ greets you.
      </Typography>
      <Typography color="primary.main">Romans 16 : 16</Typography>
    </Box>
  );
};

export default Header;
