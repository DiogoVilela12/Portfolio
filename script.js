function mostrarMenu(elemento) {
    elemento = document.getElementById(elemento);

    if (elemento.style.visibility == 'visible') {
        elemento.style.visibility = 'hidden'
        document.getElementById("cabecalho").style.height = "2.5rem";

    } else {
        elemento.style.visibility = 'visible'
        document.getElementById("cabecalho").style.height = "15rem";

    }
}

function esconderMenu(elemento) {
    var elemento = document.getElementById(elemento);

    if (window.matchMedia("(min-width: 768px)").matches == false) {
        document.getElementById("cabecalho").style.height = "2.5rem";
        elemento.style.visibility = 'hidden'
    }
}

function definirHabilidade(Titulo, LocalizacaoImagem, Descricao) {
    
    let div = document.getElementById("habilidade__div");
    let titulo = document.getElementById("habilidade__titulo");
    let img = document.getElementById("habilidade__img");
    let texto = document.getElementById("habilidade__texto");

    div.style.display = "flex"
    div.style.visibility = "visible"

    titulo.innerHTML = Titulo
    img.setAttribute("src", LocalizacaoImagem);
    texto.innerHTML = Descricao
}