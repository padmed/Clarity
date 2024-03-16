import SignInGoogleBtn from "@/components/buttons/SignInGoogleBtn";
import styles from "../onboarding.module.scss";
import { libre_baskerville } from "@/styles/fonts";

const SignIn = () => {
  return (
    <div
      className={`${styles.signinContainer} ${styles.container} ${libre_baskerville.className}`}
    >
      <h1 className={styles.heading}>Let&apos;s get started</h1>
      <h4 className={styles.subHeading}>Sign in to get access immediately!</h4>
      <SignInGoogleBtn />
    </div>
  );
};

export default SignIn;
