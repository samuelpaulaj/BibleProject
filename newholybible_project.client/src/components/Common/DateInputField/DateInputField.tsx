import { Control, Controller } from "react-hook-form";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { PopperProps } from "@mui/material";
import { isEmpty } from "../../Utils/Utils";
import dayjs from "dayjs";

export const DateInputField = ({
  control,
  name,
  required,
  disabled,
  placeholder,
  onChangeCallback,
  message = {
    errorMessage: "",
  },
}: {
  control: Control<any>;
  name: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChangeCallback?: any;
  message?: {
    errorMessage: string;
    helperText?: string;
  };
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            name={name}
            slots={{
              openPickerIcon: () => <CalendarMonthOutlinedIcon />,
            }}
            slotProps={{
              popper: {
                anchororigin: { vertical: "bottom", horizontal: "left" },
                transformOrigin: { vertical: "top", horizontal: "left" },
              } as Partial<PopperProps>,
              textField: {
                error: !!error,
                helperText: message.helperText || message.errorMessage,
                required: required,
                disabled: disabled,
                placeholder: placeholder,
                variant: "filled",
              },
            }}
            value={!isEmpty(value) ? dayjs(value) : null}
            onChange={(newValue) => {
              onChange(newValue);
              if (onChangeCallback != undefined) {
                onChangeCallback();
              }
            }}
            disabled={disabled}
          />
        </LocalizationProvider>
      )}
    />
  );
};
