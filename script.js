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