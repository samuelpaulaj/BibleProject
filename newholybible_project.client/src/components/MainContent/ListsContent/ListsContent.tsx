import { Box, Divider, Typography } from "@mui/material";
import "./ListsContent.scss";
import { useForm } from "react-hook-form";
import { DateInputField } from "../../Common/DateInputField";

const ListsContent = () => {
  const form = useForm({
    defaultValues: {
      date: null,
    },
  });

  const { control } = form;
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
      <div
        style={{
          display: "flex",
          // justifyContent: "left",
          // alignItems: "center",
          // height: "100%",
        }}
      >
        <div style={{ marginLeft: "20px" }}>
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
      </div>
    </Box>
  );
};

export default ListsContent;
