import { popupContentId, loaderClassName } from "./constants";

// Gets coordinates of user text selection
export const getSelectionCords = (selection) => {
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const boundingRect = range.getBoundingClientRect();

    return {
      top: boundingRect.top + window.scrollY,
      left: boundingRect.left + window.scrollX,
      bottom: boundingRect.bottom + window.scrollY,
      right: boundingRect.right + window.scrollX,
    };
  }
};

// Checks whether the selection is in top or bottom half of a screen
export const isInTopHalf = (selection) => {
  const range = selection.getRangeAt(0);
  const boundingRect = range.getBoundingClientRect();

  const verticalMidpoint = window.innerHeight / 2;

  return boundingRect.top + boundingRect.height / 2 < verticalMidpoint
    ? true
    : false;
};

// Returns the root of popup shadow DOM
export const getShadowRoot = () =>
  document.getElementById("rootContainer").shadowRoot;

// Returns the main container of popup
export const getPopupContainer = () => {
  const root = getShadowRoot();
  const popup = root.querySelector("#popupContainer");

  return popup;
};

export const getPopupContent = () => {
  const root = getShadowRoot();
  const popupContent = root.querySelector(`#${popupContentId}`);
  return popupContent;
};

export const writeInPopupContent = (textToWrite) => {
  const popupContent = getPopupContent();
  let i = 0;
  const speed = 20;

  const typeWriter = () => {
    if (i < textToWrite.length) {
      popupContent.innerHTML += textToWrite.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };

  typeWriter();
};
