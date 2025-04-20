/* ===== MENU MOBILE ===== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !toggle.contains(e.target)) {
                nav.classList.remove('show');
            }
        });

        const navLinks = nav.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('show');
            });
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

/* ===== PARALLAX ===== */
new Rellax('.parallax');

/* ===== ANIMAÇÕES GSAP ===== */
gsap.from('.nav__logo', { opacity: 0, duration: 2, delay: 0.3, y: 20 });
gsap.from('.nav__toggle', { opacity: 0, duration: 2, delay: 0.5, y: 20 });
gsap.from('.nav__item', {
    opacity: 0,
    duration: 2,
    delay: 0.6,
    y: 20,
    stagger: 0.2
});
gsap.from('.home__title', { opacity: 0, duration: 2, delay: 1, y: 40 });
gsap.from('.home__subtitle', { opacity: 0, duration: 2, delay: 1.2, y: 40 });
gsap.from('.home__scroll', { opacity: 0, duration: 2, delay: 1.4, y: 20 });

/* ===== SCROLL REVEAL ===== */
const sr = ScrollReveal({
    duration: 2000,
    reset: true
});

sr.reveal('.section__data', { origin: 'left', distance: '50px' });
sr.reveal('.section__img', { origin: 'right', distance: '50px', delay: 200 });

/* ===== TEXTO DIGITANDO NO LOGO COM CURSOR PISCANDO ===== */
const textosLogo = ['Janpierry', 'Sobre Mim ←'];
let logoIndex = 0;
const logo = document.querySelector('.nav__logo');

logo.style.position = 'relative';

const style = document.createElement('style');
style.innerHTML = `
.nav__logo::after {
    content: '|';
    animation: blink 1s step-end infinite;
    position: absolute;
    right: -10px;
    top: 0;
}
@keyframes blink {
    50% { opacity: 0; }
}
`;
document.head.appendChild(style);

function escreverTexto(texto, callback) {
    let i = 0;
    logo.textContent = '';

    function digitar() {
        if (i < texto.length) {
            logo.textContent += texto.charAt(i);
            i++;
            setTimeout(digitar, 100);
        } else if (callback) {
            setTimeout(callback, 1500);
        }
    }

    digitar();
}

function apagarTexto(callback) {
    let texto = logo.textContent;
    let i = texto.length;

    function apagar() {
        if (i > 0) {
            logo.textContent = texto.substring(0, i - 1);
            i--;
            setTimeout(apagar, 50);
        } else if (callback) {
            callback();
        }
    }

    apagar();
}

function animarLogo() {
    escreverTexto(textosLogo[logoIndex], () => {
        apagarTexto(() => {
            logoIndex = (logoIndex + 1) % textosLogo.length;
            animarLogo();
        });
    });
}

animarLogo();
