import { getPopupContent } from "./getElements";
import createHeading from "../components/heading";
import logger from "./logger";

export const writeInPopupContent = (textToWrite) => {
  const popupContent = getPopupContent();
  if (!popupContent) {
    logger.error("Popup content not found");
    return;
  }

  let i = 0;
  const speed = 2;

  const heading = createHeading();
  if (!heading) {
    logger.error("Failed to create heading");
    return;
  }

  popupContent.appendChild(heading);

  const typeWriter = () => {
    if (i < textToWrite.length) {
      let char = textToWrite.charAt(i);
      popupContent.innerHTML += char;
      i++;

      setTimeout(typeWriter, speed);
    }
  };

  typeWriter();
};
