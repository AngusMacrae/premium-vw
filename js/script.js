const galleryFilterSelect = document.getElementById("gallery-filter-select");
const galleryImageContainers = document.querySelectorAll(".gallery-img-container");

galleryFilterSelect.addEventListener("change", function () {
  const filter = this.value;
  galleryImageContainers.forEach(img => {
    if (filter === "all" || img.dataset.category == filter) {
      img.classList.remove("hidden");
    } else {
      img.classList.add("hidden");
    }
  });
});

(function replaceAnchorsWithClickableDivs() {
  const lightboxOverlay = document.getElementById("lightbox-overlay");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
  let lastOpenedImg = null;

  function openLightbox(anchor) {
    lightboxImg.src = anchor.querySelector("img").src;
    lightboxOverlay.hidden = false;
    lastOpenedImg = anchor;
    lightboxCloseBtn.focus();
  }
  
  function closeLightbox() {
    lightboxOverlay.hidden = true;
    lastOpenedImg.focus();
  }

  let galleryImageAnchors = document.querySelectorAll(".gallery-img-anchor")
  const len = galleryImageAnchors.length;
  
  for (let i = len - 1; i > -1; i--) {
    let temp = galleryImageAnchors[i];
    let newList = temp.outerHTML;
    newList = newList.replace('<a ','<div tabindex="0"');
    newList = newList.replace('</a>','</div>');
    temp.outerHTML = newList;
  }

  galleryImageAnchors = document.querySelectorAll(".gallery-img-anchor")

  galleryImageAnchors.forEach((node) => {
    node.addEventListener("click", function () {
      openLightbox(this);
    });
    node.addEventListener("keydown", function(event) {
       if (event.keyCode === 13) {
          event.preventDefault();
          node.click();
       }
    });
  });

  lightboxOverlay.addEventListener("click", closeLightbox);
  lightboxOverlay.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) {
      closeLightbox();
    }
  });
})();

AOS.init();