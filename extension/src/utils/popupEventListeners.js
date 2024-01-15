import { closePopupAnimation } from "./animations";
import {
  getPopupContainer,
  getRootContainer,
  getShadowRoot,
} from "./getElements";

let isMouseInside = false;
// Counter for smooth popup close
let scrollCount = 0;
const maxScrollCount = 50;

const handlePopupClose = () => {
  const rootContainer = getRootContainer();
  const popupContainer = getPopupContainer();

  closePopupAnimation();

  // Removes popup from DOM
  setTimeout(() => {
    rootContainer.remove();
  }, 200);

  // Removing all the listeners
  document.removeEventListener("click", handleEvent);
  window.removeEventListener("scroll", handleEvent);
  popupContainer.removeEventListener("mouseover", handleMouseEnter);
  popupContainer.removeEventListener("mouseout", handleMouseLeave);
};

const handleMouseEnter = () => {
  isMouseInside = true;
};

const handleMouseLeave = () => {
  isMouseInside = false;
};

const handleEvent = (e) => {
  const root = getShadowRoot();

  if (e.target.shadowRoot !== root && !isMouseInside) {
    scrollCount++;

    if (e.type === "scroll" && scrollCount >= maxScrollCount) {
      handlePopupClose();
    } else if (e.type === "click") {
      handlePopupClose();
    }
  }
};

const listenPopupEvents = () => {
  const popupContainer = getPopupContainer();
  document.addEventListener("click", handleEvent);
  window.addEventListener("scroll", handleEvent);

  // Add listeners for mouseover and mouseout events on the popup container
  popupContainer.addEventListener("mouseover", handleMouseEnter);
  popupContainer.addEventListener("mouseout", handleMouseLeave);
};

export default listenPopupEvents;
