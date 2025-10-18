// Toggle right-side menu on small screens
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const rightSide = document.getElementById('right-side');

  if (!toggle || !rightSide) return;

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = rightSide.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close when clicking outside
  document.addEventListener('click', function (e) {
    if (window.matchMedia('(max-width: 768px)').matches) {
      if (rightSide.classList.contains('open') && !rightSide.contains(e.target) && e.target !== toggle) {
        rightSide.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Close with Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && rightSide.classList.contains('open')) {
      rightSide.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});