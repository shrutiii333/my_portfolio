// Simple JS for future enhancements
console.log("Portfolio Loaded Successfully");
// Simple fade-in animation for education items
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.edu-item');
    
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200); // Staggered delay
    });
});


// Function to add a fade-in effect to the tech icons
document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon-item');

    icons.forEach((icon, index) => {
        // Start them as invisible
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
        icon.style.transition = 'all 0.5s ease-out';

        // Trigger animation with a delay for each icon
        setTimeout(() => {
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, index * 100); 
    });
});

// Example: Log a message when an icon is clicked
const techStack = document.getElementById('techStack');
techStack.addEventListener('click', (e) => {
    const item = e.target.closest('.icon-item');
    if (item) {
        console.log(`You clicked on: ${item.innerText}`);
    }
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.blog-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').innerText;
            alert(`Opening blog: ${title}`);
            // In a real app, you'd use: window.location.href = "/blog-url";
        });
    });
});

const textElement = document.getElementById('typewriter');
const phrases = ["Shruti", "a Data Analyst",];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Remove characters
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 100;
    } else {
        // Add characters
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 200;
    }

    // Logic for switching between typing and deleting
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at the end of phrase
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Start the effect
document.addEventListener('DOMContentLoaded', type);

function copyEmail() {
    const email = "shrutighodke2003@gmail.com";
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
}


function sendMessage() {
    alert("Message Sent Successfully!");
}

// Add this just before your closing </body> tag
window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.timeline-item');
    
    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight * 0.8) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
});

// Initial styles for the animation
document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease-out';
});

