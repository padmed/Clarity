import { getPopupContainer, getPopupContent } from "./getElements";
import { verticalPosHidden } from "./coordinates";
import { LOADER_CLASSNAME } from "./constants";
import createLoader from "../components/loader";

const OPEN_POPUP_DELAY = 100;
const HIDDEN_VERTICAL_POSITION = verticalPosHidden;
const LOADER_SCALE = 0;
const LOADER_SHOW_SCALE = 1;

export const openPopupAnimation = (verticalPos) => {
  setTimeout(() => {
    const popup = getPopupContainer();
    popup.style.transform = `scale(${LOADER_SHOW_SCALE})`;
    popup.style.top = `${verticalPos}px`;
  }, OPEN_POPUP_DELAY);
};

export const closePopupAnimation = () => {
  const popup = getPopupContainer();
  popup.style.transform = `scale(${LOADER_SCALE})`;
  popup.style.top = `${HIDDEN_VERTICAL_POSITION}px`;
};

export const showLoader = () => {
  const popupContent = getPopupContent();
  if (popupContent) {
    const loader = createLoader();
    popupContent.appendChild(loader);
  }
};

export const hideLoader = () => {
  const popupContent = getPopupContent();
  if (popupContent) {
    const loader = popupContent.querySelector(`.${LOADER_CLASSNAME}`);
    loader.style.transform = `scale(${LOADER_SCALE})`;
  }
};
