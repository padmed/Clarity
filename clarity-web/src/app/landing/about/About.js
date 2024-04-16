import styles from "./about.module.scss";
import BubbleContainer from "@/components/textContainers/BubbleContainer";

const About = () => {
  return (
    <div id={styles.About}>
      <div id={styles.AboutHeading}>
        <span>What do we solve?</span>
      </div>
      <div className={styles.AboutSectionWrapper}>
        <BubbleContainer>
          <h4 className={styles.AboutSubHeading}>The Problem</h4>
          <p className={styles.AboutContent}>
            In a world full of confusing technical jargon, it's like we're
            speaking different languages. This makes it tough for us to share
            ideas and learn from each other. We're missing out on cool stuff!
            Let's fix that.
          </p>
        </BubbleContainer>
        <BubbleContainer right>
          <h4 className={styles.AboutSubHeading}>Clarity</h4>
          <p className={styles.AboutContent}>
            Imagine turning complex talk into plain and simple language that
            everyone can get. That's what we're about – making things clear,
            bringing people together, and unlocking a world of shared knowledge.
            It's time to break down the barriers and make understanding each
            other a breeze!
          </p>
        </BubbleContainer>
      </div>
    </div>
  );
};

export default About;
