import { Typography } from "@mui/material";
import { RadioGroupInputField } from "../../../../Common/RadioGroupInputField/RadioGroupInputField";

interface QuestionProps {
  index: number;
  name: string;
  questionText: string;
  choices: string[];
  control: any; // Replace with the actual type of control
}

export const Question = ({
  index,
  questionText,
  name,
  choices,
  control,
}: QuestionProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <div>
        <Typography>{`${index}). ${questionText}`}</Typography>
        <RadioGroupInputField
          control={control} // Replace with the actual control object
          name={`${name}`}
          dataSource={choices.map((choice) => ({
            label: choice,
            value: choice,
          }))}
          direction="vertical"
        />
      </div>
    </div>
  );
};
