import React from "react";
import style from "./styleAbout.module.css";
import profile from "../../assets/hero-img2.png";

const About = () => {
  return (
    <section className={style.container} id="about">
      <div className={style.content}>
        <div className={style.imageWrapper}>
          {/* Replace with your actual image */}
          <img
            src={profile}
            alt="Profile of M. Ramzan"
            className={style.profileImage}
          />
        </div>
        <div className={style.text}>
          <h1>About Me</h1>
          <p>
            Hello! I'm <strong>M. Ramzan</strong>, a passionate web developer
            focused on building responsive and interactive web applications
            using <strong>React.js</strong>. I enjoy turning complex problems
            into simple, beautiful, and intuitive solutions.
          </p>
          <p>
            With a strong foundation in front-end technologies and an eagerness
            to learn back-end systems, I'm constantly evolving my skills to
            become a full-stack developer.
          </p>
        </div>
        <a href="#contact">
          <button className="hover">Get in Touch</button>
        </a>
      </div>
    </section>
  );
};

export default About;
