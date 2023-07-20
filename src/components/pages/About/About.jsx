import React from "react";

import { Link } from "react-router-dom";
import "./about.css";
export default function About() {
  return (
    <section id="about" className="about-wrapper">
      <div className="paddings innerWidth flexCenter about-container">
        <h1 className="primaryTexts">About</h1>
        <p className="text">
          I am software engineering student who is passionate in programming and
          engineering. My portfolio represents a dynamic journey of growth and
          achievment in the field of Web and App Development. Throughout my
          short but impactful career, I have eagerly embraced opportuinties to
          work on diverse projects, ranging from Website Challenges like
          FrontEndMentor to my own project ideas.
        </p>
        <p className="text">
          These projects has allowed me to develop a strong foundation in
          programming languages, problem-solving techniques, and design.
          Although, I am still constantly learning new concepts everyday, and I
          am eager to get better as the journey goes on.
        </p>
        <p className="text">
          My web/app development projects reflect a deep understanding of HTML,
          CSS, Javascript and various frameworks. From responsive design to
          interactive user interfaces, I pride myself on delivering engaging
          websites that prioritize user experience.
        </p>
        <p className="text">
          As I move forward in my career, I can't help but feel excited about
          the prospect of taking on more significant projects. Working alongside
          talented teams and diving into cutting-edge technology to create
          innovative digital solutions is something that truly inspires me. My
          portfolio is like a story of my journey, showcasing the hard work and
          dedication I've poured into every project. It reflects my deep passion
          for excellence and my desire to make a meaningful impact in the
          ever-changing world of web and app development. I'm thrilled to see
          where this adventure will take me next!
        </p>
      </div>
    </section>
  );
}
