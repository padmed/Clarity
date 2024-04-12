import styles from "./nav.module.scss";
import Logo from "../logo/Logo";
import CtaButton from "../buttons/CtaButton";

const Nav = ({ showButton }) => {
  return (
    <nav className={styles.nav}>
      <Logo />
      {showButton && (
        <CtaButton
          classNames={styles.navButton}
          variant={"red"}
          size={"s"}
          position={{ marginLeft: "auto" }}
        >
          Get it on Chrome
        </CtaButton>
      )}
    </nav>
  );
};

export default Nav;
