import { generateText } from "./services";
import popup from "./components/popup.js";
import listenPopupEvents from "./utils/popupEventListeners.js";
import { popupContentId, rootContainerId } from "./utils/constants.js";

const selection = window.getSelection();
// // generateText(selection.toString()).then((data) => {
// //   const text = data.results[0].generated_text;
// //   console.log(text);
// // });

const popupContent = popup.querySelector(`#${popupContentId}`);
popupContent.innerHTML = selection.toString();
listenPopupEvents();

const rootContainer = document.createElement("div");
rootContainer.setAttribute("id", rootContainerId);
document.body.insertAdjacentHTML("afterbegin", rootContainer.outerHTML);

const shadowRoot = document
  .getElementById(rootContainerId)
  .attachShadow({ mode: "open" });

shadowRoot.innerHTML = `
  ${popup.outerHTML}`;
