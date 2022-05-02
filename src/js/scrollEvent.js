import { screenSize } from "./getScreenSize";

let lastScrollY = 0;

export const moveToUpper = () => {
  window.scrollTo({
    top: window.scrollY - screenSize.vh * 100,
    behavior: "smooth",
  });
};

export const moveToLower = () => {
  window.scrollTo({
    top: window.scrollY + screenSize.vh * 100,
    behavior: "smooth",
  });
};

export const scrollEvent = (e) => {
  console.log(e.deltaY);

  if (e.deltaY < 0) {
    moveToUpper();
  }

  if (e.deltaY > 0) {
    moveToLower();
  }
};
