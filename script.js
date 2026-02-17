// ===== TYPEWRITER EFFECT (mobile friendly) =====
(function() {
  const words = ['Shruti Ghodke', 'a Data Analyst', 'a Developer'];
  let i = 0;
  let j = 0;
  let isDeleting = false;
  const typewriterSpan = document.getElementById('typewriter');
  
  if (!typewriterSpan) return;

  function typeEffect() {
    if (i < words.length) {
      if (!isDeleting && j <= words[i].length) {
        typewriterSpan.textContent = words[i].substring(0, j);
        j++;
        setTimeout(typeEffect, 120);
      } 
      else if (isDeleting && j >= 0) {
        typewriterSpan.textContent = words[i].substring(0, j);
        j--;
        setTimeout(typeEffect, 60);
      } 
      else {
        if (!isDeleting) {
          isDeleting = true;
          setTimeout(typeEffect, 1000);
        } 
        else {
          isDeleting = false;
          i = (i + 1) % words.length;
          j = 0;
          setTimeout(typeEffect, 200);
        }
      }
    }
  }
  typeEffect();
})();

// ===== CLOSE MOBILE MENU ON LINK CLICK =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const toggle = document.getElementById('nav-toggle');
    if (toggle && toggle.checked) {
      toggle.checked = false;
    }
  });
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === "#" || href === "") return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== CONTACT FORM BUTTON (demo) =====
document.getElementById('sendMessageBtn')?.addEventListener('click', function() {
  alert('📧 Demo: This is a static portfolio. Please email shrutighodke2003@gmail.com');
});

// ===== IMAGE FALLBACK (if SVGs missing) =====
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[onerror]');
  images.forEach(img => {
    img.addEventListener('error', function() {
      // onerror already defined in HTML, but just in case
      if (!this.src.includes('placeholder')) {
        this.src = 'https://via.placeholder.com/500x400?text=Image+not+found';
      }
    });
  });
});