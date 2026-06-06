/* ===== TYPING ANIMATION ===== */
const roles = [
  'Data Analyst',
  'Full Stack Developer',
  'Power BI Developer',
  'Python Developer',
  'SQL Expert'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  const currentWord = roles[roleIndex];

  if (!isDeleting) {
    el.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(type, isDeleting ? 60 : 90);
}
type();

/* ===== SCROLL FADE-IN ANIMATION ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ===== SKILLS TAB SWITCHER ===== */
function showSkill(id, btn) {
  document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.skill-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const targetPanel = document.getElementById('sp-' + id);
  if (targetPanel) targetPanel.classList.add('active');
}

/* ===== PROJECT FILTER ===== */
function filterProj(type, btn) {
  document.querySelectorAll('.pfbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.proj-card').forEach(card => {
    if (type === 'all' || card.dataset.type === type) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

/* ===== CONTACT FORM ===== */
const sendBtn = document.getElementById('send-btn');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    alert('Thanks for reaching out! Shruti will get back to you soon. 😊');
  });
}

/* ===== MOBILE NAV TOGGLE ===== */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    if (isOpen) {
      navLinks.style.cssText = '';
    } else {
      navLinks.style.cssText = `
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        background: rgba(9,9,11,0.97);
        padding: 16px 5%;
        border-bottom: 1px solid #27272a;
        gap: 4px;
      `;
    }
  });
}

/* Close mobile nav when a link is clicked */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks) navLinks.style.cssText = '';
  });
});

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    }
  });
});