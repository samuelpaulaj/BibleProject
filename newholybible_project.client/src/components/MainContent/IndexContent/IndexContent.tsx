// import { Box } from "@mui/material";
// import "./IndexContent.scss";

// const IndexContent = () => {
//   return <Box className="indexcontent">Index Content</Box>;
// };

// import SideNav from "../SideNav/SideNav.tsx";
// import {
//   SubSectionNames,
//   useSideNavStore,
// } from "../../state/useSideNavStore.ts";
import { useRef, useEffect } from "react";

// import Header from "../Header/Header.tsx";

import {
  SubSectionNames,
  useSideNavStore,
} from "../../../store/useSideNavStore.ts";
import SideNav from "./SideNav/SideNav.tsx";
import Genesis from "./Genesis/Genesis.tsx";
import "./IndexContent.scss";

const IndexContent = () => {
  const observer = useRef<IntersectionObserver>();
  const { setCurrentSubSection } = useSideNavStore();
  // const { getCurrentPair } = useMasterStore();
  // const form = useForm<Borrowers>({
  //   mode: "onSubmit",
  //   values: getCurrentPair().borrowers,
  // });

  useEffect(() => {
    observer!.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        if (visibleSection) {
          const currentSubSection = visibleSection.getAttribute("data-section");
          if (currentSubSection)
            setCurrentSubSection(currentSubSection as SubSectionNames);
        }
      },
      { threshold: 0.3 }
    );
    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      observer?.current?.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer!.current!.unobserve(section);
      });
    };
  }, [setCurrentSubSection]);

  return (
    <div className="loanAppContentArea__container">
      <SideNav />
      <div className="loanAppContentArea__mainArea">
        {/* <Header />  */} Header
        <div className="loanAppContentArea__formContainer">
          {/* <FormProvider {...form}>
            <BorrowerInformation />
            <DemographicInformation />
          </FormProvider> */}
          <Genesis />
          {/* Index */}
        </div>
      </div>
    </div>
  );
};

// export default ContentArea;

export default IndexContent;
