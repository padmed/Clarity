import { generateText } from "./services";
import popup from "./components/popup.js";
import listenPopupEvents from "./utils/popupEventListeners.js";
import { rootContainerId, loaderClassName } from "./utils/constants.js";
import { writeInPopupContent } from "./utils/helpers.js";
import { hideLoader } from "./utils/animations.js";
import { openPopupAnimation, showLoader } from "./utils/animations.js";
import { verticalPos } from "./utils/coordinates.js";

// generateText(selection.toString()).then((data) => {
//   hideLoader();
//   const text = data.results[0].generated_text;
//   writeInPopupContent(text);
// });

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap";
document.head.appendChild(fontLink);

const rootContainer = document.createElement("div");
rootContainer.setAttribute("id", rootContainerId);
document.body.insertAdjacentHTML("afterbegin", rootContainer.outerHTML);

const shadowRoot = document
  .getElementById(rootContainerId)
  .attachShadow({ mode: "open" });

shadowRoot.innerHTML = `
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap');
/* HTML: <div class="loader"></div> */
#popupContent{
font-family: 'Josefin Sans', sans-serif;
color: red;
}
.${loaderClassName} {
  width: 35px;
  aspect-ratio: 1;
  display: grid;
  transition: all linear 0.1s;
  position: absolute;
  top: 80px;
  left: 160px;

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

listenPopupEvents();

// Opening a popup
openPopupAnimation(verticalPos);
showLoader();

const selection = window.getSelection();
setTimeout(() => {
  hideLoader();
  writeInPopupContent(selection.toString());
}, 3000);
