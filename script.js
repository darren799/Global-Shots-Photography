document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name')?.value.trim() || '';
      const email = document.getElementById('email')?.value.trim() || '';
      const shootType = document.getElementById('shootType')?.value.trim() || '';
      const datetime = document.getElementById('datetime')?.value.trim() || '';
      const ideas = document.getElementById('ideas')?.value.trim() || '';

      const subject = encodeURIComponent('Booking Request - ' + shootType);
      const body = encodeURIComponent(
        'Hello Global Shots Photography,\n\n' +
        'My name is ' + name + '.\n' +
        'My email is ' + email + '.\n' +
        'Type of shoot: ' + shootType + '\n' +
        'Preferred date/time: ' + datetime + '\n' +
        'Ideas or inspiration: ' + ideas + '\n\n' +
        'Thank you!'
      );

      window.location.href =
        'mailto:globalshotsphotographyllc@gmail.com?subject=' +
        subject +
        '&body=' +
        body;
    });
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (lightbox && lightboxImage && lightboxClose && galleryItems.length) {
    galleryItems.forEach((item) => {
      item.addEventListener('click', function () {
        lightboxImage.src = this.dataset.image || '';
        lightboxImage.alt = this.dataset.alt || 'Expanded gallery image';
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImage.src = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && lightbox.classList.contains('open')) {
        closeLightbox();
      }
    });
  }
});

