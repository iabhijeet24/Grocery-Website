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

/* ----------------- SLIDER 2  (manual drag to scroll) ----------------- */
const track = document.getElementById('sliderTrack2');

if (track) {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  /* -------- Desktop (mouse) -------- */
  track.addEventListener('mousedown', e => {
    isDown = true;
    track.classList.add('dragging');
    startX     = e.pageX;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();                          // stop text selection
    const x   = e.pageX;
    const walk = (x - startX) * 1.2;             // scroll-speed factor
    track.scrollLeft = scrollLeft - walk;
  });

  ['mouseup', 'mouseleave'].forEach(type =>
    track.addEventListener(type, () => {
      isDown = false;
      track.classList.remove('dragging');
    })
  );

  /* -------- Mobile (touch) -------- */
  track.addEventListener(
    'touchstart',
    e => {
      isDown = true;
      track.classList.add('dragging');
      startX     = e.touches[0].pageX;
      scrollLeft = track.scrollLeft;
    },
    { passive: true }
  );

  track.addEventListener(
    'touchmove',
   e => {
  if (!isDown) return;
  e.preventDefault();                        // disable native scroll
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 1.2;
  track.scrollLeft = scrollLeft - walk;
}





      // -----------------------------CONTACT SECTION-------------------------------


      // Scroll reveal animation (optional)
window.addEventListener('scroll', () => {
  const footer = document.querySelector('.footer');
  const rect = footer.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    footer.classList.add('visible');
  }
});
