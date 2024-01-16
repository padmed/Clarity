import { getLoaderStyles } from "./loader";
import { ROOT_CONTAINER_ID } from "../utils/constants";
import popup from "./popup";

export const createRootContainer = () => {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", ROOT_CONTAINER_ID);
  document.body.insertAdjacentHTML("afterbegin", rootContainer.outerHTML);
};

export const createShadowRoot = () => {
  const loaderStyles = getLoaderStyles();
  const shadowRoot = document
    .getElementById(ROOT_CONTAINER_ID)
    .attachShadow({ mode: "open" });

  shadowRoot.innerHTML = `
  <style>
    ${loaderStyles}
  </style>
  ${popup.outerHTML}`;
};
