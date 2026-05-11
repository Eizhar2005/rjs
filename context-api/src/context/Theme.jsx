import React, { createContext } from "react";
import { useState } from "react";
// this is used to create a context object which can be used to share data across components without passing props down manually at every level.
export const ThemeDataContext = createContext();


const Theme = (props) => {
    const [theme, setTheme] = useState('light')
  return (
    <div>
      {/* // this is used to provide the context value to the components that are wrapped inside the Theme component. The value can be any data that you want to share across the components. */}
        <ThemeDataContext.Provider value={[theme, setTheme]} > 
            {props.children}   
        </ThemeDataContext.Provider>
        {/* {props.children} // this is used to render the children components passed to Theme component */}
    </div>
  );
};

export default Theme;
