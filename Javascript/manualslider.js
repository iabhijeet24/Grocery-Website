  window.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("manualsliderTrack");
    const images = [...track.children];

    // Clone all images and append them for seamless looping
    images.forEach((img) => {
      const clone = img.cloneNode(true);
      track.appendChild(clone);
    });
  });