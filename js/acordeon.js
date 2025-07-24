document.querySelectorAll('.acordeon-boton').forEach(boton => {
    boton.addEventListener('click', () => {
        const contenido = boton.nextElementSibling;
        contenido.classList.toggle('activo');
    });
}); 