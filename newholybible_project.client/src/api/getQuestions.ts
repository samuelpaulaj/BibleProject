import axiosInstance from "../components/Common/AxiosInstance/axiosConfig";

export const getQuestions = async () => {
  const url = "api/Questions";
  try {
    const response = await axiosInstance.get(url);
    return response;
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
};
