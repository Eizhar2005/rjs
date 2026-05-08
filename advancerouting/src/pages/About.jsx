import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const About = () => {
  const navi = useNavigate();

  return (
    <div>
      <div className="flex justify-center items-center gap-10 py-4 text-2xl text-white">
        <Link to="/about/aboutme">AboutMe</Link>
        <Link to="/about/intro">Intro </Link>
      </div>
      <button
        onClick={() => navi("/")} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Return to Home Page
      </button>
      <button
        onClick={() => navi(-1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
       Back
      </button>
      <Outlet />
    </div>
  );
};

export default About;
