
  const track = document.getElementById("sliderTrack");
  const images = track.querySelectorAll("img");
  const imageWidth = 350;
  const gap = 15;
  const totalWidth = imageWidth + gap;

  let index = 0;

  function slideImages() {
    index++;
    if (index > images.length - 3) {
      // reset when only last 2 or less visible
      index = 0;
    }
    track.style.transform = `translateX(-${index * totalWidth}px)`;
  }

  setInterval(slideImages, 2500); // every 2.5s

