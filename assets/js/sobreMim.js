gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".texto").forEach((paragrafo) => {
    gsap.fromTo(paragrafo,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: paragrafo,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
                markers: false, // coloque true se quiser ver os marcadores
            }
        }
    );
});
