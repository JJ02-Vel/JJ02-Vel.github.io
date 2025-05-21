function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('main > section');
    secciones.forEach(sec => {
        sec.style.display = (sec.id === id) ? 'block' : 'none';
    });
}
window.onload = function() {
    mostrarSeccion('inicio');
};