import React from 'react';
import { getImageUrl } from '../../util';
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>I'll be happy to help you in what you need</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/> 
                <a href="mailto:juanse2807@outlook.es">juanse2807@outlook.es</a>   
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/> 
                <a href="https://github.com/jusnse2807">github.com/jusnse2807</a>   
            </li>
        </ul>

    </footer>
  )
}
