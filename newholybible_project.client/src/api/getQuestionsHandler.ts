import useQuestionStore from "../store/useQuestionStore";
import { getQuestions } from "./getQuestions";

export const getQuestionsHandler = async () => {
  try {
    const response = await getQuestions();
    console.log("Response from getQuestionsHandler:", response);
    if (response?.status === 200) {
      useQuestionStore.getState().setQuestions(response.data);
    }
  } catch (error) {
    console.error("Error in getQuestionsHandler:", error);
  }
};
