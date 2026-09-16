// =====================================================
// EFEITO DE LUZ NOS CARDS
// =====================================================

const cards = document.querySelectorAll(".card-produto");

cards.forEach((card) => {

    const luz = card.querySelector(".luz");

    // Quando o mouse entra no card
    card.addEventListener("mouseenter", () => {

        luz.style.opacity = "1";

    });


    // Quando o mouse se movimenta dentro do card
    card.addEventListener("mousemove", (e) => {

        const posicaoCard = card.getBoundingClientRect();

        const mouseX = e.clientX - posicaoCard.left;
        const mouseY = e.clientY - posicaoCard.top;

        luz.style.transform = `
            translate(
                ${mouseX - 100}px,
                ${mouseY - 100}px
            )
        `;

    });


    // Quando o mouse sai do card
    card.addEventListener("mouseleave", () => {

        luz.style.opacity = "0";

    });

});