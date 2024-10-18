import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../util";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me chilling posing with a waterfall ahead"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Systems engineering student</h3>
              <p>
                I'm a student from EIA university located in Colombia, I am 18
                years old and I can speak 2 languages
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Interest in learning</h3>
              <p>
                I started to coding at 16 years old, motivated with the idea of
                convert increadible ideas into reality
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
