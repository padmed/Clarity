import createArrow from "./arrow";
import createFadeOut from "./fadeOut";
import createPopupContainer from "./popupContainer";
import createPopupContent from "./popupContent";
import { verticalPos, horizontalPos, isInTop } from "../utils/coordinates";

// Creation of all popup components
const arrow = createArrow(isInTop);
const popupContent = createPopupContent();
const fadeOutBottom = createFadeOut("bottom");
const fadeOutTop = createFadeOut("top");
const popupContainer = createPopupContainer(horizontalPos);

// Assembling the components into a popup
popupContainer.appendChild(fadeOutBottom);
popupContainer.appendChild(fadeOutTop);
popupContainer.appendChild(arrow);
popupContainer.appendChild(popupContent);

export default popupContainer;
