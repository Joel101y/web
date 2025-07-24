document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de músculos
    const musculoBtns = document.querySelectorAll('.musculo-btn');
    
    // Añadir evento click a cada botón
    musculoBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Evitar que el click se propague
            
            // Obtener el contenedor de información asociado
            const infoBox = this.nextElementSibling;
            
            // Cerrar todos los otros cuadros de información
            document.querySelectorAll('.musculo-info.activo').forEach(box => {
                if (box !== infoBox) {
                    box.classList.remove('activo');
                    box.previousElementSibling.classList.remove('activo');
                }
            });
            
            // Alternar las clases activo en el botón y el cuadro
            this.classList.toggle('activo');
            infoBox.classList.toggle('activo');
        });
    });
    
    // Cerrar los cuadros de información al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.musculo-info') && !e.target.closest('.musculo-btn')) {
            document.querySelectorAll('.musculo-info.activo').forEach(box => {
                box.classList.remove('activo');
                box.previousElementSibling.classList.remove('activo');
            });
        }
    });
}); 