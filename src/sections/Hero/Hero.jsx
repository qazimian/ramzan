import styles from "./HeroStyle.module.css";
import heroImg from "../../assets/hero-img2.png";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import githubLightIcon from "../../assets/github-light.svg";
import githubDarkIcon from "../../assets/github-dark.svg";
import twitterLightIcon from "../../assets/twitter-light.svg";
import twitterDarkIcon from "../../assets/twitter-dark.svg";
import linkedinLightIcon from "../../assets/linkedin-light.svg";
import linkedindarkIcon from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/useTheme";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sunIcon : moonIcon;
  const twitterIcon = theme === "light" ? twitterLightIcon : twitterDarkIcon;
  const linkedinIcon = theme === "light" ? linkedinLightIcon : linkedindarkIcon;
  const githubIcon = theme === "light" ? githubLightIcon : githubDarkIcon;

  return (
    <section className={styles.container} id="hero">
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="profile picture"></img>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Toggle Theme"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Muhammad <br />
          Ramzan
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="http://www.github.com/qazimian" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <img src={linkedinIcon} alt="" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern react web apps for commercial
          bussinses
        </p>
        <a href={CV} download>
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
