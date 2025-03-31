import { styled, TextField } from "@mui/material";

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
  id?: number | string;
}

export const muiTextFieldTheme = {
  "& .MuiFilledInput-root": {
    borderRadius: 8,
    backgroundColor: "#fff",
    border: "2px solid #dfe2ee",

    "&.Mui-error": {
      borderColor: "red",
    },

    "&.Mui-disabled": {
      backgroundColor: "#F5F6FA",
      borderColor: "#dfe2ee",
    },

    "&.Mui-focused": {
      borderColor: "#0080a6",

      "&.Mui-error": {
        borderColor: "red",
      },
    },
  },

  "& .MuiInputLabel-root.Mui-error": {
    border: "none",
  },
};

export const StyledTextField = styled(TextField)(muiTextFieldTheme);

export const getRegexPattern = (pattern: string): RegExp => {
  switch (pattern) {
    case "anyText":
      return /.*/;
    case "name":
      return /^([a-zA-Z' -]*)$/;
    case "address":
      return /^([a-zA-Z0-9'.#@%&/ -]*)$/;
    case "country":
      return /^([a-zA-Z -]*)$/;
    case "city":
      return /^([a-zA-Z ]{1,64})$/;
    case "email":
      return /^\w+([._-]?\w+)*@\w+([_.-]?\w+)*(\.\w{2,3})+$/;
    case "emailKeys":
      return /^[a-zA-Z0-9@._-]+$/;
    case "oneDigit0-8":
      return /^[0-8]/;
    case "twoDigitNo":
      return /^\d{1,2}$/;
    case "threeDigitNo":
      return /^\d{1,3}$/;
    case "ageKeys":
      return /^[0-9,]+$/;
    case "ages":
      return /^\d{1,3}(,\d{1,3})*$/;
    case "alphaNumericDashSpace":
      return /^[a-zA-Z0-9 -]+$/;
    case "zip":
      return /^\d{5,10}$/;
    case "digitsOnly":
      return /^\d+$/;
    case "digitsDash":
      return /^[0-9- ]+$/;
    case "aplhaNumericDashPeriodAmpersand":
      return /^([a-zA-Z0-9.&-]{1,64})$/;
    case "aplhaNumericDashPeriodMax64":
      return /^([a-zA-Z0-9 .-]{1,64})$/;
    case "alphaSpace":
      return /^[a-zA-Z ]+$/;
    case "alphaSpaceDash":
      return /^([a-zA-Z -]*)$/;
    case "numbersDashSpace":
      return /^[0-9 -]{1,10}$/;
    case "aplhaNumericDashPeriodAmpersandSpace":
      return /^([a-zA-Z0-9 .&-]*)$/;
    case "aplhaNumericDashPeriodAmpersApostropheandSpace":
      return /^([a-zA-Z0-9 '.&-]*)$/;
    case "aplhaNumericDashPeriodAmpersandApostrpohe":
      return /^[a-zA-Z0-9\-.&']+$/;
    case "alphaPeriodandDash":
      return /^([a-zA-Z.-]*)$/;
    case "alphaPeriodDashSpace":
      return /^[a-zA-Z.\- ]+$/;

    case "alphaCommaDashApostrophe":
      return /^[a-zA-Z,'-]+$/;
    case "alphaCommaDashApostropheSpace":
      return /^[a-zA-Z,' -]+$/;
    case "alphaCommaAmpersandDashApostropheSpacePeriodandBrackets":
      return /^[a-zA-Z,&'(). -]+$/;
    case "alphaNumericApostophePeriodDashHashPercentAmbersandSlashandSpace":
      return /^[a-zA-Z0-9' .#%/&-]+$/;
    default:
      return /.*/;
  }
};

export const validationMessage = (pattern: string): string[] => {
  switch (pattern) {
    case "anyText":
      return ["Allows any character"];
    case "name":
      return ["Alphabets(A-Z)(a-z)", "Apostrophe (') Hyphen(-)"];
    case "address":
      return [
        "Alphabets(A-Z)(a-z)",
        "Hyphen(-), Hash(#), At(@)",
        "Percentage(%), Ampresand(&), /",
      ];
    case "city":
      return ["Alphabets(A-Z)(a-z)"];
    case "country":
      return ["Alphabets(A-Z)(a-z)", "Hyphen(-)"];
    case "email":
      return ["Alphabets(A-Z)(a-z)", "At(@), Period(.)"];
    case "twoDigitNo":
      return ["Digits(0-9)", "Two digits"];
    case "threeDigitNo":
      return ["Digits(0-9)", "Three digits", "Maximum value : 100"];
    case "ages":
      return ["Digits(0-9), Comma(,)"];
    case "alphaNumericDashSpace":
      return ["Alphabets(A-Z)(a-z), Digits(0-9), Dash(-), Space( )"];
    case "zip":
    case "digitsDash":
      return ["Numbers, - and space"];
    case "digitsOnly":
      return ["Digits(0-9)"];
    case "alphaSpaceDash":
      return ["Alphabets(A-Z)(a-z), hyphen(-) and space"];
    case "alphaCommaDashApostrophe":
      return ["Alphabets(A-Z)(a-z), Dash(-), Comma(,), Apostrophe(')"];
    case "alphaCommaDashApostropheSpace":
      return [
        "Alphabets(A-Z)(a-z), Space ( ) ,Dash(-), Comma(,), Apostrophe(')",
      ];
    case "alphaCommaAmpersandDashApostropheSpacePeriodandBrackets":
      return [
        "Alphabets(A-Z)(a-z)",
        "Space ( )",
        "Dash(-)",
        "Comma(,)",
        "Apostrophe(')",
        "Ampersand(&)",
        "Period(.),",
        "Brackets ( () )",
      ];
    case "numbersDashSpace":
      return ["Digits(0-9)", "Space( )", "Dash(-)"];
    case "aplhaNumericDashPeriodAmpersand":
      return ["Alphabets(A-Z)(a-z), Digits(0-9)", "Period(.), Ampersand(&)"];
    case "aplhaNumericDashPeriodMax64":
      return [
        "Alphabets(A-Z)(a-z)",
        "Digits(0-9)",
        "Period(.)",
        "Ampersand(&)",
      ];
    case "money":
      return ["Number(8, 2), Period(.)", "Comma(,)"];
    case "alphaSpace":
      return ["Alphabets(A-Z)(a-z)", "Space( )"];
    case "date":
      return ["Date (MM/DD/YYYY)"];
    case "alphaPeriodandDash":
      return ["Alphabets(A-Z)(a-z)", "Period(.)", "Dash(-)"];
    case "alphaNumPeriodAmpersandDash":
      return [
        "Alphabets(A-Z)(a-z), Digits(0-9)",
        "Period(.)",
        "Dash(-),Ampersand(&)",
      ];
    case "aplhaNumericDashPeriodAmpersandSpace":
      return [
        "Alphabets(A-Z)(a-z)",
        "Digits(0-9)",
        "Period(.)",
        "Dash(-)",
        "Ampersand(&)",
        "Space( )",
      ];
    case "aplhaNumericDashPeriodAmpersApostropheandSpace":
      return [
        "Alphabets(A-Z)(a-z)",
        "Digits(0-9)",
        "Period(.)",
        "Dash(-)",
        "Ampersand(&)",
        "Apostrophe(')",
        "Space( )",
      ];
    case "alphaPeriodDashSpace":
      return ["Alphabets(A-Z)(a-z)", "Dash(-)", "Ampersand(&)", "Space( )"];
    case "alphaNumericApostophePeriodDashHashPercentAmbersandSlashandSpace":
      return [
        "Alphabets(A-Z)(a-z), Digits(0-9), Apostrophe ('), Period (.)",
        "Dash (-), Hash (#), Percent (%), Ampersand (&)",
        "Forward slash (/), Space",
      ];
    default:
      return [""];
  }
};
