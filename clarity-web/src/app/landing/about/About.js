// "use client";
import styles from "./about.module.scss";
// import { motion } from "framer-motion";

const About = () => {
  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delayChildren: 0.5,
  //     },
  //   },
  // };
  return (
    <div id={styles.About}>
      <div id={styles.AboutHeading}>
        <span>What do we solve?</span>
      </div>
      <div className={styles.AboutSectionWrapper}>
        <div
          // initial="hidden"
          // animate="show"
          // variants={container}
          className={styles.TextContainer}
          id={styles.TextContainerLeft}
        >
          <h4 className={styles.AboutSubHeading}>The Problem</h4>
          <p className={styles.AboutContent}>
            In a world full of confusing technical jargon, it's like we're
            speaking different languages. This makes it tough for us to share
            ideas and learn from each other. We're missing out on cool stuff!
            Let's fix that.
          </p>
          <div className={styles.ContainerArrowPointer}></div>
        </div>
        <div
          // initial="hidden"
          // animate="show"
          // variants={container}
          className={styles.TextContainer}
          id={styles.TextContainerRight}
        >
          <h4 className={styles.AboutSubHeading}>Clarity</h4>
          <p className={styles.AboutContent}>
            Imagine turning complex talk into plain and simple language that
            everyone can get. That's what we're about – making things clear,
            bringing people together, and unlocking a world of shared knowledge.
            It's time to break down the barriers and make understanding each
            other a breeze!
          </p>
          <div className={styles.ContainerArrowPointer}></div>
        </div>
      </div>
    </div>
  );
};

export default About;
