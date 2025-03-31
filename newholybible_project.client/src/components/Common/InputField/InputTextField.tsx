import { Control, Controller } from "react-hook-form";
// import "./InputField.scss";
import { getRegexPattern, StyledTextField } from "../CommonFormUtils.ts";
import { InputAdornment } from "@mui/material";

// @ts-ignore
import { FieldError } from "react-hook-form/dist/types/index.js";
import { useRef, useEffect } from "react";
import ErrorIndicator from "../Icons/ErrorIcon/ErrorIndicator.tsx";

const helperTextStr = (
  error: FieldError,
  message?: { helperText?: string; errorMessage?: string }
) => {
  if (!error) return message?.helperText || "";
  return error.type === "pattern" ? error.message : message?.errorMessage || "";
};

export const InputField = ({
  control,
  name,
  placeholderText = "",
  required,
  disabled,
  exceptionFocus = "",
  type,
  message,
  validation = {
    keys: "anyText",
    pattern: "anyText",
    max: Number.MAX_SAFE_INTEGER,
    min: 0,
  },
  id,
  onFocusCallback,
  onBlurCallback,
  onChangeCallback,
  loanSummary,
}: {
  control: Control<any>;
  name: string;
  placeholderText?: string;
  required?: boolean;
  disabled: boolean;
  exceptionFocus?: string;
  type: string;
  id?: string;
  onFocusCallback?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlurCallback?: () => void;
  onChangeCallback?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validation?: {
    keys: string;
    pattern: string;
    max?: number;
    min?: number;
  };
  message?: {
    helperText?: string;
    errorMessage?: string;
  };
  loanSummary?: boolean;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current && exceptionFocus === name) {
      inputRef.current.focus();
    }
  }, [exceptionFocus, name]);

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required,
        pattern: {
          value: getRegexPattern(validation.pattern),
          message: `Please provide a valid ${placeholderText}`,
        },
        maxLength: validation.max,
        minLength: validation.min,
      }}
      render={({
        field: { value, onBlur, onChange },
        fieldState: { error },
      }) => (
        <StyledTextField
          inputProps={{
            maxLength: validation.max,
            minLength: validation.min,
          }}
          sx={{
            "& .MuiFilledInput-input": {
              padding: loanSummary ? "8.5px 14px" : "25px 0px 8px 12px",
            },
          }}
          fullWidth={!!exceptionFocus}
          InputProps={{
            disableUnderline: true,
            endAdornment: error ? (
              <InputAdornment position="end">
                {!disabled && <ErrorIndicator pattern={validation.pattern} />}
              </InputAdornment>
            ) : undefined,
          }}
          key={id}
          variant="filled"
          id={name}
          label={`${placeholderText}${required ? "*" : ""}`}
          type={type}
          onKeyDown={(event) => {
            if (!getRegexPattern(validation.keys).test(event.key)) {
              event.preventDefault();
            }
          }}
          onChange={(event: any) => {
            onChange(event);
            onChangeCallback?.(event);
          }}
          onFocus={(event: any) => onFocusCallback?.(event)}
          onBlur={() => {
            onBlur();
            onBlurCallback?.();
          }}
          value={value || ""}
          error={!disabled && !!error}
          disabled={disabled}
          helperText={!disabled && helperTextStr(error, message)}
        />
      )}
    />
  );
};
