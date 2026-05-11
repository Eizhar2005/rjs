import React from 'react'
import Navbar2 from './Navbar2'
import { useContext } from "react";
import { ThemeDataContext } from "../context/Theme";

const Navbar = () => {

  const [theme] = useContext(ThemeDataContext); 
  return (
    <div className={`${theme} navbar`}>
      <h2>Theme</h2>
      <Navbar2 />
    </div>
  )
}

export default Navbar
