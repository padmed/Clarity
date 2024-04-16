"use client";
import { motion } from "framer-motion";
import styles from "./textContainers.module.scss";

const BubbleContainer = ({ children, right }) => {
  const variants = {
    offscreen: {
      scale: 0,
      y: 100,
      x: -100,
    },
    onscreen: {
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
      className={styles.BubbleTextContainer}
      id={right ? styles.TextContainerRight : styles.TextContainerLeft}
    >
      {children}
      <div className={styles.ContainerArrowPointer}></div>
    </motion.div>
  );
};

export default BubbleContainer;
