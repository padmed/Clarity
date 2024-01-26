import styles from "./nav.module.scss";
import Logo from "../logo/Logo";
import Image from "next/image";
import WaveBGHeading from "@/public/svgs/WaveBGHeading.svg";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <Image
        src={WaveBGHeading}
        width={1512}
        height={60}
        className={styles.waveBg}
        alt="minimalistic illustration"
      ></Image>
    </nav>
  );
};

export default Nav;
