export const screenSize = {
  vw: 0,
  vh: 0,
};

setScreenSize();
window.addEventListener("resize", setScreenSize);

function setScreenSize() {
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

  document.documentElement.style.setProperty("--vw", `${screenSize.vw}px`);

  document.documentElement.style.setProperty("--vh", `${screenSize.vh}px`);
}
