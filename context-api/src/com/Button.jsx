import React from "react";

import { useContext } from "react";
import { ThemeDataContext } from "../context/Theme";
const Button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  const changeTheme = () => {
    setTheme("dark");
    // this function will be used to change the theme value in the context. You can implement the logic to toggle between light and dark themes here.
  };
  return (
    <div>
      <button onClick={changeTheme}>change theme </button>
    </div>
  );
};

export default Button;
