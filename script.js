// Detecta elementos al scrollear para animarlos
const observerOptions = {
    root: null,
    rootMargin: '-10% 0px -10% 0px', // Se activa un poco antes del centro
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            // Quitamos la clase al salir para que la animación se repita al volver a subir
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

// Observar todas las secciones sticky
const stickySections = document.querySelectorAll('.sticky-section');
stickySections.forEach(el => observer.observe(el));