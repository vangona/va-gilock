import { map } from "./kakaoMap";
import { mouseWheelEvent, moveNextPage, scrollEvent } from "./scrollEvents";

window.addEventListener("mousewheel", mouseWheelEvent);
window.addEventListener("scroll", scrollEvent);

const lowerArrows = document.querySelectorAll(".arrow-down");
lowerArrows.forEach((lowerArrow) => {
  lowerArrow.addEventListener("click", moveNextPage);
});