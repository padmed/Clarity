import listenPopupEvents, {
  handlePopupClose,
} from "./utils/popupEventListeners.js";
import { writeInPopupContent } from "./utils/writeInPopupContent.js";
import { hideLoader } from "./utils/animations.js";
import { openPopupAnimation, showLoader } from "./utils/animations.js";
import { verticalPos } from "./utils/coordinates.js";
import { getRootContainer } from "./utils/getElements.js";
import { createRootContainer, createShadowRoot } from "./components/root.js";
import { injectFonts } from "./utils/injectInDom.js";
import logger from "./utils/logger.js";
import generateText from "./utils/generateText.js";

const openPopupWithGeneratedText = async () => {
  openPopupAnimation(verticalPos);
  showLoader();

  try {
    const prompt = window.getSelection().toString();
    const generatedText = await generateText(prompt);
    hideLoader();
    writeInPopupContent(generatedText);
  } catch (e) {
    hideLoader();
    const error = "Something went wrong";
    writeInPopupContent(error);
    logger.error(e);
  }
};

const initApp = async () => {
  // Handle popup close if it already exists
  if (getRootContainer()) {
    handlePopupClose();
  }
  injectFonts();
  createRootContainer();
  createShadowRoot();
  listenPopupEvents();

  await openPopupWithGeneratedText();
};

initApp();
