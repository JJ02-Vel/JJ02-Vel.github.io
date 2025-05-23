function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('main > section');
    secciones.forEach(sec => {
        sec.style.display = (sec.id === id) ? 'block' : 'none';
    });
}

function mostrarPregunta(id) {
    const preguntas = document.querySelectorAll('.pregunta-contenido');
    preguntas.forEach(p => p.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

window.onload = function() {
    mostrarSeccion('inicio');
};