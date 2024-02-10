"use client";
import styles from "./buttons.module.scss";
import Image from "next/image";

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
    <button className={styles.googleSignin} onClick={handleClick}>
      <Image
        src={"/icons/google.svg"}
        width={27}
        height={30}
        alt="google icon"
      ></Image>
      <span className={styles.line}></span>
      <span>Sign In with Google</span>
    </button>
  );
};

export default SignInGoogleBtn;
