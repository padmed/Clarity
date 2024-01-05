import { openPopupAnimation } from "../utils/animations";
import createArrow from "./arrow";
import createFadeOut from "./fadeOut";
import createPopupContainer from "./popupContainer";
import createPopupContent from "./popupContent";
import { verticalPos, horizontalPos, isInTop } from "../utils/coordinates";

const arrow = createArrow(isInTop);
const popupContent = createPopupContent();
const fadeOutBottom = createFadeOut("bottom");
const fadeOutTop = createFadeOut("top");
const popupContainer = createPopupContainer(
  verticalPos,
  horizontalPos,
  isInTop
);

popupContainer.appendChild(fadeOutBottom);
popupContainer.appendChild(fadeOutTop);
popupContainer.appendChild(arrow);
popupContainer.appendChild(popupContent);

openPopupAnimation(verticalPos);

export default popupContainer;
