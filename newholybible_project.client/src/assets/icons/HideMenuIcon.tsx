import { SvgIcon, SvgIconProps } from "@mui/material";

const HideMenuIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="27"
        height="22"
        viewBox="0 0 27 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.395 21h18.923C24.799 21 26 19.8 26 18.318V3.682C26 2.201 24.8 1 23.318 1H4.395a2.682 2.682 0 0 0-2.682 2.682v14.636c0 1.481 1.2 2.682 2.682 2.682z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m18.58 7.423-3.67 3.67 3.67 3.669M14.91 11.092h6.83M10.383 21V1"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default HideMenuIcon;
