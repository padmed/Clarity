const createHeadingDecoration = (style) => {
  const decoration = document.createElement("span");
  decoration.style.cssText = `
    height: 2px;
    background-color: white;
    position: absolute;
    top: 15px;
    border-radius: 10px 10px 10px 10px;
    ${style};
  `;

  return decoration;
};

const createHeading = () => {
  const heading = document.createElement("h3");
  heading.innerText = "Simplified";
  heading.style.cssText = `
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 70px;
    margin-bottom: 14px;`;

  const leftDecorationStyle = `
    width: 60px;
    margin-left: 10px;
    left: -80px;`;

  const rightDecorationStyle = `
    width: 150px;
    margin-left: 20px;
    left: 70px;`;

  const headingDecorationLeft = createHeadingDecoration(leftDecorationStyle);
  const headingDecorationRight = createHeadingDecoration(rightDecorationStyle);

  heading.appendChild(headingDecorationLeft);
  heading.appendChild(headingDecorationRight);

  return heading;
};

export default createHeading;
