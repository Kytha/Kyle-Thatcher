import React from "react";

const Navbar = ({ nav }) => {
  return (
    <ul className="sticky inset-t-0 w-full flex ai-center jc-center bg-cello-600 z-index-200 border-b-white-500  border-t-white-500 md:flex none">
      <li
        className={`md:font-lg ph-8 pv-3 clickable lg:w-12 text-center ${
          nav === "about" ? "text-rose-500" : "text-white-500"
        }`}
      >
        <a href="#about">About Me</a>
      </li>
      <li
        className={`md:font-lg ph-8 pv-3 clickable lg:w-12 text-center ${
          nav === "skills" ? "text-rose-500" : "text-white-500"
        }`}
      >
        <a href="#skills">Skills & Tech</a>
      </li>
      <li className="md:font-lg ph-8 pv-3 clickable lg:w-12 text-center">
        <a href="mailto:thatchek@mcmaster.ca">
          <i className="fas fa-envelope text-rose-500 highlight-letter clickable"></i>
        </a>
      </li>
      <li
        className={`md:font-lg ph-8 pv-3 clickable lg:w-12 text-center ${
          nav === "projects" ? "text-rose-500" : "text-white-500"
        }`}
      >
        <a href="#projects">Projects</a>
      </li>
      <li
        className={`md:font-lg ph-8 pv-3 clickable lg:w-12 text-center ${
          nav === "contact" ? "text-rose-500" : "text-white-500"
        }`}
      >
        <a href="mailto:thatchek@mcmaster.ca">Contact</a>
      </li>
    </ul>
  );
};

export default Navbar;
