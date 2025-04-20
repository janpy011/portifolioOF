const animarOnScroll = () => {
    const elementos = document.querySelectorAll('[data-animar]');

    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        const alturaTela = window.innerHeight * 0.85;

        if (posicao < alturaTela) {
            const delay = el.dataset.delay || '0s';
            el.style.setProperty('--delay', delay);
            el.classList.add('ativo');
        }
    });
};

window.addEventListener('scroll', animarOnScroll);
window.addEventListener('load', animarOnScroll);
