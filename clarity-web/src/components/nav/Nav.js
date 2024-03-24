import styles from "./nav.module.scss";
import Logo from "../logo/Logo";
import CtaButton from "../buttons/CtaButton";

const Nav = ({ showButton }) => {
  return (
    <nav className={styles.nav}>
      <Logo />
      {showButton && <CtaButton variant={1} />}
    </nav>
  );
};

export default Nav;
