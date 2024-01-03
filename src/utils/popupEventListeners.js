import { popupCloseAnimation } from "../components/popup";
let scrollCount = 0;
const maxScrollCount = 50;

const handlePopupClose = () => {
  const popupContainer = document.querySelector("#popupContainer");

  popupContainer.style.transform = `scale(0)`;

  popupCloseAnimation();

  setTimeout(() => {
    popupContainer.remove();
  }, 200);

  document.removeEventListener("click", handleEvent);
  window.removeEventListener("scroll", handleEvent);
};

const handleEvent = (e) => {
  const popupContainer = document.querySelector("#popupContainer");

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
