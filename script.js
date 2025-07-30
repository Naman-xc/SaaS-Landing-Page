<<<<<<< HEAD
// ======== Testimonials Slider ========

let slideIndex = 0;
const slidesContainer = document.getElementById("testimonials");
const totalSlides = slidesContainer.children.length;

// Show the current testimonial slide
function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Go to next testimonial
function next() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}

// Go to previous testimonial
function prev() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

// Optional: Auto-slide every 5 seconds
// setInterval(next, 5000);


// ======== FAQ Accordion ========

// Select all questions in the FAQ section
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    // Toggle 'open' class on the parent .faq-item
    const item = question.parentElement;
    item.classList.toggle("open");
  });
});
=======
// ======== Testimonials Slider ========

let slideIndex = 0;
const slidesContainer = document.getElementById("testimonials");
const totalSlides = slidesContainer.children.length;

// Show the current testimonial slide
function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Go to next testimonial
function next() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}

// Go to previous testimonial
function prev() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

// Optional: Auto-slide every 5 seconds
// setInterval(next, 5000);


// ======== FAQ Accordion ========

// Select all questions in the FAQ section
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    // Toggle 'open' class on the parent .faq-item
    const item = question.parentElement;
    item.classList.toggle("open");
  });
});
>>>>>>> 32627a54bf3d74e3a06ada5a00bbcaba423142ee
