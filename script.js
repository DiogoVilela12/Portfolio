function mostrarMenu(elemento) {
    elemento = document.getElementById(elemento);

    if (elemento.style.visibility == 'visible') {
        document.getElementById("header").style.height = "2.5rem";
        elemento.style.visibility = 'hidden'

    } else {
        document.getElementById("header").style.height = "5rem";
        elemento.style.visibility = 'visible'
        document.getElementById("header").style.height = "12.5rem";

    }
    document.getElementById('botao__menu').style.display = 'flex'
}

function esconderMenu(elemento) {
    document.getElementById("header").style.height = "2.5rem";
    elemento = document.getElementById(elemento);
    elemento.style.visibility = 'hidden'
}