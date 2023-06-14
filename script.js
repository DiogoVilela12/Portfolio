function mostrarMenu(elemento) {
    elemento = document.getElementById(elemento);

    if (elemento.style.visibility == 'visible') {
        elemento.style.visibility = 'hidden'
        document.getElementById("cabecalho").style.height = "2.5rem";

    } else {
        elemento.style.visibility = 'visible'
        document.getElementById("cabecalho").style.height = "12.5rem";

    }
}

function esconderMenu(elemento) {
    var elemento = document.getElementById(elemento);

    if (window.matchMedia("(min-width: 768px)").matches == false) {
        document.getElementById("cabecalho").style.height = "2.5rem";
        elemento.style.visibility = 'hidden'
    }
}