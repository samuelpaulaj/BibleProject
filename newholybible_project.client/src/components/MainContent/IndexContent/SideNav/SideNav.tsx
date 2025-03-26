import { IconButton, Typography } from "@mui/material";
import { useState } from "react";
// import Section from "./Section/Section.tsx";
import { useSideNavStore } from "../../../../store/useSideNavStore.ts";
import HideMenuIcon from "../../../../assets/icons/HideMenuIcon.tsx";
import Section from "./Section/Section.tsx";
import "./SideNav.modules.scss";

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { Sections } = useSideNavStore();
  return (
    <nav className={`loanAppNewSideNav ${isCollapsed ? "collapsed" : ""}`}>
      <div className={`loanAppNewHeader ${isCollapsed ? "collapsed" : ""}`}>
        {!isCollapsed && (
          <Typography sx={{ fontSize: "12px", fontWeight: 900 }}>
            APPLICATION
          </Typography>
        )}
        <IconButton
          data-testid="showCollapseButton"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
          className={isCollapsed ? "collapseIcon" : ""}
          sx={{ padding: 0 }}
        >
          <HideMenuIcon />
        </IconButton>
      </div>
      {Sections.map((section) => {
        return (
          <Section
            key={section.name}
            isCollapsed={isCollapsed}
            section={section}
          />
        );
      })}
    </nav>
  );
};

export default SideNav;
