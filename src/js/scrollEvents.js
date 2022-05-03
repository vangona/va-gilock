import { screenSize } from "./getScreenSize";
const { vw, vh } = screenSize;

const FIRST_PAGE = 0;
const SECOND_PAGE = Math.floor(vh * 100);
const THIRD_PAGE = Math.floor(vh * 200);
const FOURTH_PAGE = Math.floor(vh * 300);

export const moveToUpper = (moveDest) => {
  window.scrollTo({
    top: moveDest,
    behavior: "smooth",
  });
};

export const moveToLower = (moveDest) => {
  window.scrollTo({
    top: moveDest,
    behavior: "smooth",
  });
};

export const moveNextPage = (e) => {
  const currentScrollY = window.scrollY;

  window.scrollTo({
    top: currentScrollY + vh * 100,
    behavior: "smooth",
  });
};

export const mobileScrollEvent = (e) => {};

export const mouseWheelEvent = (e) => {
  const currentScrollY = Math.floor(window.scrollY);

  if (e.deltaY < 0) {
    if (currentScrollY > THIRD_PAGE) {
      moveToUpper(THIRD_PAGE);
    } else if (currentScrollY > SECOND_PAGE) {
      moveToUpper(SECOND_PAGE);
    } else if (currentScrollY > FIRST_PAGE) {
      moveToUpper(FIRST_PAGE);
    } else if (currentScrollY > FOURTH_PAGE) {
      moveToUpper(FOURTH_PAGE);
    }
  }

  if (e.deltaY > 0) {
    if (currentScrollY < SECOND_PAGE) {
      moveToLower(SECOND_PAGE);
    } else if (currentScrollY < THIRD_PAGE) {
      moveToLower(THIRD_PAGE);
    } else if (currentScrollY < FOURTH_PAGE) {
      moveToLower(FOURTH_PAGE);
    } else if (currentScrollY < FIRST_PAGE) {
      moveToLower(FIRST_PAGE);
    }
  }
};

let lastScrollY = 0;
export const scrollEvent = (e) => {
  const currentScrollY = window.scrollY;

  if (lastScrollY > currentScrollY) {
    if (currentScrollY >= vh * 105) {
      const programList = document.querySelector(".program__list");
      programList.style.opacity = 1;
    }
  } else {
    if (currentScrollY >= vh * 105) {
      //   const programList = document.querySelector(".program__list");
      //   programList.style.opacity = 0;
    }
  }

  lastScrollY = currentScrollY;
};
