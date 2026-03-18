// ============================================
// FLUXIA CORPORATE - JAVASCRIPT
// ============================================

// Scroll suave para seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
    }
}

// Menu mobile toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

function closeMenu() {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
        closeMenu();
    }
});

// Efeito de scroll na navbar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 6px 40px rgba(0, 102, 255, 0.12)';
    } else {
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.08)';
    }
});

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar cards
document.querySelectorAll('.ofertas-card, .automacao-card, .benefit-item, .sobre-card, .contato-card, .stat').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Contador animado para stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Iniciar contadores quando visíveis
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            const text = entry.target.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            if (!isNaN(number)) {
                animateCounter(entry.target, number);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

console.log('FluxIA Corporate - Site carregado com sucesso!');
