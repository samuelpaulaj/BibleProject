import { Box, Divider, Typography } from "@mui/material";
import "./ListsContent.scss";
import DateSection from "./DateSection/DateSection";
import { useEffect } from "react";
import { getQuestionsHandler } from "../../../api/getQuestionsHandler";
import { QuestionForm } from "./QuestionForm/QuestionForm";

const ListsContent = () => {
  useEffect(() => {
    getQuestionsHandler();
  }, []);
  return (
    <Box className="listcontent">
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          marginTop: "20px",
        }}
      >
        <Typography variant="h4" className="listcontent__title">
          Bible Quiz
        </Typography>
      </div>
      <Divider
        sx={{
          backgroundColor: "#000",
          height: "1px",
          margin: "20px 0",
        }}
      />
      <DateSection />
      <QuestionForm />
    </Box>
  );
};

export default ListsContent;
