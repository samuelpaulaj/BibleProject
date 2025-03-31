import { Button, Typography } from "@mui/material";
import { DateInputField } from "../../../Common/DateInputField/DateInputField";
import { FormProvider, useForm } from "react-hook-form";

const DateSection = () => {
  const form = useForm({
    defaultValues: {
      date: null,
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            columnGap: "20px",
            marginLeft: "20%",
            // justifyContent: "left",
            // alignItems: "center",
            // height: "100%",
          }}
        >
          <div>
            <Typography variant="h5" className="listcontent__subtitle">
              Select the date :
            </Typography>
          </div>
          <div>
            <DateInputField
              control={control}
              name="date"
              required={true}
              disabled={false}
              placeholder="Select date"
              onChangeCallback={(date: any) => {
                console.log(date);
              }}
              message={{
                errorMessage: "Please select a date",
                helperText: "This is a required field",
              }}
            />
          </div>
          <div>
            <Button variant="outlined">Submit</Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default DateSection;
