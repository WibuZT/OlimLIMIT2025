// ==========================================
// LIMIT 2025 - Main JavaScript File
// ==========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    setupSmoothScrolling();
    setupNavbarScrollEffect();
    setupFadeInAnimations();
    setupCardInteractions();
    setupPricingCardInteractions();
    setupContactCardInteractions();
    setupParallaxEffect();
    setupEasterEgg();
}

// ==========================================
// SMOOTH SCROLLING NAVIGATION
// ==========================================
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
function setupNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// ==========================================
// FADE IN ANIMATIONS ON SCROLL
// ==========================================
function setupFadeInAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ==========================================
// CARD HOVER INTERACTIONS
// ==========================================
function setupCardInteractions() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ==========================================
// PRICING CARD INTERACTIONS
// ==========================================
function setupPricingCardInteractions() {
    document.querySelectorAll('.pricing-card').forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            document.querySelectorAll('.pricing-card').forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            this.classList.add('active');
            
            // Add visual feedback
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
}

// ==========================================
// CONTACT CARD INTERACTIONS
// ==========================================
function setupContactCardInteractions() {
    document.querySelectorAll('.contact-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotateY(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg)';
        });
    });
}

// ==========================================
// WHATSAPP CONTACT FUNCTIONS
// ==========================================
function openContact(level) {
    let phoneNumber = '';
    let contactName = '';
    
    switch(level) {
        case 'sd':
            phoneNumber = '6282143927423';
            contactName = 'Adhinda (Contact Person SD)';
            break;
        case 'smp':
            phoneNumber = '6282131499947';
            contactName = 'Riskiyah (Contact Person SMP)';
            break;
        case 'sma':
            phoneNumber = '6282333490537';
            contactName = 'Indri (Contact Person SMA)';
            break;
    }
    
    const message = `Halo ${contactName}, saya tertarik untuk mendaftar Olimpiade Matematika LIMIT 2025. Bisakah Anda memberikan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

// ==========================================
// IMPORTANT LINKS FUNCTIONS
// ==========================================
function openLink(type) {
    // Update URLs below with actual links
    const links = {
        registration: 'https://docs.google.com/forms/d/e/1FAIpQLSeq3TxA96R89LjbmmmS6eH0BWXSF8CP8Qs1UbO1LF-AdYxOQA/viewform',
        payment: 'https://your-payment-guide-link.com', // Replace with actual payment guide link
        group: 'https://chat.whatsapp.com/your-group-link' // Replace with actual WhatsApp group link
    };
    
    if (links[type]) {
        window.open(links[type], '_blank');
    } else {
        alert('Link akan segera tersedia. Silakan hubungi contact person untuk informasi lebih lanjut.');
    }
}

// ==========================================
// MASCOT INTERACTION FUNCTIONS
// ==========================================
function maskotClick(side) {
    const messages = {
        left: [
            "🎯 Semangat belajar matematika! LIMIT 2025 menunggumu!",
            "📚 Persiapkan diri terbaik untuk olimpiade matematika!",
            "💪 Jadilah genius matematika di LIMIT 2025!",
            "🏆 Raih prestasi terbaikmu di olimpiade ini!"
        ],
        right: [
            "🎓 FMIPA UNEJ mendukung semangatmu!",
            "✨ Matematika adalah bahasa alam semesta!",
            "🌟 Bergabunglah dengan para genius matematika!",
            "🎉 LIMIT 2025 - Tempat lahirnya juara matematika!"
        ]
    };
    
    const randomMessage = messages[side][Math.floor(Math.random() * messages[side].length)];
    
    // Add animation effect
    const mascot = document.querySelector(`.mascot-${side}`);
    if (mascot) {
        mascot.style.animation = 'pulse 0.5s ease-in-out 2';
        
        setTimeout(() => {
            mascot.style.animation = '';
        }, 1000);
    }
    
    // Show message
    alert(randomMessage);
}

// ==========================================
// PARALLAX EFFECT
// ==========================================
function setupParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// ==========================================
// EASTER EGG FUNCTION
// ==========================================
function setupEasterEgg() {
    let clickCount = 0;
    const logo = document.querySelector('.logo');
    
    if (logo) {
        logo.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 5) {
                this.style.animation = 'pulse 0.5s ease-in-out 3';
                alert('🎉 Selamat! Anda menemukan easter egg! Semoga beruntung di olimpiade! 🎉');
                clickCount = 0;
            }
        });
    }
}

// ==========================================
// COUNTER ANIMATION UTILITY
// ==========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (element) {
            element.textContent = Math.floor(start);
        }
        
        if (start >= target) {
            if (element) {
                element.textContent = target;
            }
            clearInterval(timer);
        }
    }, 16);
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Function to handle responsive navigation (if needed for mobile menu)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Function to validate form inputs (can be extended)
function validateForm(formData) {
    // Add form validation logic here
    return true;
}

// Function to show success message
function showSuccessMessage(message) {
    alert(message); // You can replace this with a more elegant modal
}

// Function to show error message
function showErrorMessage(message) {
    alert(message); // You can replace this with a more elegant modal
}

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Throttle function for scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// EXPORTS (if using modules)
// ==========================================
// Uncomment if you're using ES6 modules
/*
export {
    openContact,
    openLink,
    maskotClick,
    animateCounter,
    toggleMobileMenu,
    validateForm,
    showSuccessMessage,
    showErrorMessage
};
*/