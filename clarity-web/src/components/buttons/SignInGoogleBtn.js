"use client";
import styles from "./buttons.module.scss";
import Image from "next/image";
import Button from "@mui/material/Button";
import { libre_baskerville } from "@/styles/fonts";

const SignInGoogleBtn = () => {
  const handleClick = () => {
    const clarityExtensionId = "mfbigjpknmeflcogckmjhpghdjbfpmle";

    chrome.runtime.sendMessage(
      clarityExtensionId,
      { message: "signInRequest" },
      function (response) {
        if (!response.success) console.log("error");
      }
    );
  };

  return (
    <Button
      className={`${styles.googleSignin} ${libre_baskerville.className}`}
      onClick={handleClick}
    >
      <Image
        src={"/icons/google.svg"}
        width={27}
        height={30}
        alt="google icon"
      ></Image>
      <span className={styles.line}></span>
      <span>Sign In with Google</span>
    </Button>
  );
};

export default SignInGoogleBtn;
