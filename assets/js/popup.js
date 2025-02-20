
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupClose = document.getElementById("popup-close");
const portfolioImages = document.querySelectorAll(".portfolio-image");


// Close
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none"; 
  }
});

portfolioImages.forEach(image => {
    image.addEventListener("click", () => {
      popup.style.display = "flex";
      popupImg.src = image.src;
      const caption = image.alt;
      document.getElementById("popup-caption").textContent = caption;
    });
  });