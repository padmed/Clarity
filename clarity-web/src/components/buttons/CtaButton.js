"use client";
import styles from "./buttons.module.scss";
import Button from "@mui/material/Button";
import { libre_baskerville } from "@/styles/fonts";
import { useEffect, useState } from "react";

const CtaButton = ({ variant, children, size, position }) => {
  const [sizeClassname, setSizeClassname] = useState("");
  const [variantClassname, setVariantClassname] = useState("");

  useEffect(() => {
    switch (size) {
      case "s":
        setSizeClassname(styles.small);
        break;
      case "m":
        setSizeClassname(styles.medium);
        break;
      case "l":
        setSizeClassname(styles.large);
        break;
      default:
        setSizeClassname(styles.medium);
        break;
    }

    switch (variant) {
      case "red":
        setVariantClassname(styles.buttonRed);
        break;
      case "white":
        setVariantClassname(styles.buttonWhite);
        break;
      default:
        setVariantClassname(styles.buttonRed);
        break;
    }
  }, []);

  return (
    <Button
      style={{ ...position }}
      className={` ${styles.button} ${variantClassname} ${libre_baskerville.className} ${styles.getOnChrome} ${sizeClassname}`}
    >
      {children}
    </Button>
  );
};

export default CtaButton;
