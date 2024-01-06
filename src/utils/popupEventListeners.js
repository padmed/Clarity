import { closePopupAnimation } from "./animations";
import { getPopupContainer } from "./helpers";

// Counter for smooth popup close
let scrollCount = 0;
const maxScrollCount = 50;

const handlePopupClose = () => {
  const popupContainer = getPopupContainer();

  closePopupAnimation();

  // Removes popup from DOM
  setTimeout(() => {
    popupContainer.remove();
  }, 200);

  // Removing all the listeners
  document.removeEventListener("click", handleEvent);
  window.removeEventListener("scroll", handleEvent);
};

const handleEvent = (e) => {
  const popupContainer = getPopupContainer();

  if (!popupContainer.contains(e.target)) {
    scrollCount++;

    if (e.type === "scroll" && scrollCount >= maxScrollCount) {
      handlePopupClose();
    } else if (e.type === "click") {
      handlePopupClose();
    }
  }
};

const listenPopupEvents = () => {
  document.addEventListener("click", handleEvent);
  window.addEventListener("scroll", handleEvent);
};

export default listenPopupEvents;
