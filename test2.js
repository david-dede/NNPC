document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  let yellowLine = document.getElementById("big_line");

  function showSlide(n) {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // Show the specified slide
    slides[n].style.display = "block";
  }

  function updateYellowLineWidth() {
    let maxWidth = 100; // Maximum width
    let widthPercentage;

    // Define widthPercentage based on current slide
    switch (currentSlide) {
      case 0:
        widthPercentage = 20; // Width for slide 1
        break;
      case 1:
        widthPercentage = 40; // Width for slide 2
        break;
      case 2:
        widthPercentage = 60; // Width for slide 3
        break;
      case 3:
        widthPercentage = 80; // Width for slide 4
        break;
      case 4:
      default:
        widthPercentage = 100; // Width for slide 5 and beyond
    }

    // Ensure widthPercentage does not exceed maxWidth
    widthPercentage = Math.min(widthPercentage, maxWidth);

    // Update yellow line width
    yellowLine.style.width = widthPercentage + "%";
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

  // Initial call to show the first slide
  showSlide(currentSlide);

  // Automatically switch to the next slide every 4 seconds
  setInterval(nextSlide, 4000);

  // Call updateYellowLineWidth initially to set the initial width
  updateYellowLineWidth();
});
