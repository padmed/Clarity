import { generateText } from "./services";
import popup from "./components/popup.js";
import listenPopupEvents from "./utils/popupEventListeners.js";

const selection = window.getSelection();
// generateText(selection.toString()).then((data) => {
//   const text = data.results[0].generated_text;
//   console.log(text);
// });

const popupContent = popup.querySelector("#popupContent");
popupContent.innerHTML = selection.toString();
listenPopupEvents();
document.body.insertAdjacentHTML("afterbegin", popup.outerHTML);
