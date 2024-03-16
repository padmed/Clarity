import styles from "../onboarding.module.scss";
import { libre_baskerville } from "@/styles/fonts";

import TextContainer from "@/components/textContainers/textContainer";

const mockText = `The Tower of Babel, a biblical symbol of human ambition, 
                  recounts a tale of linguistic chaos and divine intervention. 
                  As humanity strives to build a tower to the heavens, 
                  their unified language is disrupted, leading to the scattering of people across the Earth. 
                  This brief narrative encapsulates the profound consequences of unchecked 
                  aspirations and the elusive nature of understanding, offering a timeless 
                  reflection on the complexities of communication.`;

const Success = () => {
  return (
    <div
      className={`${styles.container} ${styles.successContainer} ${libre_baskerville.className}`}
    >
      <h1 className={styles.heading}>You're ready to go!</h1>
      <h4 className={styles.subHeading}>
        Want to try the extension? Use the text below...
      </h4>
      <TextContainer text={mockText}></TextContainer>
    </div>
  );
};

export default Success;
