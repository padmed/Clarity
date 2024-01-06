import { getPopupContainer } from "./helpers";
import { verticalPosHidden } from "./coordinates";

export const openPopupAnimation = (verticalPos) => {
  setTimeout(() => {
    const popup = getPopupContainer();

    popup.style.transform = "scale(1)";
    popup.style.top = `${verticalPos}px`;
  }, 100);
};

// export const popupCloseAnimation = () => {
//   const root = getShadowRoot();
//   const popup = root.querySelector("#popupContainer");
//   popup.style.transform = `scale(0)`;
//   popup.style.top = `${verticalPosHidden}px`;
// };

export const closePopupAnimation = () => {
  const popup = getPopupContainer();
  popup.style.transform = `scale(0)`;
  popup.style.top = `${verticalPosHidden}px`;
};
