import { isInTopHalf, getSelectionCords } from "./helpers";
import { containerHeight, containerWidth } from "./constants";

const selection = window.getSelection();
const isInTop = isInTopHalf(selection);

const { top, left, bottom, right } = getSelectionCords(selection);

const verticalPos = isInTop ? bottom + 10 : top - containerHeight - 10;
const verticalPosHidden = isInTop
  ? verticalPos - containerHeight / 2
  : verticalPos + containerHeight / 2;
const horizontalPos = (left + right) / 2 - containerWidth / 2;

export { verticalPos, verticalPosHidden, horizontalPos, isInTop };
