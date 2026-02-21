// ===== TYPEWRITER EFFECT (mobile friendly) =====
(function() {
  const words = ['Shruti Ghodke', 'a Data Analyst'];
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

// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
});

// ===== CLOSE MOBILE MENU ON LINK CLICK =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    if (navLinks && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
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



// ===== VIEW PROJECT BUTTON (demo) =====
document.addEventListener('DOMContentLoaded', function() {
  const viewBtn = document.querySelector('.view-btn');
  if (viewBtn) {
    viewBtn.addEventListener('click', function() {
      alert('Project details coming soon!');
    });
  }
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

function sendMail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    "&to=shrutighodke2003@gmail.com" +
    "&su=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(
      "Name: " + name + "\n" +
      "Email: " + email + "\n\n" +
      message
    );

  window.open(gmailLink, "_blank");
}