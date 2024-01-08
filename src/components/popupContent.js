import { popupContentId } from "../utils/constants";

// Creates the container for the content to fit in, this is where the generated text goes
const createPopupContent = () => {
  const popupContent = document.createElement("div");
  popupContent.setAttribute("id", popupContentId);

  popupContent.style.cssText = `color: rgb(249, 246, 238);
    margin: 0;
    height: calc(100% - 35px);
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 16px;
    overflow: scroll;
    position: relative;
    font-family: 'EB Garamond', serif;
    `;

  return popupContent;
};

export default createPopupContent;
