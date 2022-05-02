import { screenSize } from "./getScreenSize";

let lastScrollY = 0;

export const scrollEvent = (e) => {
  const scrollY = window.scrollY;

  const scrollGap = scrollY - lastScrollY;

  lastScrollY = scrollY;

  if (Math.abs(scrollGap) > 5 && scrollY > 10) {
    if (scrollGap > 10) {
      console.log(scrollGap);
      moveToProfile();
    }

    if (scrollGap < -5 && scrollY < screenSize.vh * 100 - 10) {
      console.log(scrollGap);
      moveToProgram();
    }
  }
};

function moveToProfile() {
  window.scrollTo({ top: screenSize.vh * 100, behavior: "smooth" });
}

function moveToProgram() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
