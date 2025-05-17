import React, { useState } from "react";
import style from "./NavbarStyle.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className={style.container}>
      <div className={style.logo}>
        <a href="#hero" onClick={closeNavbar}>M. Ramzan</a>
      </div>
      <ul className={style.navLinks}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* hamburger ICon */}
      <div className={style.hamburger} onClick={toggleNavbar}>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </div>

      {/* sidebar menu */}
      <div className={`${style.sidebar} ${isOpen ? style.show : ""}`}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {isOpen && <div className={style.overlay} onClick={closeNavbar}></div>}
    </nav>
  );
};

export default Navbar;
