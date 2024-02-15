import { generateText } from "./services/index.js";
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

const initApp = () => {
  if (getRootContainer()) {
    handlePopupClose();
  }
  injectFonts();
  createRootContainer();
  createShadowRoot();
  listenPopupEvents();

  // Opening a popup
  openPopupAnimation(verticalPos);
  showLoader();
};

initApp();
const selection = window.getSelection();

generateText(selection.toString())
  .then((data) => {
    hideLoader();
    const text = data.results[0].generated_text;
    writeInPopupContent(text);
  })
  .catch((e) => {
    hideLoader();
    const text = "Temporary out of service";
    writeInPopupContent(text);
    logger.error(e);
  });
