// Adicionando elementos
const botaoClique = document.querySelector("#clique");
const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;

//Adicionando eventos
botaoClique.addEventListener("click", () => {
    esconderBotao();
});

// Functions
const esconderBotao = () => {
    botaoClique.style.display = "none";
}

function slider() {
    contador++;

    if(contador > imagens.length - 1) {
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 386}px)`;
}

setInterval(slider, 1500);

