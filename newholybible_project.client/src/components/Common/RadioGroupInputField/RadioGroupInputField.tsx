import { Control, Controller } from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import { RadioOption } from "../CommonFormUtils.ts";
import { isEmpty } from "lodash";
import React from "react";

const StyledRadio = styled(Radio)({
  "& .MuiSvgIcon-root": {
    fontSize: 35,
  },
});

const StyledRadioGroup = styled(RadioGroup)({
  "& .MuiSvgIcon-root": {
    fontSize: 35,
  },
  "& .MuiRadio-root": {
    color: "#dfe2ee",
  },
  "& .Mui-checked": {
    color: "#0080a6",
  },
});

export const RadioGroupInputField = ({
  control,
  isBoolean = false,
  name,
  dataSource,
  label,
  required = false,
  disabled = false,
  defaultValue = isBoolean ? false : "",
  direction = "horizontal", // New Prop
  onChangeCallback,
  metaDataCallBack = () => {},
  className,
  labelColor = "text.secondary",
  labelFontSize = "16px",
  labelFontWeight = "bolder",
  showLabel = true,
  width = "fit-content",
}: {
  control: Control;
  isBoolean?: boolean;
  name: string;
  dataSource: RadioOption[];
  label?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string | boolean;
  onChangeCallback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  metaDataCallBack?: (name: string, isDirty: boolean) => void;
  className?: string;
  direction?: "horizontal" | "vertical"; // New prop replaces `displayHorizontally` & `displayVertical`
  labelColor?: string;
  labelFontSize?: string;
  labelFontWeight?: string;
  showLabel?: boolean;
  width?: string;
}) => (
  <Controller
    name={name}
    control={control}
    rules={{
      validate: (value) => {
        if (isBoolean) return true;
        if (required && isEmpty(value)) return false;
        return true;
      },
    }}
    defaultValue={defaultValue}
    render={({ field: { value, onChange }, fieldState: { error } }) => (
      <FormControl
        id={name}
        sx={{
          display: "flex",
          flexDirection: direction === "vertical" ? "column" : "row",
          //   alignItems: "center",
          gap: "20px",
        }}
      >
        {showLabel && (
          <FormLabel>
            <Typography
              sx={{
                color: labelColor,
                fontWeight: labelFontWeight,
                fontSize: labelFontSize,
              }}
            >
              {label}
            </Typography>
          </FormLabel>
        )}

        <StyledRadioGroup
          value={value}
          name={name}
          onChange={(event) => {
            let result: boolean | string = event.target.value;
            if (isBoolean) {
              result = event.target.value === "true";
            }
            onChange(result);
            metaDataCallBack(name, true);
            onChangeCallback?.(event);
          }}
          sx={{
            display: "flex",
            flexDirection: direction === "vertical" ? "column" : "row",
            // alignItems: "center",
            width: direction === "horizontal" ? width : "fit-content",
          }}
        >
          {dataSource.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<StyledRadio />}
              label={option.label}
              disabled={disabled}
              sx={{
                color: error ? "red" : "text.secondary",
                fontWeight: "bold",
                "& .MuiRadio-root": { color: error ? "red" : "#dfe2ee" },
                "& .Mui-checked": { color: error ? "red" : "#0080a6" },
              }}
              className={className}
            />
          ))}
        </StyledRadioGroup>
      </FormControl>
    )}
  />
);
