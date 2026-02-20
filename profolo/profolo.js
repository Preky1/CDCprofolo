// Mode Toggle
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const sunIcon = modeToggle.querySelector('.fa-sun');
    const moonIcon = modeToggle.querySelector('.fa-moon');
    if (theme === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(theme);
}

modeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const menuList = document.querySelector('.menu-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuList.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        if (menuList.classList.contains('active')) {
            hamburger.classList.remove('active');
            menuList.classList.remove('active');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = body.getAttribute('data-theme') === 'dark' 
            ? 'rgba(15,23,42,0.98)' : 'rgba(13,76,146,0.98)';
    } else {
        navbar.style.background = 'var(--navbar-bg)';
    }
});

// Form demo
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for your message! (Demo)');
});

// Init on load
initTheme();
