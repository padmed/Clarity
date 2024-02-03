import styles from "./nav.module.scss";
import Logo from "../logo/Logo";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <Image
        src={"/patterns/WaveBGHeading.svg"}
        width={1512}
        height={60}
        className={styles.waveBg}
        alt="minimalistic illustration"
        priority
      ></Image>
    </nav>
  );
};

export default Nav;
