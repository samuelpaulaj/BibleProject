import { Box, Typography } from "@mui/material";
import "./TodayVerse.scss";

const TodayVerse = () => {
  return (
    <Box className="todayverse">
      <Box sx={{ marginTop: "5rem", marginBottom: "0.4rem" }}>
        <Typography fontWeight={"bold"} fontSize={"24px"}>
          Today's Verse
        </Typography>
      </Box>
      <Box
        sx={{
          height: "20%",
          width: "30%",
          borderColor: "#213555",
          borderStyle: "solid",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          //   alignContent: "center",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontSize={"20px"} sx={{ textAlign: "center" }}>
          நானும் என் வீட்டாருமோவென்றால், கர்த்தரையே சேவிப்போம்.
        </Typography>
        <Typography
          fontSize={"12px"}
          fontWeight={"bold"}
          sx={{ marginTop: "0.6rem" }}
        >
          யோசுவா 24 : 15
        </Typography>
      </Box>
    </Box>
  );
};

export default TodayVerse;
