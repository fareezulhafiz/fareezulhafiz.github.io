const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// 1. Dark Mode Logic
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// 2. Optional: Active Link Highlighting on Scroll
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll("section, footer");
    const navLinks = document.querySelectorAll(".nav-link");

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.style.opacity = "1";
        } else {
            link.style.opacity = "0.6";
        }
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Optional: Trigger a fade animation before navigating
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
    });
});