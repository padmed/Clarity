import { generateText } from "./services";
import popup from "./components/popup.js";
import listenPopupEvents from "./utils/popupEventListeners.js";
import {
  popupContentId,
  rootContainerId,
  loaderClassName,
} from "./utils/constants.js";

const selection = window.getSelection();
// // generateText(selection.toString()).then((data) => {
// //   const text = data.results[0].generated_text;
// //   console.log(text);
// // });

const popupContent = popup.querySelector(`#${popupContentId}`);
// popupContent.innerHTML = selection.toString();
listenPopupEvents();

const rootContainer = document.createElement("div");
rootContainer.setAttribute("id", rootContainerId);
document.body.insertAdjacentHTML("afterbegin", rootContainer.outerHTML);

const shadowRoot = document
  .getElementById(rootContainerId)
  .attachShadow({ mode: "open" });

shadowRoot.innerHTML = `
  <style>
/* HTML: <div class="loader"></div> */
.${loaderClassName} {
  width: 35px;
  aspect-ratio: 1;
  display: grid;
}
.${loaderClassName}:before,
.${loaderClassName}:after {
  content: "";
  grid-area: 1/1;
  border-radius: 50%;
  background: #FFFFFF;
  -webkit-mask:repeating-linear-gradient(#000 0 5px,#0000 0 10px);
  animation: l35 1.5s infinite;
}
.${loaderClassName}:after {
  -webkit-mask:repeating-linear-gradient(#0000 0 5px,#000 0 10px);
  --s:-1;
}
@keyframes l35 {
  0%,
  10% {transform: translate(0) rotate(0)}
  35% {transform: translate(calc(var(--s,1)*50%)) rotate(0)}
  66% {transform: translate(calc(var(--s,1)*50%)) rotate(calc(var(--s,1)*180deg))}
  90%,
  100% {transform: translate(0) rotate(calc(var(--s,1)*180deg))}
}</style>
  ${popup.outerHTML}`;
