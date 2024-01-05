const createFadeOut = (side) => {
  const fadeOut = document.createElement("div");

  if (side === "top") {
    fadeOut.style.cssText = `
    position: absolute;
    z-index: 30001;
    top: 0;
    height: 15px;
    width: 100%;
    background: linear-gradient(to bottom, rgba(27, 18, 18, 0.6), rgba(27, 18, 18, 0) 95%);
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
`;
  } else {
    fadeOut.style.cssText = `
    position: absolute;
    z-index: 30001;
    top: 160px;
    height: 40px;
    width: 100%;
    background: linear-gradient(to top, rgba(27, 18, 18, 0.8), rgba(27, 18, 18, 0) 95%);
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
`;
  }
  return fadeOut;
};

export default createFadeOut;
