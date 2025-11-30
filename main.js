const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");

let currentSlide = 0;
let slideTimer;

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentSlide = index;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlideHandler() {
  showSlide(currentSlide - 1);
}

function startAutoPlay() {
  slideTimer = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
  clearInterval(slideTimer);
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    stopAutoPlay();
    nextSlide();
    startAutoPlay();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoPlay();
    prevSlideHandler();
    startAutoPlay();
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.getAttribute("data-index"), 10);
    stopAutoPlay();
    showSlide(index);
    startAutoPlay();
  });
});

showSlide(currentSlide);
startAutoPlay();
