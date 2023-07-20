import React from "react";
import styles from "./pages.module.css";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <div>
      <section id="projects" className="projects-wrapper">
        <div className="paddings innerWidth flexColCenter projects-container">
          <h1 className="primaryText projectsTitle">My Projects</h1>

          <div className="flexColCenter projectContent">
            <h3 className="orangeText">My Submissions for FrontEnd Manager</h3>
            <Link to="/FEM" target="_blank">
              <button>Click Here!</button>
            </Link>
          </div>
          <div className="flexColCenter projectContent">
            <h1 className="orangeText">Try My Age Calculator!</h1>
            <button>
              <a
                href="https://deluxe-sprite-40889e.netlify.app/"
                target="_blank"
              >
                Click Here!
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
