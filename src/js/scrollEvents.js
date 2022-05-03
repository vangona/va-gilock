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

const touchScrollEvent = (currentScrollY, direction) => {
  if (direction === "up") {
    if (currentScrollY > FOURTH_PAGE) {
      moveToUpper(THIRD_PAGE);
    } else if (currentScrollY > THIRD_PAGE) {
      moveToUpper(SECOND_PAGE);
    } else if (currentScrollY > SECOND_PAGE) {
      moveToUpper(FIRST_PAGE);
    }
  }

  if (direction === "down") {
    if (currentScrollY < FIRST_PAGE) {
      moveToLower(FIRST_PAGE);
    } else if (currentScrollY < SECOND_PAGE) {
      moveToLower(SECOND_PAGE);
    } else if (currentScrollY < THIRD_PAGE) {
      moveToLower(THIRD_PAGE);
    } else if (currentScrollY < FOURTH_PAGE) {
      moveToLower(FOURTH_PAGE);
    }
  }
};

let touchInitialX = null;
let touchInitialY = null;
const touchStartEvent = (e) => {
  touchInitialX = `${
    e.changedTouches ? e.changedTouches[0].clientX : e.clientX
  }`;
  touchInitialY = `${
    e.changedTouches ? e.changedTouches[0].clientY : e.clientY
  }`;
};

const touchEndEvent = (e) => {
  if (touchInitialX !== null && touchInitialY !== null) {
    const currentX = `${
      e.changedTouches ? e.changedTouches[0].clientX : e.clientX
    }`;
    const currentY = `${
      e.changedTouches ? e.changedTouches[0].clientY : e.clientY
    }`;

    let diffX = touchInitialX - currentX;
    let diffY = touchInitialY - currentY;

    if (Math.abs(diffX) < Math.abs(diffY) && Math.abs(diffY) > 10) {
      if (diffY > 0) {
        touchScrollEvent(e.changedTouches[0].pageY, "down");
      } else {
        touchScrollEvent(e.changedTouches[0].pageY, "up");
      }
    }

    touchInitialX = null;
    touchInitialY = null;
  }
};

export const initTouchEvent = () => {
  window.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
    },
    { passive: false }
  );
  window.addEventListener("touchstart", touchStartEvent);
  window.addEventListener("touchend", touchEndEvent);
};

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
