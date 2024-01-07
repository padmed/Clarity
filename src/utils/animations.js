import { getPopupContainer, getPopupContent } from "./helpers";
import { verticalPosHidden } from "./coordinates";
import { loaderClassName } from "./constants";
import createLoader from "../components/loader";

export const openPopupAnimation = (verticalPos) => {
  setTimeout(() => {
    const popup = getPopupContainer();

    popup.style.transform = "scale(1)";
    popup.style.top = `${verticalPos}px`;
  }, 100);
};

export const closePopupAnimation = () => {
  const popup = getPopupContainer();
  popup.style.transform = `scale(0)`;
  popup.style.top = `${verticalPosHidden}px`;
};

export const showLoader = () => {
  const popupContent = getPopupContent();
  const loader = createLoader();
  popupContent.appendChild(loader);
};

export const hideLoader = () => {
  const popupContent = getPopupContent();
  const loader = popupContent.querySelector(`.${loaderClassName}`);
  loader.style.transform = "scale(0)";
};
