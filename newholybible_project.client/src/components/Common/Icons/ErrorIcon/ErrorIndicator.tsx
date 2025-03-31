import { styled } from "@mui/material/styles";
import {
  Tooltip,
  TooltipProps,
  tooltipClasses,
  Fade,
  Typography,
} from "@mui/material";
import { Error } from "@mui/icons-material";
import { validationMessage } from "../../CommonFormUtils.ts";

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#39393a",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#39393a",
    borderRadius: "8px",
  },
}));

const ErrorIndicator = ({ pattern }: { pattern: string }) => {
  return (
    <>
      <StyledTooltip
        title={
          <div className="error-tooltip">
            <Typography
              sx={{
                color: "white",
                fontSize: "0.7rem",
                fontWeight: "bold",
              }}
            >
              Acceptable values:
            </Typography>
            {validationMessage(pattern).map((data) => (
              <Typography sx={{ color: "white", fontSize: "0.6rem" }}>
                {data}
              </Typography>
            ))}
          </div>
        }
        TransitionComponent={Fade}
        arrow
        placement="top"
      >
        <Error className="error-icon" sx={{ color: "red" }} />
      </StyledTooltip>
    </>
  );
};

export default ErrorIndicator;
