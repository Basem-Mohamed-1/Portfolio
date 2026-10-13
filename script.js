(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function () {
        var isOpen = navLinks.classList.toggle('menu-open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      });

      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navLinks.classList.remove('menu-open');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });
    }

    var lightbox = document.querySelector('.photo-lightbox');
    var lightboxImage = lightbox && lightbox.querySelector('img');
    var closeLightbox = lightbox && lightbox.querySelector('.lightbox-close');
    if (lightbox && lightboxImage) {
      document.querySelectorAll('.case-study-zoom').forEach(function (button) {
        button.addEventListener('click', function () {
          var image = button.querySelector('img');
          if (!image) return;
          lightboxImage.src = image.currentSrc || image.src;
          lightboxImage.alt = image.alt;
          lightbox.showModal();
        });
      });
      if (closeLightbox) closeLightbox.addEventListener('click', function () { lightbox.close(); });
      lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) lightbox.close();
      });
    }

    var langToggle = document.getElementById('lang-toggle');
    var langLabel = document.getElementById('lang-label');
    if (langToggle) {
      var html = document.documentElement;
      var nodes = document.querySelectorAll('[data-ar]');
      nodes.forEach(function (node) { node.dataset.en = node.innerHTML; });
      var currentLang = 'en';

      langToggle.addEventListener('click', function () {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        nodes.forEach(function (node) {
          node.innerHTML = currentLang === 'ar' ? node.dataset.ar : node.dataset.en;
        });
        html.setAttribute('lang', currentLang);
        html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        if (langLabel) langLabel.textContent = currentLang === 'ar' ? 'EN' : 'AR';
      });
    }
  });
})();
