import { useEffect } from "react";
import Button from "./Button";

const Nav = ({ toggleMode, mode }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid align-items-baseline p-0">
        <h4>Where in the world?</h4>
        <button
          className={mode === "dark" ? "btn btn-light" : "btn btn-dark"}
          onClick={toggleMode}
        >
          Dark mode
        </button>
      </div>
    </nav>
  );
};

export default Nav;
