// Footer year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Auto-generate gallery
const galleryGrid = document.getElementById("galleryGrid");

if (galleryGrid) {
  for (let i = 1; i <= 19; i++) {
    const src = `images/gallery-${i}.jpg`;
    const alt = `Gallery photo ${i}`;

    const item = document.createElement("div");
    item.className = "gallery-item";
    item.setAttribute("data-image", src);
    item.setAttribute("data-alt", alt);

    item.innerHTML = `
      <div class="gallery-photo">
        <img src="${src}" alt="${alt}" loading="lazy">
        <div class="photo-watermark">Global Shots Photography</div>
      </div>
    `;

    galleryGrid.appendChild(item);
  }
}

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

if (lightbox && lightboxImage && lightboxClose) {
  document.addEventListener("click", (event) => {
    const item = event.target.closest(".gallery-item");

    if (!item) return;

    const imageSrc = item.getAttribute("data-image");
    const imageAlt = item.getAttribute("data-alt") || "Expanded gallery image";

    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageAlt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;

  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}
