import React from "react";
import Navbar from "./com/navbar";
import Footer from "./com/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Aboutme from "./pages/Aboutme";
import Intro from "./pages/Intro";
import CourseDetails from "./pages/CourseDetails";
import { Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} /> // Dynamic Route for course details 

        <Route path="/about" element={<About />} />
             <Route path="/about/aboutme" element={<Aboutme />} />
             <Route path="/about/intro" element={<Intro />} />
        <Route />


        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
