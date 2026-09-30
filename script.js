// Mobile Navbar Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close Mobile Menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// Typing Text Animation Effect
const words = ["Web Developer", "Frontend Enthusiast", "JavaScript Programmer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingTarget = document.querySelector('.typing-text');

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingTarget.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingTarget.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 1500; // Pause at end of word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 400; // Pause before typing new word
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Active Navigation Highlighting on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Contact Form Submission Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('senderName').value;
  alert(`Thank you, ${name}! Your message has been submitted successfully.`);
  contactForm.reset();
});