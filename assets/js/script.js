// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    
    menuToggle.addEventListener('click', function() {
        const isOpen = nav.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
        
        // Animate hamburger to X
        const spans = menuToggle.querySelectorAll('.hamburger, .hamburger::before, .hamburger::after');
        // Since pseudo-elements can't be selected directly, we'll toggle a class on the button
        menuToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', false);
            }
        });
    });
    
    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();
            
            // Reset error states
            clearFormErrors();
            
            // Validate form
            let isValid = true;
            
            if (nombre === '') {
                showFormError('nombre', 'Por favor, ingresa tu nombre');
                isValid = false;
            }
            
            if (email === '') {
                showFormError('email', 'Por favor, ingresa tu correo electrónico');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showFormError('email', 'Por favor, ingresa un correo electrónico válido');
                isValid = false;
            }
            
            if (mensaje === '') {
                showFormError('mensaje', 'Por favor, ingresa un mensaje');
                isValid = false;
            }
            
            if (isValid) {
                // Show loading state
                const submitBtn = document.getElementById('submitBtn');
                submitBtn.disabled = true;
                
                // Simulate API call (replace with actual fetch/AJAX in production)
                setTimeout(() => {
                    // Hide loading state
                    submitBtn.disabled = false;
                    
                    // Show success message
                    showFormSuccess('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
                    
                    // Reset form
                    contactForm.reset();
                }, 1500);
            }
        });
        
        // Add real-time validation
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                const errorDiv = this.parentElement.querySelector('.form-error');
                if (errorDiv && errorDiv.textContent.trim() !== '') {
                    errorDiv.textContent = '';
                }
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to navbar links based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav ul li a[href*="' + sectionId + '"]').classList.add('active');
            } else {
                document.querySelector('.nav ul li a[href*="' + sectionId + '"]').classList.remove('active');
            }
        });
    });
    
    // Initialize AOS (if using) or other animations
    initAnimations();
});

// Helper Functions
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function showFormError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = field.parentElement.querySelector('.form-error');
    if (errorDiv) {
        errorDiv.textContent = message;
        field.classList.add('error');
    }
}

function clearFormErrors() {
    const errorDivs = document.querySelectorAll('.form-error');
    errorDivs.forEach(div => {
        div.textContent = '';
    });
    
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(field => {
        field.classList.remove('error');
    });
}

function showFormSuccess(message) {
    const successDiv = document.querySelector('.form-success');
    if (successDiv) {
        successDiv.textContent = message;
        successDiv.style.display = 'block';
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successDiv.textContent = '';
            successDiv.style.display = 'none';
        }, 5000);
    }
}

function initAnimations() {
    // Add any custom animation initialization here
    // For example, if using AOS or other animation libraries
    
    // Add intersection observer for fade-in effects on scroll
    const fadeElements = document.querySelectorAll('.service-card, .gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach((el, index) => {
        // Initial state for animation
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        
        observer.observe(el);
    });
}