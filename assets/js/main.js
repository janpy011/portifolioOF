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
