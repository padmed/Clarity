import { containerWidth } from "../utils/constants";

const createArrow = (isInTop) => {
  const arrowVertPosition = isInTop ? "-10px" : "185px";
  const arrowPoint = isInTop ? -45 : 135;

  const arrow = document.createElement("div");
  arrow.style.cssText = `position: absolute;
    z-index: 2999;
    width: 25px;
    height: 25px;
    background: rgb(238,174,202);
    background: linear-gradient(45deg, rgba(238,174,202,0) 55%, rgba(27, 18, 18, 0.8) 58%);
    left: ${containerWidth / 2}px;
    top: ${arrowVertPosition};
    transform: rotate(${arrowPoint}deg);
    border-radius: 5px;
    `;

  return arrow;
};

export default createArrow;
