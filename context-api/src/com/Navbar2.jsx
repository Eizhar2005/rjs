import React from "react";
import { useContext } from "react";
import Theme, { ThemeDataContext } from "../context/Theme";

const Navbar2 = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  return (
    <div className="navbar2">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <h4>{theme}</h4>
    </div>
  );
};

export default Navbar2;
