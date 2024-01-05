import { popupId } from "../utils/constants";
import { containerHeight, containerWidth } from "../utils/constants";

const createPopupContainer = (verticalPos, horizontalPos, isInTop) => {
  const popupContainer = document.createElement("div");
  popupContainer.setAttribute("id", popupId);

  const verticalPosHidden = isInTop
    ? verticalPos - containerHeight / 2
    : verticalPos + containerHeight / 2;

  popupContainer.style.cssText = `
    transform: scale(0);
    transition: all linear 0.2s;
    width: ${containerWidth}px;
    height: ${containerHeight}px;
    background-color: rgba(27, 18, 18, 0.8);
    position: absolute;
    z-index: 30000;
    border-radius: 7px;
    backdrop-filter: blur(5px);
    top: ${verticalPosHidden}px;
    left: ${horizontalPos}px;
    box-shadow: 0px 0px 10px rgba(27, 18, 18, 0.7);
    color: white;
    `;

  return popupContainer;
};

export default createPopupContainer;
