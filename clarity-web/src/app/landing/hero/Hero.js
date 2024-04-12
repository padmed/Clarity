import CtaButton from "@/components/buttons/CtaButton";
import Image from "next/image";
import styles from "./hero.module.scss";
import TypeWriter from "@/components/typeWriter/TypeWriter";
import { judson } from "@/styles/fonts";

const Hero = () => {
  return (
    <div id={styles.Hero}>
      <div className={`${styles.HeroHeading} ${judson.className}`}>
        <TypeWriter />
      </div>
      <h1 className={`${styles.HeroSubHeading}`}>
        Transform Technical Jargon Into Engaging English with Our Chrome
        Extension - Unleashing Clarity in Complexity
      </h1>
      <div className={styles.buttonsPlaceholder}>
        <CtaButton variant={"red"} size={"l"} position={{}}>
          <Image src={"./icons/chrome.svg"} width={35} height={35} />
          Get it on Chrome
        </CtaButton>
        <CtaButton variant={"white"} size={"m"}>
          Learn More
        </CtaButton>
      </div>
    </div>
  );
};

export default Hero;
