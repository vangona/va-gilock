export const screenSize = {
  vw: 0,
  vh: 0,
  vmin: 0,
  vmax: 0,
};

export const setScreenSize = () => {
  console.log("setScreen");

  screenSize.vw =
    Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    ) / 100;

  screenSize.vh =
    Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    ) / 100;

  screenSize.vmin = Math.min(screenSize.vw, screenSize.vh);
  screenSize.vmax = Math.max(screenSize.vw, screenSize.vh);

  document.documentElement.style.setProperty("--vw", `${screenSize.vw}px`);
  document.documentElement.style.setProperty("--vh", `${screenSize.vh}px`);
  document.documentElement.style.setProperty("--vmin", `${screenSize.vmin}px`);
  document.documentElement.style.setProperty("--vmax", `${screenSize.vmax}px`);
};

if (
  !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  window.addEventListener("resize", setScreenSize);
}
setScreenSize();

// 상수로 처리 시, resize 되지 않음.
const FIRST_PAGE = 0;

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
    top: currentScrollY + screenSize.vh * 100,
    behavior: "smooth",
  });
};

const touchScrollEvent = (currentScrollY, direction) => {
  if (direction === "up") {
    if (currentScrollY > Math.floor(screenSize.vh * 300)) {
      moveToUpper(Math.floor(screenSize.vh * 200));
    } else if (currentScrollY > Math.floor(screenSize.vh * 200)) {
      moveToUpper(Math.floor(screenSize.vh * 100));
    } else if (currentScrollY > Math.floor(screenSize.vh * 100)) {
      moveToUpper(FIRST_PAGE);
    }
  }

  if (direction === "down") {
    if (currentScrollY < FIRST_PAGE) {
      moveToLower(FIRST_PAGE);
    } else if (currentScrollY < Math.floor(screenSize.vh * 100)) {
      moveToLower(Math.floor(screenSize.vh * 100));
    } else if (currentScrollY < Math.floor(screenSize.vh * 200)) {
      moveToLower(Math.floor(screenSize.vh * 200));
    } else if (currentScrollY < Math.floor(screenSize.vh * 300)) {
      moveToLower(Math.floor(screenSize.vh * 300));
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
    if (currentScrollY > Math.floor(screenSize.vh * 200)) {
      moveToUpper(Math.floor(screenSize.vh * 200));
    } else if (currentScrollY > Math.floor(screenSize.vh * 100)) {
      moveToUpper(Math.floor(screenSize.vh * 100));
    } else if (currentScrollY > FIRST_PAGE) {
      moveToUpper(FIRST_PAGE);
    } else if (currentScrollY > Math.floor(screenSize.vh * 300)) {
      moveToUpper(Math.floor(screenSize.vh * 300));
    }
  }

  if (e.deltaY > 0) {
    if (currentScrollY < Math.floor(screenSize.vh * 100)) {
      moveToLower(Math.floor(screenSize.vh * 100));
    } else if (currentScrollY < Math.floor(screenSize.vh * 200)) {
      moveToLower(Math.floor(screenSize.vh * 200));
    } else if (currentScrollY < Math.floor(screenSize.vh * 300)) {
      moveToLower(Math.floor(screenSize.vh * 300));
    } else if (currentScrollY < FIRST_PAGE) {
      moveToLower(FIRST_PAGE);
    }
  }
};

let lastScrollY = 0;
export const scrollEvent = (e) => {
  const currentScrollY = window.scrollY;

  if (lastScrollY > currentScrollY) {
    if (currentScrollY >= screenSize.vh * 105) {
      const programList = document.querySelector(".program__list");
      programList.style.opacity = 1;
    }
  } else {
    if (currentScrollY >= screenSize.vh * 105) {
      //   const programList = document.querySelector(".program__list");
      //   programList.style.opacity = 0;
    }
  }

  lastScrollY = currentScrollY;
};
