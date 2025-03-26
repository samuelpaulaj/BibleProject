// import { SectionNames } from "../../../state/useSideNavStore.ts";
import { PersonOutlineOutlined as PersonOutlineOutlinedIcon } from "@mui/icons-material";
import { PublicOutlined as PublicOutlinedIcon } from "@mui/icons-material";
import { AccountBalanceOutlined as AccountBalanceOutlinedIcon } from "@mui/icons-material";
import { BusinessCenterOutlined as BusinessCenterOutlinedIcon } from "@mui/icons-material";
// import { CurrencyExchangeOutlined as CurrencyExchangeOutlinedIcon } from "@mui/icons-material";
// import { AssignmentOutlined as AssignmentOutlinedIcon } from "@mui/icons-material";
// import { StarBorderOutlined as StarBorderOutlinedIcon } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";
import { SectionNames } from "../../../../../store/useSideNavStore";

type CustomIconProps = SvgIconProps & { name: SectionNames };

const SectionIcon = (props: CustomIconProps) => {
  switch (props.name) {
    case "Index":
      return <PersonOutlineOutlinedIcon {...props} />;
    case "Old Testament":
      return <PublicOutlinedIcon {...props} />;
    case "New Testament":
      return <AccountBalanceOutlinedIcon {...props} />;
    case "Word Search":
      return <BusinessCenterOutlinedIcon {...props} />;
    // case "Liabilities & Assets":
    //   return <CurrencyExchangeOutlinedIcon {...props} />;
    // case "Declarations":
    //   return <AssignmentOutlinedIcon {...props} />;
    // case "Military Service":
    //   return <StarBorderOutlinedIcon {...props} />;
  }
};

export default SectionIcon;
