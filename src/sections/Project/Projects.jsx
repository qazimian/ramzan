import React from "react";
import styles from "./ProjectsStyle.module.css";
import viber from "../../assets/viberr.png";
import hipsster from "../../assets/hipsster.png"
import fitlift from "../../assets/fitlift.png"
import freshBurger from "../../assets/fresh-burger.png"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viber}
          link="https://www.google.com"
          h3={"Viberr"}
          p={"Streaming APP"}
        />
        <ProjectCard
          src={hipsster}
          link="https://www.google.com"
          h3={"Hipsster"}
          p={"Hipsster APP"}
        />
        <ProjectCard
          src={freshBurger}
          link="https://www.google.com"
          h3={"Fast Food"}
          p={"Fresh Burger Cafe"}
        />
        <ProjectCard
          src={fitlift}
          link="https://www.google.com"
          h3={"Fitlift"}
          p={"Fitlift GYM"}
        />
      </div>
    </section>
  );
}

export default Projects;
