import { createContext, useState } from "react";
import { Button } from "react-bootstrap";
import Signup from "./components/Signup";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Signup />
      </ThemeContext.Provider>
      <Button
        variant="secondary"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Toggle theme
      </Button>
    </>
  );
}

export default App;
