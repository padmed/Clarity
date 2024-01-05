import {
  getSelectionCords,
  getShadowRoot,
  isInTopHalf,
} from "../utils/helpers";

const selection = window.getSelection();
const isInTop = isInTopHalf(selection);

const { top, left, bottom, right } = getSelectionCords(selection);

const containerWidth = 350;
const containerHeight = 200;

const verticalPos = isInTop ? bottom + 10 : top - containerHeight - 10;
const verticalPosHidden = isInTop
  ? verticalPos - containerHeight / 2
  : verticalPos + containerHeight / 2;
const horizontalPos = (left + right) / 2 - containerWidth / 2;

const popupContainer = document.createElement("div");
popupContainer.setAttribute("id", "popupContainer");

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

setTimeout(() => {
  const root = getShadowRoot();
  const popup = root.querySelector("#popupContainer");

  popup.style.transform = "scale(1)";
  popup.style.top = `${verticalPos}px`;
}, 100);

export const popupCloseAnimation = () => {
  const root = getShadowRoot();
  const popup = root.querySelector("#popupContainer");
  popup.style.transform = `scale(0)`;
  popup.style.top = `${verticalPosHidden}px`;
};

const arrowVertPosition = isInTop ? `-10px` : "185px";
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

const popupContent = document.createElement("p");
popupContent.setAttribute("id", "popupContent");
popupContent.style.cssText = `color: rgb(249, 246, 238);
    margin: 0;
    height: calc(100% - 35px);
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 15px;
    overflow: scroll;
    position: relative;
    `;

const fadeOutBottom = document.createElement("div");
fadeOutBottom.style.cssText = `
    position: absolute;
    z-index: 30001;
    top: 160px;
    height: 40px;
    width: 100%; 
    background: linear-gradient(to top, rgba(27, 18, 18, 0.8), rgba(27, 18, 18, 0) 95%);
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
`;

const fadeOutTop = document.createElement("div");
fadeOutTop.style.cssText = `
    position: absolute;
    z-index: 30001;
    top: 0;
    height: 15px;
    width: 100%; 
    background: linear-gradient(to bottom, rgba(27, 18, 18, 0.6), rgba(27, 18, 18, 0) 95%);
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
`;

popupContainer.appendChild(fadeOutBottom);
popupContainer.appendChild(fadeOutTop);
popupContainer.appendChild(arrow);
popupContainer.appendChild(popupContent);

export default popupContainer;
