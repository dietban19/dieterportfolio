import React from "react";
// import styles from "./pages.module.css";
import "./projects.css";
import { Link } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import RealEstate from "../../../assets/images/realestate.png";
import AgeCalc from "../../../assets/images/ageCalc.png";
export default function Projects() {
  return (
    <div>
      <section id="projects" className="projects-wrapper">
        <div className="paddings innerWidth flexColCenter projects-container">
          <h1 className="projectsTitle">My Projects</h1>
          {/* Real Estate */}
          <div className="projectImageContainer">
            <img className="projectImage" src={RealEstate}></img>
            <div className="imageOverlay">
              <button className="openButton">
                <a
                  href="https://realestate-bydits.netlify.app/"
                  target="_blank"
                >
                  {" "}
                  <GrAddCircle size={35} className="gr-add-circle-icon" />
                </a>
              </button>
              <div className="imageOverlay__title">Real Estate App</div>
              <div className="imageOverlay__desc">Descriptions</div>
            </div>
          </div>
          {/* Age Calculator */}
          <div className="projectImageContainer">
            <img className="projectImage" src={AgeCalc}></img>
            <div className="imageOverlay">
              <button className="openButton">
                <a
                  href="https://deluxe-sprite-40889e.netlify.app/"
                  target="_blank"
                >
                  <GrAddCircle size={35} className="gr-add-circle-icon" />
                </a>
              </button>
              <div className="imageOverlay__title">Age Calculator</div>
              <div className="imageOverlay__desc">
                Put in your bday and see how old you are!
              </div>
            </div>
          </div>
          <div className="flexColCenter ">
            {/* <h3 className="orangeText">My Submissions for FrontEnd Manager</h3>
            <Link to="/FEM" target="_blank">
              <button>Click Here!</button>
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}
