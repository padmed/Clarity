import { generateText } from "./services";
import popup from "./components/popup.js";

const selection = window.getSelection();
// generateText(selection.toString()).then((data) => {
//   const text = data.results[0].generated_text;
//   console.log(text);
// });

const popupContent = popup.querySelector("#popupContent");
popupContent.innerHTML = selection.toString();

document.body.insertAdjacentHTML("afterbegin", popup.outerHTML);
