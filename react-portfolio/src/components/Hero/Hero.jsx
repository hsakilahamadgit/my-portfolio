import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Shakil Ahamad</h1>
        <p className={styles.description}>
          Hey there! I'm Full Stack Developer pumped to join forces and craft
          amazing tech together. Let's dive in!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        // src={getImageUrl("hero/hamidd.png")}
        src={getImageUrl("hero/shakilc.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
