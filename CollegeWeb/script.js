const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute("href"));
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    });
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Form submitted successfully!");
    contactForm.reset();
});

const slides = document.querySelectorAll(".hero-slide");
const slideInterval = 5000;
let slideIndex = 0;

function showSlide() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
}

setInterval(showSlide, slideInterval);
