import { loaderClassName } from "../utils/constants";

const createLoader = () => {
  const loader = document.createElement("div");
  loader.className = loaderClassName;

  return loader;
};

export default createLoader;
