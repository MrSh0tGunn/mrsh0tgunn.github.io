document.addEventListener("DOMContentLoaded", () => {

  const arButton = document.getElementById("ar-button");

  if (!arButton) return;

  arButton.addEventListener("click", function (e) {

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isChrome = /Chrome/i.test(navigator.userAgent);

    let supported = false;

    if (isIOS && isSafari) supported = true;
    if (isAndroid && isChrome) supported = true;

    if (!supported) {
      e.preventDefault();
      e.stopImmediatePropagation(); // 🔥 BELANGRIJK
      alert("AR/VR werkt enkel op:\n- Safari (iPhone)\n- Chrome (Android)");
    }

  }, true); // 🔥 useCapture = true

});


//////////// ZOOMFACTOR//////////////


const viewer = document.querySelector("model-viewer");

let zoomFactor = 1;

// detecteer Alt toets
window.addEventListener("keydown", (e) => {
  if (e.altKey) zoomFactor = 0.05; // trager zoomen
});

window.addEventListener("keyup", () => {
  zoomFactor = 0.2; // normaal
});

// scroll override
viewer.addEventListener("wheel", (event) => {
  event.preventDefault();

  const delta = event.deltaY * zoomFactor;

  viewer.cameraOrbit = `${viewer.getCameraOrbit().theta}rad ${viewer.getCameraOrbit().phi}rad ${viewer.getCameraOrbit().radius + delta}m`;
});