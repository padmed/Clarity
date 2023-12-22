import { generateText } from "./services";

const selection = window.getSelection();

if (selection.rangeCount > 0) {
  const range = selection.getRangeAt(0);
  const boundingRect = range.getBoundingClientRect();

  console.log("Selected text location:", {
    top: boundingRect.top,
    left: boundingRect.left,
    bottom: boundingRect.bottom,
    right: boundingRect.right,
  });
}
