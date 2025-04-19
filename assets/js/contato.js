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

//whatsapp
document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome && mensagem) {
        const numero = '11988806169';
        const texto = `Olá, me chamo ${nome}. ${mensagem}`;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
    }
});
