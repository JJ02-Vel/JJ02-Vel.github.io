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

function mostrarTema(id) {
    const temas = document.querySelectorAll('.tema-contenido');
    temas.forEach(t => t.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

window.onload = function() {
    mostrarSeccion('inicio');
}

document.getElementById('toggle-dark').onclick = function() {
    document.body.classList.toggle('dark-mode');
};

document.getElementById('buscador').addEventListener('input', function() {
    const texto = this.value.toLowerCase();
    document.querySelectorAll('#menu-cuestionario button').forEach(btn => {
        btn.style.display = btn.textContent.toLowerCase().includes(texto) ? '' : 'none';
    });
});

const btnArriba = document.getElementById('volver-arriba');
window.onscroll = function() {
    btnArriba.style.display = window.scrollY > 200 ? 'block' : 'none';
};
btnArriba.onclick = function() {
    window.scrollTo({top:0, behavior:'smooth'});
};