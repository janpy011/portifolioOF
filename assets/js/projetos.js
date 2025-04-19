// Slider
const slides = document.querySelectorAll('.slide');
const anteriorBtn = document.querySelector('.anterior');
const proximoBtn = document.querySelector('.proximo');
let slideAtual = 0;

function mostrarSlide(index) {
    if (index < 0) slideAtual = slides.length - 1;
    else if (index >= slides.length) slideAtual = 0;
    else slideAtual = index;

    const deslocamento = -slideAtual * 100;
    document.querySelector('.carrossel').style.transform = `translateX(${deslocamento}%)`;
}

anteriorBtn.addEventListener('click', () => {
    mostrarSlide(slideAtual - 1);
});

proximoBtn.addEventListener('click', () => {
    mostrarSlide(slideAtual + 1);
});
