// ==================== Skill Management ====================
// Скрыт - редактирование отключено

// ==================== Social Management ====================
// Скрыт - редактирование отключено

// ==================== Editable Content ====================
// Редактирование отключено - все элементы доступны только для чтения

// ==================== Scroll Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill and social cards
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.skill-card, .social-card').forEach(card => {
        observer.observe(card);
    });
});

// ==================== Mouse Follow Effect ====================
document.addEventListener('mousemove', function(e) {
    const phoneFrame = document.querySelector('.phone-frame');
    if (!phoneFrame) return;
    
    const rect = phoneFrame.parentElement.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Используется для будущих эффектов
});

// ==================== Particle Background ====================
function createParticles() {
    const body = document.body;
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '0';
        particle.style.width = Math.random() * 4 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = 'rgba(0, 102, 255, ' + (Math.random() * 0.5 + 0.1) + ')';
        particle.style.borderRadius = '50%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.boxShadow = '0 0 ' + (Math.random() * 10 + 5) + 'px rgba(0, 102, 255, 0.5)';
        
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `floatParticle ${duration}s infinite ease-in-out`;
        
        body.appendChild(particle);
    }
    
    // Добавляем стиль для анимации
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
            25% { transform: translateY(-50px) translateX(30px); opacity: 0.5; }
            50% { transform: translateY(-100px) translateX(-20px); opacity: 0.3; }
            75% { transform: translateY(-50px) translateX(-40px); opacity: 0.5; }
        }
    `;
    document.head.appendChild(style);
}

// ==================== Cursor Glow Effect ====================
function createCursorGlow() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><circle cx="16" cy="16" r="4" fill="rgba(0,102,255,0.8)"/><circle cx="16" cy="16" r="8" fill="none" stroke="rgba(0,102,255,0.3)" stroke-width="1"/></svg>') 16 16, auto;
        }
    `;
    document.head.appendChild(style);
}

// ==================== Scroll Reveal Animation ====================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.skill-card, .social-card, .bio-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    createCursorGlow();
    initScrollReveal();
    
    // Add glow effect to section titles on scroll
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.style.animation = 'titleGlow 2s ease-in-out infinite';
    });
});

// ==================== Smooth Scroll Enhancements ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== Dark Mode Toggle (Optional) ====================
function toggleDarkMode() {
    const html = document.documentElement;
    const isDark = html.style.colorScheme === 'dark';
    
    if (isDark) {
        html.style.colorScheme = 'light';
        html.style.setProperty('--primary-color', '#1a1a1a');
        html.style.setProperty('--secondary-color', '#ffffff');
        html.style.setProperty('--text-primary', '#1a1a1a');
        html.style.setProperty('--bg-light', '#f8f8f8');
        localStorage.setItem('theme', 'light');
    } else {
        html.style.colorScheme = 'dark';
        html.style.setProperty('--primary-color', '#ffffff');
        html.style.setProperty('--secondary-color', '#1a1a1a');
        html.style.setProperty('--text-primary', '#ffffff');
        html.style.setProperty('--text-secondary', '#999999');
        html.style.setProperty('--border-color', '#333333');
        html.style.setProperty('--bg-light', '#2a2a2a');
        localStorage.setItem('theme', 'dark');
    }
}

// Apply saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.style.colorScheme = 'dark';
    document.documentElement.style.setProperty('--primary-color', '#ffffff');
    document.documentElement.style.setProperty('--secondary-color', '#1a1a1a');
    document.documentElement.style.setProperty('--text-primary', '#ffffff');
    document.documentElement.style.setProperty('--text-secondary', '#999999');
    document.documentElement.style.setProperty('--border-color', '#333333');
    document.documentElement.style.setProperty('--bg-light', '#2a2a2a');
}
