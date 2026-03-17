// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.masthead-nav ul');

if (toggle && navList) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('is-open', !expanded);
    toggle.textContent = !expanded ? '[ CLOSE ]' : '[ MENU ]';
  });

  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('is-open');
      toggle.textContent = '[ MENU ]';
    });
  });
}

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.masthead-nav a[href^="#"]');

function setActiveLink() {
  const scrollPos = window.scrollY + 60;
  let current = '';

  sections.forEach(section => {
    if (section.offsetTop <= scrollPos) current = section.id;
  });

  navLinks.forEach(link => {
    link.style.color = '';
    link.style.textDecoration = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--paper)';
      link.style.textDecoration = 'underline';
    }
  });
}

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();
