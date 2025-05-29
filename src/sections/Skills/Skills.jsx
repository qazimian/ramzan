import React from "react";
import styles from "./SkillsStyle.module.css";
import checkMarkLight from "../../assets/checkmark-light.svg";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/useTheme";

function Skills() {
  const { theme } = useTheme();
   const checkMarkIcon = theme === "light" ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="JS"/>
        <SkillList src={checkMarkIcon} skill="ReactJS"/>
        <SkillList src={checkMarkIcon} skill="SQL Server"/>
        
      </div>
      <hr/><div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Bootstrap"/>
        <SkillList src={checkMarkIcon} skill="TailwindCSS"/>
        <SkillList src={checkMarkIcon} skill="ASP.Net"/>
      </div>
      <hr/><div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MS Office"/>
        <SkillList src={checkMarkIcon} skill="Git"/>
        <SkillList src={checkMarkIcon} skill="POWER BI"/>
        <SkillList src={checkMarkIcon} skill="Tableau"/>
      </div>
      <hr/>
    </section>
  );
}

export default Skills;
