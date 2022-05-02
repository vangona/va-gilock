import { scrollEvent, moveToLower } from "./scrollEvent";

window.addEventListener("mousewheel", scrollEvent);

const lowerArrows = document.querySelectorAll(".arrow-down");
console.log(lowerArrows);
lowerArrows.forEach((lowerArrow) => {
  lowerArrow.addEventListener("click", moveToLower);
});
