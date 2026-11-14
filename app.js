
// K. GANESH PIXELKAAR - WEBSITE JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {

  // COPYRIGHT YEAR

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
      eyebrow: "WEDDING PHOTOGRAPHY",
      title: "Wedding Photography Gallery",
      folder: "images/wedding/",
      files: [
        "wedding-1.jpg",
        "wedding-2.jpg",
        "wedding-3.jpg",
        "wedding-4.jpg",
        "wedding-5.jpg",
        "wedding-6.jpg",
        "wedding-7.jpg",
        "wedding-8.jpg",
        "wedding-9.jpg",
        "wedding-10.jpg",
        "wedding-11.jpg",
        "wedding-12.jpg",
        "wedding-13.jpg",

        // NEW WEDDING PHOTOS
        "087A7042.JPG",
        "087A7060.JPG",
        "087A7100.JPG",
        "087A7101.JPG",
        "087A7103.JPG",
        "087A7205.JPG",
        "087A7228.JPG",
        "087A7232.JPG"
      ]
    },


    // WEDDING ALBUM DESIGNING GALLERY

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
        // EXISTING CORPORATE PHOTOS
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
        "corporate-14.jpg",

        // NEW CORPORATE PHOTOS
        "Corporate- (1).JPG",
        "Corporate- (2).jpg",
        "Corporate- (3).jpg",
        "Corporate- (4).jpg",
        "Corporate- (5).jpg",
        "Corporate- (6).jpg",
        "Corporate- (7).jpg",
        "Corporate- (8).jpg",
        "Corporate- (9).jpg",
        "Corporate- (10).jpg",
        "Corporate- (11).jpg",
        "Corporate- (12).jpg",
        "Corporate- (13).jpg",
        "Corporate- (14).jpg",
        "Corporate- (15).JPG",
        "Corporate- (16).jpg",
        "Corporate-.jpg"
      ],
      tryUppercaseExtension: true
    },


    // PRE-WEDDING PHOTO MANIPULATION & ENHANCEMENT

    manipulation: {
      eyebrow: "PRE-WEDDING PHOTO MANIPULATION & ENHANCEMENT",
      title: "Pre-Wedding Photo Manipulation & Enhancement",
      folder: "images/pre-wedding/",
      files: [

        // EXISTING 7 PHOTOS
        "manipulation-1.jpg",
        "manipulation-2.jpg",
        "manipulation-3.jpg",
        "manipulation-4.jpg",
        "manipulation-5.jpg",
        "manipulation-6.jpg",
        "manipulation-7.jpg",

        // NEW 17 PHOTOS
        "DSC06206.jpeg",
        "DSC08415.jpeg",
        "DSC08470.jpeg",
        "_01A8290A.jpg",
        "_01A8360.JPG",
        "_01A8379 copy.jpg",
        "_01A8385 copy.jpg",
        "0B3A0077-GAN.jpg",
        "0B3A0231-GAN.jpg",
        "0B3A0380-GAN.jpg",
        "0B3A1749-GAN.jpg",
        "0B3A1774 copy.jpg",
        "0B3A2114 copy.jpg",
        "0B3A9142-GAN.jpg",
        "DSC05742A.jpg",
        "DSC05818.JPG",
        "DSC05913 Acopy 2.jpg"
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
        "Beauty (12).jpg",
        "Beauty (13).jpg",
        "Beauty (14).jpg"
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


      // IMAGE CLICK - OPEN LIGHTBOX

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
  console.log("Wedding Photography, Wedding Album Designing, Newborn, Corporate, Pre-Wedding Photo Manipulation and Beauty galleries ready.");

});
