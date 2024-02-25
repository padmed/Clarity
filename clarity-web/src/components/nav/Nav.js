import styles from "./nav.module.scss";
import Logo from "../logo/Logo";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
    </nav>
  );
};

export default Nav;
