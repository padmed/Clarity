"use client";
import styles from "./buttons.module.scss";
import Image from "next/image";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { libre_baskerville } from "@/styles/fonts";
import { useState } from "react";

const SignInGoogleBtn = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    const clarityExtensionId = "mfbigjpknmeflcogckmjhpghdjbfpmle";
    setLoading(true);

    chrome.runtime.sendMessage(
      clarityExtensionId,
      { message: "signInRequest" },
      function (response) {
        if (!response.success) {
          console.log("Error signing in with Google");
        } else {
          console.log("Signed in with Google");
        }
        setLoading(false);
      }
    );
  };

  return (
    <Button
      className={`${styles.googleSignin} ${styles.buttonRed} ${
        loading ? styles.loading : styles.notLoading
      } ${libre_baskerville.className}`}
      onClick={handleClick}
    >
      {loading ? (
        <CircularProgress size={30} className={styles.progress} />
      ) : (
        <>
          <Image
            src={"/icons/google.svg"}
            width={27}
            height={30}
            alt="google icon"
          ></Image>
          <span className={styles.line}></span>
          <span>Sign In with Google</span>
        </>
      )}
    </Button>
  );
};

export default SignInGoogleBtn;
