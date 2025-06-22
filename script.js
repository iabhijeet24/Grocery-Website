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



