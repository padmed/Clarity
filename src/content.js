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

document.addEventListener("click", (e) => {
  const popupContainer = document.querySelector("#popupContainer");
  if (!popupContainer.contains(e.target)) {
    popupContainer.style.transform = `scale(0)`;
    popupContainer.style.top = "300px";
  }
});

let scrollCount = 0;
const maxScrollCount = 50;
window.addEventListener("scroll", (e) => {
  const popupContainer = document.querySelector("#popupContainer");
  if (!popupContainer.contains(e.target)) {
    scrollCount++;
    if (scrollCount >= maxScrollCount) {
      popupContainer.style.transform = `scale(0)`;
      popupContainer.style.top = 100;
    }
  }
});
