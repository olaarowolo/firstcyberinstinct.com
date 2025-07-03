// Duplicate logos for seamless infinite scroll
const slider = document.querySelector('.custom-customer-logos');
const slides = document.querySelectorAll('.custom-slide');

// Clone all slides and append to slider for continuous effect
slides.forEach((slide) => {
  const clone = slide.cloneNode(true);
  slider.appendChild(clone);
});
