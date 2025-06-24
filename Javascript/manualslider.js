* ----------------- SLIDER 2  (manual drag to scroll) ----------------- */
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