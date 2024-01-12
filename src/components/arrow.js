import { CONTAINER_WIDTH } from "../utils/constants";

// Creates arrow of a popup which points to user selection
const createArrow = (isInTop) => {
  // Checks whether the arrow should be on top or bottom side
  const arrowVertPosition = isInTop ? "-10px" : "185px";
  // Rotates arrow based on where it's located
  const arrowPoint = isInTop ? -45 : 135;

  const arrow = document.createElement("div");
  arrow.style.cssText = `position: absolute;
    z-index: 2999;
    width: 25px;
    height: 25px;
    background: rgb(238,174,202);
    background: linear-gradient(45deg, rgba(238,174,202,0) 55%, rgba(27, 18, 18, 0.8) 58%);
    left: ${CONTAINER_WIDTH / 2}px;
    top: ${arrowVertPosition};
    transform: rotate(${arrowPoint}deg);
    border-radius: 5px;
    `;

  return arrow;
};

export default createArrow;
