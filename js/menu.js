// menu.js
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('main-nav');
    if (!menuBtn || !nav) return;

    // Marcar enlace activo basado en la URL actual
    const currentPage = window.location.pathname.split('/').pop();
    const links = nav.querySelectorAll('a');
    
    links.forEach(link => {
        // Remover clase active de todos los enlaces
        link.classList.remove('active');
        
        // Si la URL del enlace coincide con la página actual, marcarlo como activo
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        
        // Para index.html o directorio raíz
        if ((currentPage === '' || currentPage === 'index.html') && 
            link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });

    menuBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        nav.classList.toggle('open');
        menuBtn.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', nav.classList.contains('open'));
    });

    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
            nav.classList.remove('open');
            menuBtn.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('open');
            menuBtn.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}); 