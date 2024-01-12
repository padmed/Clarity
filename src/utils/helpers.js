import { getPopupContent } from "./getElements";
import createHeading from "../components/heading";

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

export const writeInPopupContent = (textToWrite) => {
  const popupContent = getPopupContent();
  if (!popupContent) {
    console.error("Popup content not found");
    return;
  }

  let i = 0;
  const speed = 2;

  const heading = createHeading();
  if (!heading) {
    console.error("Failed to create heading");
    return;
  }

  popupContent.appendChild(heading);

  const typeWriter = () => {
    if (i < textToWrite.length) {
      let char = textToWrite.charAt(i);
      popupContent.innerHTML += char;
      i++;

      setTimeout(typeWriter, speed);
    }
  };

  typeWriter();
};
