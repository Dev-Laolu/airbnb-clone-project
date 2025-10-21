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

// modal-section
function modalsection(){
      const openLinks = [
          document.getElementById('login-link'),
          document.getElementById('login-link-footer')
      ].filter(Boolean);

      const modal = document.getElementById('login-modal');
      const overlay = document.getElementById('modal-overlay');
      const closeBtn = document.getElementById('modal-close');
      const firstInput = document.getElementById('email');

      // If there's no modal on the page, don't attach modal behavior.
      if (!modal) return;

      function openModal(e){
          if(e) e.preventDefault();
          modal.classList.add('open');
          modal.setAttribute('aria-hidden', 'false');
          // small timeout to ensure focusable
          setTimeout(()=> firstInput && firstInput.focus(), 120);
          document.addEventListener('keydown', onKeyDown);
      }

      function closeModal(){
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden', 'true');
          document.removeEventListener('keydown', onKeyDown);
      }

      function onKeyDown(e){
          if(e.key === 'Escape') closeModal();
      }

      openLinks.forEach(link => {
          link.addEventListener('click', openModal);
      });

      closeBtn && closeBtn.addEventListener('click', closeModal);
      overlay && overlay.addEventListener('click', closeModal);

    
}
// Initialize modal behavior after the DOM is ready so elements exist
document.addEventListener('DOMContentLoaded', modalsection);
