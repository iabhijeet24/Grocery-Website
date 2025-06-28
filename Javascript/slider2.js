document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack2 = document.getElementById("sliderTrack2");
  const slides2 = document.querySelectorAll(".slide2");
  const slideWidth2 = 350;
  const gap2 = 15;
  const totalSlideWidth2 = slideWidth2 + gap2;

  let index2 = 0;
  const visibleSlides2 = 3;
  const maxIndex2 = slides2.length - visibleSlides2;

  function showSlide2() {
    sliderTrack2.style.transition = "transform 0.5s ease-in-out";
    sliderTrack2.style.transform = `translateX(-${index2 * totalSlideWidth2}px)`;
  }

  function nextSlide2() {
    index2++;
    if (index2 > maxIndex2) {
      index2 = 0;
    }
    showSlide2();
  }

  setInterval(nextSlide2, 2000);
});