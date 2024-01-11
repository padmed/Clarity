import { generateText } from "./services";
import popup from "./components/popup.js";
import listenPopupEvents from "./utils/popupEventListeners.js";
import { rootContainerId } from "./utils/constants.js";
import { writeInPopupContent } from "./utils/helpers.js";
import { hideLoader } from "./utils/animations.js";
import { openPopupAnimation, showLoader } from "./utils/animations.js";
import { verticalPos } from "./utils/coordinates.js";
import { getLoaderStyles } from "./components/loader.js";

const injectFonts = () => {
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap";
  document.head.appendChild(fontLink);
};

const createRootContainer = () => {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", rootContainerId);
  document.body.insertAdjacentHTML("afterbegin", rootContainer.outerHTML);
};

const createShadowRoot = () => {
  const loaderStyles = getLoaderStyles();
  const shadowRoot = document
    .getElementById(rootContainerId)
    .attachShadow({ mode: "open" });

  shadowRoot.innerHTML = `
  <style>
  ${loaderStyles}
 </style>
  ${popup.outerHTML}`;
};

injectFonts();
createRootContainer();
createShadowRoot();
listenPopupEvents();

// Opening a popup
openPopupAnimation(verticalPos);
showLoader();

const selection = window.getSelection();

// generateText(selection.toString()).then((data) => {
//   hideLoader();
//   const text = data.results[0].generated_text;
//   console.log(text);
//   writeInPopupContent(text);
// });

setTimeout(() => {
  hideLoader();
  writeInPopupContent(selection.toString());
}, 2000);
