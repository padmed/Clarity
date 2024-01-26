import styles from "./logo.module.scss";
import { libre_bodoni } from "@/styles/fonts";

const Logo = () => {
  return (
    <div>
      <span
        className={`${styles.logo} ${styles.logoHeading} ${libre_bodoni.className}`}
      >
        Clarity.
      </span>
    </div>
  );
};

export default Logo;
