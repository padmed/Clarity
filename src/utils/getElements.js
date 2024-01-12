import {
  POPUP_CONTENT_ID,
  ROOT_CONTAINER_ID,
  POPUP_CONTAINER_ID,
} from "./constants";

export const getRootContainer = () => {
  const rootContainer = document.getElementById(`${ROOT_CONTAINER_ID}`);
  if (!rootContainer) {
    console.error("Root container not found");
    return null;
  }

  return rootContainer;
};

// Returns the root of popup shadow DOM
export const getShadowRoot = () => {
  const rootContainer = getRootContainer();
  if (!rootContainer) {
    return null;
  }

  const shadowRoot = rootContainer.shadowRoot;
  if (!shadowRoot) {
    console.error("Root container not found");
    return null;
  }

  return shadowRoot;
};

// Returns the main container of popup
export const getPopupContainer = () => {
  const shadowRoot = getShadowRoot();
  if (!shadowRoot) {
    return null;
  }

  const popup = shadowRoot.querySelector(`#${POPUP_CONTAINER_ID}`);

  if (!popup) {
    console.error("Popup container not found");
    return null;
  }

  return popup;
};

export const getPopupContent = () => {
  const root = getShadowRoot();
  if (!root) {
    return null;
  }

  const popupContent = root.querySelector(`#${POPUP_CONTENT_ID}`);
  if (!popupContent) {
    console.error("Popup content not found");
  }

  return popupContent;
};
