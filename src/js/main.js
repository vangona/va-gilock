import { setScreenSize } from "./getScreenSize";
import { map } from "./kakaoMap";
import {
  initTouchEvent,
  mouseWheelEvent,
  moveNextPage,
  scrollEvent,
} from "./scrollEvents";

window.addEventListener("resize", setScreenSize);

initTouchEvent();
window.addEventListener("mousewheel", mouseWheelEvent);
window.addEventListener("scroll", scrollEvent);

const lowerArrows = document.querySelectorAll(".arrow-down");
lowerArrows.forEach((lowerArrow) => {
  lowerArrow.addEventListener("click", moveNextPage);
});
