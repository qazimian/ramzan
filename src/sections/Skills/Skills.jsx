import React from "react";
import styles from "./SkillsStyle.module.css";
import checkMarkLight from "../../assets/checkmark-light.svg";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/skillList";
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
        <SkillList src={checkMarkIcon} skill="React"/>
        <SkillList src={checkMarkIcon} skill="SQL Server"/>
        <SkillList src={checkMarkIcon} skill="MS Office"/>
      </div>
      <hr/><div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="bootstrap"/>
        <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
        <SkillList src={checkMarkIcon} skill="Angular"/>
        <SkillList src={checkMarkIcon} skill="MySql"/>
        <SkillList src={checkMarkIcon} skill="C#"/>
        <SkillList src={checkMarkIcon} skill="ASP.Net"/>
      </div>
      <hr/><div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git"/>
        <SkillList src={checkMarkIcon} skill="POWER BI"/>
        <SkillList src={checkMarkIcon} skill="Tableau"/>
      </div>
      <hr/>
    </section>
  );
}

export default Skills;
