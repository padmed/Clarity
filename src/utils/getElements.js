import { popupContentId, rootContainerId, popupContainerId } from "./constants";

export const getRootContainer = () => {
  const rootContainer = document.getElementById(`${rootContainerId}`);
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

  const popup = shadowRoot.querySelector(`#${popupContainerId}`);

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

  const popupContent = root.querySelector(`#${popupContentId}`);
  if (!popupContent) {
    console.error("Popup content not found");
  }

  return popupContent;
};
