document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(n) {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // Show the specified slide
    slides[n].style.display = "block";
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  let button = document.getElementById("button")
  button.addEventListener('click',nextSlide)

  // Initial call to show the first slide
  showSlide(0);

  // Automatically switch to the next slide every 4 seconds
  setInterval(nextSlide, 4000);
});
