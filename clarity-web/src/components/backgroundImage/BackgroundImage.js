"use client";
import styles from "./backgroundImage.module.scss";
import { useEffect, useState } from "react";

function BackgroundImage() {
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleWindowResize = () => {
      // Clear previous timeout
      clearTimeout(timeoutId);

      // Set a new timeout to update the state after 500ms
      setIsResizing(true);
      timeoutId = setTimeout(() => {
        setIsResizing(false);
      }, 500);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      // Clean up event listener
      window.removeEventListener("resize", handleWindowResize);

      // Clear any pending timeouts
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`${styles.backgroundImage} ${
        isResizing ? styles.isResizing : styles.notResizing
      }`}
    />
  );
}

export default BackgroundImage;
