import { Button, Typography } from "@mui/material";
import { InputField } from "../../../Common/InputField/InputTextField";
import { FormProvider, useForm } from "react-hook-form";
import useQuestionStore from "../../../../store/useQuestionStore";
import { Question } from "./Question/Question";

export const QuestionForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
    },
  });

  const { questions } = useQuestionStore();

  const { control, handleSubmit } = form;
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "20%",
        marginTop: "20px",
        flexDirection: "column",
        rowGap: "20px",
        width: "100%",

        // justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
      }}
    >
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Typography>What is your name?</Typography>
            <InputField
              name={"name"}
              control={control}
              disabled={false}
              type="text"
            />
          </div>
          <div>
            <Typography>What is your Phone number?</Typography>
            <InputField
              name={"phoneNumber"}
              control={control}
              disabled={false}
              type="number"
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "30px" }}
          >
            {questions.map((question, index) => (
              <Question
                index={index + 1}
                key={question.id}
                questionText={question.questionText}
                choices={question.choices}
                control={control}
                name={`question-${question.id}`}
              />
            ))}
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
