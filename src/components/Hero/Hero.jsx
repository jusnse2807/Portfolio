import React from "react";
import { getImageUrl } from "../../util";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Juanse</h1>
        <p className={styles.description}>
          I'm a code developer with lack of experience but with a lot of
          enthusiasm, I mostly use react.
          <p className={styles.description}>
            Keep scrolling to know more of me
          </p>
        </p>
        <a className={styles.contactBtn} href="#contact">
        Contact now
        </a>
      </div>
      <img
        src={getImageUrl("hero/HeroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={StyleSheet.topBlur} />
      <div className={StyleSheet.bottomBlur} />
    </section>
  );
};
