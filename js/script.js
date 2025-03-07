// Adicionando elementos
const botaoClique = document.querySelector("#clique");
const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");
const sectionBtn = document.querySelector("#sec-button");
const sectionMsg = document.querySelector("#sec-msg");

let contador = 0;

//Adicionando eventos
botaoClique.addEventListener("click", () => {
    esconderBotao();
    aparecerMensagem();
});

// Functions
const esconderBotao = () => {
    sectionBtn.style.display = "none";
}

const aparecerMensagem = () => {
    sectionMsg.style.display = "block";
}

function slider() {
    contador++;

    if(contador > imagens.length - 1) {
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 386}px)`;
}

setInterval(slider, 1500);

document.addEventListener("mousemove", function (e) {
    const spark = document.createElement("div");
    spark.classList.add("spark");
    document.body.appendChild(spark);

    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;

    setTimeout(() => {
        spark.remove();
    }, 500);
});


function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️"; // Ícone de coração

    // Define posição inicial aleatória
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${-10}px`;

    // Define duração e velocidade aleatórias
    heart.style.animationDuration = `${2 + Math.random() * 3}s`; // Entre 2s e 5s
    heart.style.animationDelay = `${Math.random()}s`;

    document.body.appendChild(heart);

    // Remove o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Criar corações constantemente
setInterval(createHeart, 300);


