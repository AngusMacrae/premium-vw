const galleryFilterSelect = document.getElementById("gallery-filter-select");
const galleryImageContainers = document.querySelectorAll(".gallery-img-container");
const galleryImages = document.querySelectorAll(".gallery-img-container img");

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

galleryImages.forEach(image => image.addEventListener("click", function() {
  window.open(image.src, '_blank');
}));
