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

AOS.init();