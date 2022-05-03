import { map } from "./kakaoMap";
import {
  initTouchEvent,
  mouseWheelEvent,
  moveNextPage,
  scrollEvent,
} from "./scrollEvents";

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  initTouchEvent();
}

window.addEventListener("mousewheel", mouseWheelEvent);
window.addEventListener("scroll", scrollEvent);

const lowerArrows = document.querySelectorAll(".arrow-down");
lowerArrows.forEach((lowerArrow) => {
  lowerArrow.addEventListener("click", moveNextPage);
});
