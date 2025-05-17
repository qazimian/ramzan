import React from "react";
import style from "./NavbarStyle.module.css";

const Navbar = () => {
  return (
    <nav className={style.container} id="navbar">
      <div className={style.logo}><a href="#hero">M. Ramzan</a></div>
      <div>
        <ul className={style.navLinks}>
          <li>
            <a href="#about">About </a>
          </li>
          <li>
            <a href="#projects"> Projects </a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact"> Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
