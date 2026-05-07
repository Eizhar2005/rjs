import React from "react";
import { Route, Routes } from "react-router-dom"; //  The Route component is used to define a route in the application, while the  routes object contains the paths for different routes in the application.
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./com/Navbar";
const App = () => {
  return (
    <div>
      <h2>React Router Dom</h2>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> //
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
