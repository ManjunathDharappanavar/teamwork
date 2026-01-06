function showVision() {
  if (visionShown) return;

  document.getElementById("ctaText").innerText =
    "Our vision is to empower organizations with intelligent control over assets, resources, and inventory through simple and reliable technology.";

  visionShown = true;
  document.querySelector(".cta button").disabled = true;
}
