// Efeito de digitação
const texto = "Minhas Redes Sociais";
let i = 0;
const velocidade = 100;

function escreverTexto() {
    if (i < texto.length) {
        document.getElementById("typing-text").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escreverTexto, velocidade);
    }
}

window.addEventListener("DOMContentLoaded", escreverTexto);

//abrir pasta
function toggleFolder() {
    const icons = document.querySelector('.app-icons');
    icons.classList.toggle('show');
}