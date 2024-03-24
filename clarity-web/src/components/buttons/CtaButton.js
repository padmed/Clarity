"use client";

import styles from "./buttons.module.scss";
import Button from "@mui/material/Button";
import { libre_baskerville } from "@/styles/fonts";

const CtaVariant1 = () => {
  const handleClick = () => {
    window.open(
      "https://chrome.google.com/webstore/detail/clarity/mfbigjpknmeflcogckmjhpghdjbfpmle"
    );
  };

  return (
    <Button
      className={`${styles.buttonRed} ${libre_baskerville.className} ${styles.getOnChrome}`}
      onClick={handleClick}
    >
      <span>Get it on Chrome</span>
    </Button>
  );
};

const CtaButton = (variant) => {
  switch (variant) {
    case 1:
      return <CtaVariant1 />;
    default:
      return <CtaVariant1></CtaVariant1>;
  }
};

export default CtaButton;
