import React from "react";
import styles from "./ProjectsStyle.module.css";
import todo from "../../assets/todo-app.png";
import weather from "../../assets/weather-app.png";
import cc from "../../assets/ramzan-currency-converter.png";
import irfan from "../../assets/drirfan.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.cardFrame}>
          <ProjectCard
            src={todo}
            link="https://ramzantodo.netlify.app/"
            h3={"Ramzan-Todo"}
            p={"Todo List App"}
            github={"https://www.github.com/qazimian"}
            liveDemo={"https://ramzantodo.netlify.app/"}
          />
        </div>
        <div className={styles.cardFrame}>
          <ProjectCard
            className={styles.projectCard}
            src={weather}
            link="https://ramzanweather.netlify.app/"
            h3={"Ramzan-Weather"}
            p={"Weather App"}
            github={"https://www.github.com/qazimian"}
            liveDemo={"https://ramzanweather.netlify.app/"}
          />
        </div>
        <div className={styles.cardFrame}>
          <ProjectCard
            src={cc}
            link="https://ramzan-currency-converter.netlify.app/"
            h3={"Ramzan-Game"}
            p={"Rock Paper Sciessor"}
            github={"https://www.github.com/qazimian"}
            liveDemo={"https://ramzan-currency-converter.netlify.app/"}
          />
        </div>
        <div className={styles.cardFrame}>
          <ProjectCard
            src={irfan}
            link="https://drirfan.netlify.app/"
            h3={"Dr Irfan"}
            p={"psychiatrist Portfolio"}
            github={"https://www.github.com/qazimian"}
            liveDemo={"https://drirfan.netlify.app/"}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
