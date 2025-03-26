import { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@mui/icons-material";
import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";
// import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";
// import {
//   SectionType,
//   useSideNavStore,
// } from "../../../state/useSideNavStore.ts";
// import SectionIcon from "./SectionIcon.tsx";
import {
  SectionType,
  useSideNavStore,
} from "../../../../../store/useSideNavStore.ts";
import SectionIcon from "./SectionIcon.tsx";

const Section = ({
  isCollapsed,
  section,
}: {
  isCollapsed: boolean;
  section: SectionType;
}) => {
  const [isSectionCollapsed, setIsSectionCollapsed] = useState(true);
  const {
    currentSection,
    currentSubSection,
    setCurrentSubSection,
    setCurrentSection,
  } = useSideNavStore();

  const handleSectionClick = () => {
    if (isSectionCollapsed && !isCollapsed) {
      setIsSectionCollapsed(false);
      setCurrentSection(section.name);
    }
    if (isCollapsed) {
      setCurrentSection(section.name);
    }
  };

  return (
    <a
      href={`#${section.id}`}
      onClick={handleSectionClick}
      className={`section ${isCollapsed ? "collapsed" : ""} ${
        isSectionCollapsed ? "sectionCollapsed" : ""
      } ${currentSection === section.name ? "selected" : ""}`}
    >
      {isCollapsed ? (
        <div className={`main collapsed`}>
          <IconButton data-testId={`smallSectionButton`}>
            <SectionIcon
              name={section.name}
              sx={{
                color: currentSection === section.name ? "white" : "#7fa0c5",
              }}
            />
          </IconButton>
        </div>
      ) : (
        <>
          <div className="main">
            <div className="title">
              <SectionIcon name={section.name} />
              <Typography sx={{ fontSize: "16px", fontWeight: 900 }}>
                {section.name}
              </Typography>
            </div>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsSectionCollapsed(!isSectionCollapsed);
              }}
              sx={{
                height: 32,
                width: 32,
                backgroundColor: `${
                  isSectionCollapsed ? "#1b3656" : "#1b3656"
                }`,
              }}
            >
              {isSectionCollapsed ? (
                <KeyboardArrowDownIcon sx={{ color: "white" }} />
              ) : (
                <KeyboardArrowUpIcon sx={{ color: "white" }} />
              )}
            </IconButton>
          </div>
          <ul
            className={`subSections ${
              isSectionCollapsed ? "sectionCollapsed" : ""
            }`}
            data-testId="subsections"
          >
            <div>
              {section.subSections.map((item) => {
                return (
                  <a href={`#${item.id}`} key={item.id}>
                    <li
                      key={item.name}
                      onClick={() => {
                        setCurrentSubSection(item.name);
                      }}
                      className={`${
                        currentSubSection === item.name ? "selected" : ""
                      }`}
                    >
                      <div
                        className={`sectionItem ${
                          currentSubSection === item.name ? "selected" : ""
                        }`}
                      >
                        <Typography
                          sx={{
                            fontSize: "16px",
                            fontWeight:
                              currentSubSection === item.name ? 900 : 400,
                          }}
                        >
                          {item.name}
                        </Typography>
                      </div>
                    </li>
                  </a>
                );
              })}
            </div>
          </ul>
        </>
      )}
    </a>
  );
};

export default Section;
