
// =====================================================
// 🎬 BANNER ANIMADO DE ABERTURA
// =====================================================

window.addEventListener("load", () => {

    const video = document.getElementById("animacao-abertura");
    const preloader = document.getElementById("preloader");

    if (!video || !preloader) return;


    // Verifica se a pessoa está usando celular
    const celular = window.matchMedia("(max-width: 768px)").matches;


    // Escolhe o vídeo correto
    if (celular) {
        video.src = "assets/banner-celular.webm";
    } else {
        video.src = "assets/banner-desktop.webm";
    }


    // Carrega o vídeo
    video.load();


    // Começa o vídeo
    video.play().catch(() => {
        console.log("O navegador bloqueou o autoplay do vídeo.");
    });


    // Quando o vídeo terminar
    video.addEventListener("ended", () => {

        // Faz a tela desaparecer suavemente
        preloader.classList.add("escondido");


        // Remove o preloader depois da transição
        setTimeout(() => {
            preloader.remove();
        }, 800);

    });

});
