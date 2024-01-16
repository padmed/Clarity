export const injectFonts = () => {
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap";
  document.head.appendChild(fontLink);
};
