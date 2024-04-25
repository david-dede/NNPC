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
  function backSlide() {
    if(currentSlide===0){
      currentSlide=slides.length-1
    }
    currentSlide = (currentSlide - 1) % slides.length;
    showSlide(currentSlide);
  }
  let button_back = document.getElementById("button_back");
  button_back.addEventListener("click", backSlide);

  let button_next = document.getElementById("button_next");
  button_next.addEventListener("click", nextSlide);

  // Initial call to show the first slide
  showSlide(0);

  // Automatically switch to the next slide every 4 seconds
  setInterval(nextSlide, 4000);
});
