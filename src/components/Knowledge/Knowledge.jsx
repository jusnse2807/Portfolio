import React from "react";
import { getImageUrl } from "../../util";
import skills from "../../data/skills.json";
import styles from "./Knowledge.module.css";


export const Knowledge = () => {
  return (
    <section className={styles.container} id="knowledge">
      <h2 className={styles.title}>Knowledge</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
