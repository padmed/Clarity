import { generateText } from "./services";
import { getSelectionCords, isInTopHalf } from "./utils/helpers";

const selection = window.getSelection();
const { top, left, bottom, right } = getSelectionCords(selection);

const containerWidth = 350;
const containerHeight = 200;

const verticalPos = isInTopHalf(selection) ? bottom : top - containerHeight;
const horizontalPos = (left + right) / 2 - containerWidth / 2;

const popupContainer = document.createElement("div");
popupContainer.style.cssText = `width: ${containerWidth}px;
    height: ${containerHeight}px;
    background-color: rgba(119, 119, 119, 1);
    position: absolute;
    z-index: 30000;
    border-radius: 7px;
    top: ${verticalPos}px;
    left: ${horizontalPos}px`;

document.body.insertAdjacentHTML("afterbegin", popupContainer.outerHTML);
