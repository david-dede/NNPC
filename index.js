document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  let yellowLine = document.getElementById("big_line");

  function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
  }

  function updateYellowLineWidth() {
    let maxWidth = 100;
    let widthPercentage;

    switch (currentSlide) {
      case 0:
        widthPercentage = 20;
        break;
      case 1:
        widthPercentage = 40;
        break;
      case 2:
        widthPercentage = 60;
        break;
      case 3:
        widthPercentage = 80;
        break;
      case 4:
      default:
        widthPercentage = 100;
    }

    widthPercentage = Math.min(widthPercentage, maxWidth);

    yellowLine.style.transition = "width 0.5s ease";
    yellowLine.style.width = widthPercentage + "%";

    setTimeout(function () {
      yellowLine.style.transition = ""; 
    }, 500);
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updateYellowLineWidth();
  }

  function backSlide() {
    if (currentSlide === 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = (currentSlide - 1) % slides.length;
    }
    showSlide(currentSlide);
    updateYellowLineWidth();
  }

  let buttonBack = document.getElementById("button_back");
  buttonBack.addEventListener("click", backSlide);

  let buttonNext = document.getElementById("button_next");
  buttonNext.addEventListener("click", nextSlide);

  showSlide(currentSlide);

  setInterval(nextSlide, 4000);

  updateYellowLineWidth();
});
