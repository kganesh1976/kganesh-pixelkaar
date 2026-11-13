
// K. GANESH PIXELKAAR - WEBSITE JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {

  // COPYRIGHT YEAR
  // Updates only the copyright year, without overwriting other footer text.

  const yearElement = document.getElementById("copyrightYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // SMOOTH NAVIGATION

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }

    });

  });


  // GALLERY DATA

  const galleryData = {

    wedding: {
      eyebrow: "WEDDING & PRE-WEDDING",
      title: "Our Wedding Gallery",
      folder: "images/wedding/",
      files: [
        "wedding-1.jpg",
        "wedding-2.jpg",
        "wedding-3.jpg",
        "wedding-4.jpg",
        "wedding-5.jpg",
        "wedding-6.jpg",
        "wedding-7.jpg"
      ]
    },


    // NEW WEDDING ALBUM DESIGNING GALLERY

    weddingAlbum: {
      eyebrow: "PROFESSIONAL WEDDING ALBUM DESIGNING",
      title: "Wedding Album Designing",
      folder: "images/WEDDING%20ALBUM/",
      files: [
        "12x24-01_1.jpg",
        "12x24-02_1.jpg",
        "12x24-03_1.jpg",
        "12x24-04_1.jpg",
        "12x24-05_1.jpg",
        "12x24-06_1.jpg",
        "12x24-07_1.jpg",
        "12x24-08_1.jpg",
        "12x24-09_1.jpg",
        "12x24-10_1.jpg",
        "12x24-11_1.jpg",
        "12x24-12_1.jpg",
        "12x24-13_1.jpg",
        "12x24-14_1.jpg"
      ]
    },


    newborn: {
      eyebrow: "NEWBORN & MATERNITY",
      title: "Our Newborn & Maternity Gallery",
      folder: "images/newborn/",
      files: [
        "newborn-1.jpg",
        "newborn-2.jpg",
        "newborn-3.jpg",
        "newborn-4.jpg",
        "newborn-5.jpg",
        "newborn-6.jpg"
      ]
    },


    corporate: {
      eyebrow: "CORPORATE & EXECUTIVE PORTRAITS",
      title: "Our Corporate Gallery",
      folder: "images/corporate/",
      files: [
        "corporate-1.jpg",
        "corporate-2.jpg",
        "corporate-3.jpg",
        "corporate-4.jpg",
        "corporate-5.jpg",
        "corporate-6.jpg",
        "corporate-7.jpg",
        "corporate-8.jpg",
        "corporate-9.jpg",
        "corporate-10.jpg",
        "corporate-11.jpg",
        "corporate-12.jpg",
        "corporate-13.jpg",
        "corporate-14.jpg"
      ],
      tryUppercaseExtension: true
    },


    manipulation: {
      eyebrow: "PHOTO MANIPULATION & POSTER DESIGNING",
      title: "Our Photo Manipulation Gallery",
      folder: "images/manipulation/",
      files: [
        "manipulation-1.jpg",
        "manipulation-2.jpg",
        "manipulation-3.jpg",
        "manipulation-4.jpg",
        "manipulation-5.jpg",
        "manipulation-6.jpg",
        "manipulation-7.jpg"
      ]
    },


    beauty: {
      eyebrow: "HIGH-END BEAUTY & FASHION RETOUCHING",
      title: "Our Beauty & Fashion Gallery",
      folder: "images/beauty/",
      files: [
        "Beauty.jpg",
        "Beauty (1).jpg",
        "Beauty (2).jpg",
        "Beauty (3).jpg",
        "Beauty (4).jpg",
        "Beauty (5).jpg",
        "Beauty (6).jpg",
        "Beauty (7).jpg",
        "Beauty (8).jpg",
        "Beauty (9).jpg",
        "Beauty (10).jpg",
        "Beauty (11).jpg",
        "Beauty (12).jpg"
      ]
    }

  };


  // GALLERY ELEMENTS

  const portfolioCategories =
    document.getElementById("portfolioCategories");

  const categoryGallery =
    document.getElementById("categoryGallery");

  const galleryEyebrow =
    document.getElementById("galleryEyebrow");

  const galleryTitle =
    document.getElementById("galleryTitle");

  const galleryGrid =
    document.getElementById("galleryGrid");

  const backButton =
    document.getElementById("backToPortfolio");

  const bottomBackButton =
    document.getElementById("backToPortfolioBottom");

  const portfolioSection =
    document.getElementById("portfolio");


  // LIGHTBOX ELEMENTS

  const lightbox =
    document.getElementById("imageLightbox");

  const lightboxImage =
    document.getElementById("lightboxImage");

  const lightboxCounter =
    document.getElementById("lightboxCounter");

  const closeButton =
    document.getElementById("lightboxClose");

  const previousButton =
    document.getElementById("lightboxPrev");

  const nextButton =
    document.getElementById("lightboxNext");


  // CHECK REQUIRED ELEMENTS

  if (
    !portfolioCategories ||
    !categoryGallery ||
    !galleryEyebrow ||
    !galleryTitle ||
    !galleryGrid ||
    !backButton ||
    !bottomBackButton ||
    !lightbox ||
    !lightboxImage ||
    !lightboxCounter ||
    !closeButton ||
    !previousButton ||
    !nextButton
  ) {
    console.error("Website gallery elements are missing.");
    return;
  }


  let currentImages = [];
  let currentIndex = 0;


  // OPEN CATEGORY GALLERY

  function openGallery(category) {

    const data = galleryData[category];

    if (!data) return;

    galleryEyebrow.textContent = data.eyebrow;
    galleryTitle.textContent = data.title;

    galleryGrid.innerHTML = "";
    currentImages = [];

    data.files.forEach(function (filename, index) {

      const imageWrapper = document.createElement("div");
      imageWrapper.className = "gallery-item";

      const image = document.createElement("img");

      image.alt = data.eyebrow + " Photo " + (index + 1);
      image.loading = "lazy";
      image.src = data.folder + filename;

      // CORPORATE IMAGE EXTENSION FALLBACK
      // Try .JPG if .jpg is not found, and vice versa.

      if (data.tryUppercaseExtension) {

        image.dataset.alternateTried = "false";

        image.addEventListener("error", function () {

          if (image.dataset.alternateTried === "true") {
            console.error("Image not found:", image.src);
            imageWrapper.classList.add("image-error");
            return;
          }

          image.dataset.alternateTried = "true";

          if (image.src.endsWith(".jpg")) {
            image.src = image.src.slice(0, -4) + ".JPG";
          } else if (image.src.endsWith(".JPG")) {
            image.src = image.src.slice(0, -4) + ".jpg";
          }

        });

      } else {

        image.addEventListener("error", function () {
          console.error("Image not found:", image.src);
          imageWrapper.classList.add("image-error");
        });

      }


      image.addEventListener("click", function () {

        const visibleImages = Array.from(
          galleryGrid.querySelectorAll(".gallery-item img")
        ).filter(function (img) {
          return img.complete && img.naturalWidth > 0;
        });

        currentImages = visibleImages;
        currentIndex = currentImages.indexOf(image);

        if (currentIndex !== -1) {
          openLightbox(currentIndex);
        }

      });


      imageWrapper.appendChild(image);
      galleryGrid.appendChild(imageWrapper);

    });


    portfolioCategories.hidden = true;
    categoryGallery.hidden = false;

    categoryGallery.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }


  // CATEGORY CARD CLICK

  document.querySelectorAll("[data-gallery]").forEach(function (card) {

    card.addEventListener("click", function () {

      const category = card.dataset.gallery;
      openGallery(category);

    });

  });


  // BACK TO PORTFOLIO

  function goBackToPortfolio() {

    closeLightbox();

    categoryGallery.hidden = true;
    portfolioCategories.hidden = false;

    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  }

  backButton.addEventListener("click", goBackToPortfolio);

  bottomBackButton.addEventListener("click", goBackToPortfolio);


  // SHOW SELECTED PHOTO

  function showPhoto(index) {

    if (currentImages.length === 0) return;

    currentIndex =
      (index + currentImages.length) % currentImages.length;

    const selectedPhoto = currentImages[currentIndex];

    lightboxImage.src = selectedPhoto.src;
    lightboxImage.alt = selectedPhoto.alt;

    lightboxCounter.textContent =
      (currentIndex + 1) + " / " + currentImages.length;

  }


  // OPEN LIGHTBOX

  function openLightbox(index) {

    if (currentImages.length === 0) return;

    showPhoto(index);

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("lightbox-open");

    closeButton.focus();

  }


  // CLOSE LIGHTBOX

  function closeLightbox() {

    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("lightbox-open");

    lightboxImage.src = "";

  }


  // NEXT PHOTO

  function nextPhoto() {
    showPhoto(currentIndex + 1);
  }


  // PREVIOUS PHOTO

  function previousPhoto() {
    showPhoto(currentIndex - 1);
  }


  // LIGHTBOX BUTTONS

  closeButton.addEventListener("click", closeLightbox);

  nextButton.addEventListener("click", nextPhoto);

  previousButton.addEventListener("click", previousPhoto);


  // CLICK OUTSIDE TO CLOSE

  lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
      closeLightbox();
    }

  });


  // KEYBOARD CONTROLS

  document.addEventListener("keydown", function (event) {

    if (!lightbox.classList.contains("active")) return;

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowRight") {
      nextPhoto();
    }

    if (event.key === "ArrowLeft") {
      previousPhoto();
    }

  });


  console.log("K. GANESH PIXELKAAR website initialized.");
  console.log("Wedding, Wedding Album Designing, Newborn, Corporate, Manipulation and Beauty galleries ready.");

});
