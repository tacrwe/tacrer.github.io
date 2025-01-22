let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelector('.slides');
  const slideCount = document.querySelectorAll('.slide').length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = slideCount - 1;
  } else if (currentSlide >= slideCount) {
    currentSlide = 0;
  }

  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
