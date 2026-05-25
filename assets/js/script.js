document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    menuToggle.addEventListener('click', function () {
        const isOpen = nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            clearFormErrors();

            let isValid = true;

            if (nombre === '') {
                showFormError('nombre', 'Por favor, ingrese su nombre');
                isValid = false;
            }

            if (email === '') {
                showFormError('email', 'Por favor, ingrese su correo electrónico');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showFormError('email', 'Por favor, ingrese un correo electrónico válido');
                isValid = false;
            }

            if (mensaje === '') {
                showFormError('mensaje', 'Por favor, ingrese su mensaje');
                isValid = false;
            }

            if (isValid) {
                const submitBtn = document.getElementById('submitBtn');
                submitBtn.disabled = true;

                setTimeout(() => {
                    submitBtn.disabled = false;
                    showFormSuccess('¡Gracias por su mensaje! Nos pondremos en contacto pronto.');
                    contactForm.reset();
                }, 1500);
            }
        });

        contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', function () {
                const errorDiv = this.parentElement.querySelector('.form-error');
                if (errorDiv && errorDiv.textContent.trim() !== '') {
                    errorDiv.textContent = '';
                    this.classList.remove('error');
                }
            });
        });
    }

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

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav ul li a');

    function updateActiveNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

    initScrollAnimations();
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    document.querySelectorAll('.form-error').forEach(div => {
        div.textContent = '';
    });
    document.querySelectorAll('.error').forEach(field => {
        field.classList.remove('error');
    });
}

function showFormSuccess(message) {
    const successDiv = document.querySelector('.form-success');
    if (successDiv) {
        successDiv.textContent = message;
        successDiv.style.display = 'block';
        setTimeout(() => {
            successDiv.textContent = '';
            successDiv.style.display = 'none';
        }, 5000);
    }
}

function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    if (!fadeElements.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        fadeElements.forEach(el => {
            el.classList.add('visible');
        });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(fadeElements).indexOf(entry.target);
                const delay = index * 120;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
}