  window.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("manualsliderTrack");
    const images = [...track.children];

    
    images.forEach((img) => {
      const clone = img.cloneNode(true);
      track.appendChild(clone);
    });
  });