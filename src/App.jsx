import { Fragment, useEffect, useState } from "react";
import Nav from "./components/Nav";
import "./css/app.css";
import Home from "./components/Home";

const App = () => {
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
      document.body.style.color = "white";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
      document.body.style.color = "hsl(200, 15%, 8%)";
    }
  };

  return (
    <Fragment>
      <Nav mode={mode} toggleMode={toggleMode} />
      <Home mode={mode} />
    </Fragment>
  );
};

export default App;
