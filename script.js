// ---------------- Back to Top ----------------
window.onload = function () {
  const btn = document.getElementById("backToTopBtn");

  if (btn) {
    window.onscroll = function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
};

// ----------------- SLIDER 1 (Auto Slide) ------------------
const sliderTrack = document.getElementById("sliderTrack");
if (sliderTrack) {
  const images = sliderTrack.querySelectorAll("img");
  const imageWidth = 350;
  const imageGap = 20;
  const totalWidth = imageWidth + imageGap;

  let index = 0;

  function slideImages() {
    index++;
    if (index > images.length - 3) index = 0;
    sliderTrack.style.transform = `translateX(-${index * totalWidth}px)`;
  }

  setInterval(slideImages, 3000);
}

// ----------------- SLIDER 2 (Manual Drag) ------------------
const track = document.getElementById('sliderTrack2');
if (track) {
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('dragging');
    startX = e.pageX;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('dragging');
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('dragging');
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 1.2;
    track.scrollLeft = scrollLeft - walk;
  });

  // Touch support
  track.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('touchend', () => {
    isDown = false;
  });

  track.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 1.2;
    track.scrollLeft = scrollLeft - walk;
  });
}
