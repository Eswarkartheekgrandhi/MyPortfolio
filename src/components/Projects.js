import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../styles/Education.css";
import logo from "../images/vishnu.png";

function Projects() {
  return (
    <div>
      <div className="education_container">
        <div className="education_top">
          <h2>Vishnu Institute of Technology</h2>
        </div>
        <div className="education_body">
          <img src={logo} alt="" />
          <p>
            I have learnt Technologies such as Artificial Intelligence, Machine
            Learning, Data Science, Full Stack Development and Programming
            Languages such as Python, Java, C, JavaScript, PHP and Frameworks
            such as Django, React JS, Angular, JQuery, Express JS, Mangoose
          </p>
          <a href="https://vishnu.edu.in/" target="_blank">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
