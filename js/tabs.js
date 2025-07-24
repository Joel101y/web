document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase activo de todos los botones y contenidos
        document.querySelectorAll('.tab-btn').forEach(btn => 
            btn.classList.remove('activo'));
        document.querySelectorAll('.tab-contenido').forEach(content => 
            content.classList.remove('activo'));
        
        // Añadir clase activo al botón clickeado
        button.classList.add('activo');
        
        // Mostrar el contenido correspondiente
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('activo');
    });
}); 