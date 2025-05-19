import React from "react";
import styles from "./ProjectsStyle.module.css";
import viber from "../../assets/viberr.png";
import hipsster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.cardFrame}>
          <ProjectCard
            src={viber}
            link="https://www.google.com"
            h3={"Ramzan-Todo"}
            p={"Todo List App"}
            github={"https://www.github.com/qazimian"}
            liveDemo={"https://ramzantodo.netlify.app/"}
          />
        </div>
        <div className={styles.cardFrame}>
          <ProjectCard
            className={styles.projectCard}
            src={hipsster}
            link="https://www.google.com"
            h3={"Ramzan-Weather"}
            p={"Weather App"}
            github={"https://www.github.com/qazimian"}
            liveDemo={"https://ramzantodo.netlify.app/"}
          />
        </div>
        <div className={styles.cardFrame}>
          <ProjectCard
            src={freshBurger}
            link="https://www.google.com"
            h3={"Ramzan-Game"}
            p={"Rock Paper Sciessor"}
            github={"https://www.github.com/qazimian"}
            liveDemo={"https://ramzantodo.netlify.app/"}
          />
        </div>
        <div className={styles.cardFrame}>
          <ProjectCard
            src={fitlift}
            link="https://www.google.com"
            h3={"Ramzan-Ecommerce"}
            p={"Shopping Website"}
            github={"https://www.github.com/qazimian"}
            liveDemo={"https://ramzantodo.netlify.app/"}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
