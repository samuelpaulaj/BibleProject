import { Tab, Tabs } from "@mui/material";
import { useConfigStore } from "../../store/useConfigStore";

const Navigation = () => {
  const { selectedNav, setSelectedNav, navConfig } = useConfigStore();

  return (
    <>
      <Tabs
        value={selectedNav}
        onChange={(_event, changedValue) => {
          setSelectedNav(changedValue);
        }}
        sx={{
          display: "flex",
          justifyContent: "space-between", // Distribute space evenly
        }}
      >
        {navConfig.map((nav) => (
          <Tab
            data-testid={nav.id}
            key={nav.id}
            value={nav.id}
            label={nav.name}
            sx={{
              flex: 1, // Make tabs take equal space if needed
              textAlign: "center", // Center-align the text
            }}
          ></Tab>
        ))}
      </Tabs>
    </>
  );
};

export default Navigation;
