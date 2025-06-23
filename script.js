// Wait for the entire page to load
  window.onload = function () {
    const btn = document.getElementById("backToTopBtn");

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
  };






  // ----------------------------SLIDER------------------------------
  const sliderTrack = document.getElementById("sliderTrack");
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








  // -------------------slider2-----------------------


  const sliderTrack2 = document.getElementById("sliderTrack2");

let isDragging = false;
let startX;
let scrollLeft;

sliderTrack2.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - sliderTrack.offsetLeft;
  scrollLeft = sliderTrack.scrollLeft;
  sliderTrack.style.cursor = "grabbing";
});

sliderTrack2.addEventListener("mouseleave", () => {
  isDragging = false;
  sliderTrack.style.cursor = "grab";
});

sliderTrack2.addEventListener("mouseup", () => {
  isDragging = false;
  sliderTrack.style.cursor = "grab";
});

sliderTrack2.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - sliderTrack.offsetLeft;
  const walk = (x - startX) * 1.2; 
  sliderTrack2.scrollLeft = scrollLeft - walk;
});

