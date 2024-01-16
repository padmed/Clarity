import { CONTAINER_HEIGHT, CONTAINER_WIDTH } from "./constants";

const selection = window.getSelection();

// Gets coordinates of user text selection
export const getSelectionCoords = (selection) => {
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

  return boundingRect.top + boundingRect.height / 2 < verticalMidpoint;
};

const calculateVerticalPos = (isInTop, top, bottom) => {
  // sus
  const viewportStartY = window.scrollY || window.pageYOffset;
  const viewportEndY = viewportStartY + window.innerHeight;
  const exceedsBottom = viewportEndY < bottom + CONTAINER_HEIGHT;
  const exceedsTop = viewportStartY > top - CONTAINER_HEIGHT;
  console.log(top + CONTAINER_HEIGHT);

  // Don't know what's happening here but it works
  if (exceedsBottom && isInTop) {
    return viewportEndY - CONTAINER_HEIGHT - 100;
  }
  if (exceedsTop && exceedsBottom) {
    return viewportStartY + CONTAINER_HEIGHT + 100;
  }
  // sus end

  const offset = isInTop ? 10 : -CONTAINER_HEIGHT - 10;
  return isInTop ? bottom + offset : top + offset;
};

const isInTop = isInTopHalf(selection);
const { top, left, bottom, right } = getSelectionCoords(selection);

// Vertical position when shown
const verticalPos = calculateVerticalPos(isInTop, top, bottom);

// console.log(viewportStartY, "viewport start");
// console.log(top, "top", bottom, "bottom");
// console.log(verticalPos, "popover position");
// Vertical position when hidden
const verticalPosHidden = isInTop
  ? verticalPos - CONTAINER_HEIGHT / 2
  : verticalPos + CONTAINER_HEIGHT / 2;
const horizontalPos = (left + right) / 2 - CONTAINER_WIDTH / 2;

export { verticalPos, verticalPosHidden, horizontalPos, isInTop };
