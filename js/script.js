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

  function openLightbox(url) {
    lightboxImg.src = url;
    lightboxOverlay.hidden = false;
  }
  
  function closeLightbox() {
    lightboxOverlay.hidden = true;
  }

  let galleryImageAnchors = document.querySelectorAll(".gallery-img-anchor")
  const len = galleryImageAnchors.length;
  
  for (let i = len - 1; i > -1; i--) {
    let temp = galleryImageAnchors[i];
    let newList = temp.outerHTML;
    newList = newList.replace('<a ','<div ');
    newList = newList.replace('</a>','</div>');
    temp.outerHTML = newList;
  }

  galleryImageAnchors = document.querySelectorAll(".gallery-img-anchor")

  galleryImageAnchors.forEach((node) => {
    node.addEventListener("click", function () {
      openLightbox(this.querySelector("img").src);
    })
  });

  lightboxOverlay.addEventListener("click", closeLightbox);
})();

AOS.init();