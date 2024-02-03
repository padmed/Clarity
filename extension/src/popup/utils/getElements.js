import logger from "./logger";
import {
  POPUP_CONTENT_ID,
  ROOT_CONTAINER_ID,
  POPUP_CONTAINER_ID,
} from "./constants";

// Helper function to get an element by ID from a given root
const getElementByIdInRoot = (root, id, errorMessage) => {
  const element = root.getElementById(id);
  if (!element) {
    logger.error(errorMessage);
  }
  return element;
};

// Returns the root container
export const getRootContainer = () => {
  const rootContainer = document.getElementById(ROOT_CONTAINER_ID);
  if (!rootContainer) {
    logger.error("Root container not found");
    return null;
  }

  return rootContainer;
};

// Returns the root of popup shadow DOM
export const getShadowRoot = () => {
  const rootContainer = getRootContainer();
  return rootContainer ? rootContainer.shadowRoot : null;
};

// Returns the main container of popup
export const getPopupContainer = () => {
  const shadowRoot = getShadowRoot();
  return shadowRoot
    ? getElementByIdInRoot(
        shadowRoot,
        POPUP_CONTAINER_ID,
        "Popup container not found in shadow root"
      )
    : null;
};

// Returns the content container of popup
export const getPopupContent = () => {
  const shadowRoot = getShadowRoot();
  return shadowRoot
    ? getElementByIdInRoot(
        shadowRoot,
        POPUP_CONTENT_ID,
        "Popup content not found in shadow root"
      )
    : null;
};
