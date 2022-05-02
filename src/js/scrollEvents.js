import { screenSize } from "./getScreenSize";
const { vw, vh } = screenSize;

export const moveToUpper = () => {
  window.scrollTo({
    top: window.scrollY - vh * 100,
    behavior: "smooth",
  });
};

export const moveToLower = () => {
  window.scrollTo({
    top: window.scrollY + vh * 100,
    behavior: "smooth",
  });
};

export const mobileScrollEvent = (e) => {};

export const mouseWheelEvent = (e) => {
  if (e.deltaY < 0) {
    moveToUpper();
  }

  if (e.deltaY > 0) {
    moveToLower();
  }
};

let lastScrollY = 0;
export const scrollEvent = (e) => {
  const scrollY = window.scrollY;

  if (lastScrollY > scrollY) {
    if (scrollY >= vh * 105) {
      const programList = document.querySelector(".program__list");
      programList.style.opacity = 1;
    }
  } else {
    if (scrollY >= vh * 105) {
      //   const programList = document.querySelector(".program__list");
      //   programList.style.opacity = 0;
    }
  }

  lastScrollY = scrollY;
};
