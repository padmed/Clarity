import { containerHeight, containerWidth } from "./constants";

const selection = window.getSelection();

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

const isInTop = isInTopHalf(selection);
const { top, left, bottom, right } = getSelectionCords(selection);

// Vertical position when shown
const verticalPos = isInTop ? bottom + 10 : top - containerHeight - 10;
// Vertical position when hidden
const verticalPosHidden = isInTop
  ? verticalPos - containerHeight / 2
  : verticalPos + containerHeight / 2;
const horizontalPos = (left + right) / 2 - containerWidth / 2;

export { verticalPos, verticalPosHidden, horizontalPos, isInTop };
