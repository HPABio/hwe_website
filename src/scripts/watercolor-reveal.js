// src/scripts/watercolor-reveal.js
// Purpose: Handles scroll-based watercolor reveal for all .watercolor-reveal elements

console.log("[watercolor-reveal.js] Script loaded");

function updateMaskForRoot(root) {
  if (!root) {
    console.log("[watercolor-reveal.js] No root element");
    return;
  }
  const svg = root.querySelector("svg");
  if (!svg) {
    console.log("[watercolor-reveal.js] No svg found for root:", root.id);
    return;
  }
  const revealFromCenter =
    root.getAttribute("data-reveal-from-center") === "true";
  const maxRadius = Number(root.getAttribute("data-max-radius"));
  const widthInPx = Number(root.getAttribute("data-width-in-px"));
  const heightInPx = Number(root.getAttribute("data-height-in-px"));

  const rect = root.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  // Progress: 0 when bottom of element is at bottom of viewport, 1 when at center
  const progress = Math.min(
    1,
    Math.max(0, (windowHeight - rect.bottom) / (windowHeight / 2))
  );
  console.log(
    `[watercolor-reveal.js] updateMask: id=${root.id}, progress=${progress}`
  );

  if (revealFromCenter) {
    const circle = svg.querySelector("#reveal-circle");
    if (circle) {
      const newRadius = progress * maxRadius;
      circle.setAttribute("r", newRadius.toString());
      console.log(`[watercolor-reveal.js] Updated circle radius: ${newRadius}`);
    } else {
      console.log(
        "[watercolor-reveal.js] No #reveal-circle found in svg for root:",
        root.id
      );
    }
  } else {
    const rectMask = svg.querySelector("#reveal-rect");
    if (rectMask) {
      const newWidth = progress * widthInPx;
      rectMask.setAttribute("width", newWidth.toString());
      console.log(`[watercolor-reveal.js] Updated rect width: ${newWidth}`);
    } else {
      console.log(
        "[watercolor-reveal.js] No #reveal-rect found in svg for root:",
        root.id
      );
    }
  }
}

function updateAllWatercolorReveals() {
  const all = document.querySelectorAll(".watercolor-reveal");
  console.log(
    `[watercolor-reveal.js] Found ${all.length} .watercolor-reveal elements`
  );
  all.forEach(updateMaskForRoot);
}

window.addEventListener("scroll", updateAllWatercolorReveals);
window.addEventListener("resize", updateAllWatercolorReveals);
window.addEventListener("DOMContentLoaded", () => {
  console.log("[watercolor-reveal.js] DOMContentLoaded");
  setTimeout(() => {
    console.log("[watercolor-reveal.js] Initial update after timeout");
    updateAllWatercolorReveals();
  }, 100);
});
