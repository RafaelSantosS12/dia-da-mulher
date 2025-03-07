console.log("Arquivo carregado!");

// Adicionando elementos
const botaoClique1 = document.querySelector("#clique");
const botaoClique2 = document.querySelector("#clique2");
const botaoClique3 = document.querySelector("#clique3");
const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");
const sectionBtn = document.querySelector("#sec-button");
const sectionMsg = document.querySelector("#sec-msg");
const btnVoltar = document.querySelector("#voltar");

let contador = 0;

//Adicionando eventos
botaoClique1.addEventListener("click", () => {
    esconderBotao1();
    mostrarBotao2();
});

botaoClique2.addEventListener("click", () => {
    esconderBotao2();
    mostrarBotao3();
});

botaoClique3.addEventListener("click", () => {
    esconderBotao3();
    aparecerMensagem();
});

btnVoltar.addEventListener("click", () => {
    esconderMensagem();
    mostrarBotao1();
});

// Functions
const mostrarBotao1 = () => {
    botaoClique1.style.display = "block";
    console.log("Botão 1 mostrado!");
}

const esconderBotao1 = () => {
    botaoClique1.style.display = "none";
    console.log("Botão 1 escondido!");
}

const mostrarBotao2 = () => {
    botaoClique2.style.display = "block";
    console.log("Botão 2 mostrado!");
}

const esconderBotao2 = () => {
    botaoClique2.style.display = "none";
    console.log("Botão 2 escondido!");
}

const mostrarBotao3 = () => {
    botaoClique3.style.display = "block";
    console.log("Botão 3 mostrado!");
}

const esconderBotao3 = () => {
    botaoClique3.style.display = "none";
    console.log("Botão 3 escondido!");
}

const aparecerMensagem = () => {
    sectionMsg.style.display = "block";
    // Criar corações constantemente
    setInterval(createHeart, 200);
}

const esconderMensagem = () => {
    sectionMsg.style.display = "none";
}

// Função para parar a criação de corações
function pararCorações() {
    clearInterval(heartInterval); // Isso vai parar o intervalo
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


