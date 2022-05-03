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

window.addEventListener("resize", setScreenSize);
setScreenSize();
