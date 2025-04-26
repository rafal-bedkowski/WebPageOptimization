const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close menu on link click
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
  // Smooth scroll to internal sections
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active menu item on scroll
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 100;
  navLinks.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (
      section &&
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
