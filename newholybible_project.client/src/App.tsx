import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./components/Home.tsx";

export const churchTheme = createTheme({
  palette: {
    text: {
      primary: "#333940",
      secondary: "#707479",
    },
    primary: {
      main: "#0080a6",
    },
  },
  typography: {
    fontFamily: ["lato"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={churchTheme}>
      <div style={{ margin: "0px" }}>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;

