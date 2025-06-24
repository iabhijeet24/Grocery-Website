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



      // -----------------------------CONTACT SECTION-------------------------------


      // Scroll reveal animation (optional)
window.addEventListener('scroll', () => {
  const footer = document.querySelector('.footer');
  const rect = footer.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    footer.classList.add('visible');
  }
});
