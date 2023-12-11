const sim = window.document.getElementById("botãosim");
const nao = window.document.getElementById("botãonão");
const resp = window.document.getElementById("respostasim");

function moverBotao() {
    var botao = sim;
    var novoX = Math.random() * window.innerWidth;
    var novoY = Math.random() * window.innerHeight;

    botao.style.left = novoX + 'px';
    botao.style.top = novoY + 'px';
}

let estado = -1;

function entrar() {
    estado++;
    if (estado === 0) {
        nao.style.transform = "translate(50%)";
        sim.style.transform = "translate(130px, -150px)";
    }
    if (estado == 1) {
        sim.style.transform = "translate(130px, 150px)";
    }
    if (estado == 2) {
        sim.style.transform = "translate(-325px, 150px)";
    }
    if (estado == 3) {
        sim.style.transform = "translate(-325px, -150px)";
    }
    if (estado == 4) {
        sim.style.transform = "translate(135px, 150px)";
    }
    if (estado == 5) {
        sim.style.transform = "translate(135px, -150px)";
    }
    if (estado == 6) {
        sim.style.transform = "translate(-325px, 150px)";
    }
    if (estado == 7) {
        sim.style.transform = "translate(-325px, -150px)";
        estado = -1;
    }
}

sim.addEventListener("mouseenter", entrar);

nao.addEventListener("click", clicar);

function clicar() {
    resp.style.transform = " translate(370px, 350px)";
    resp.innerHTML = "HORA DE RECEBER SEU PRESENTE!!";
    nao.style.transform = "translate(0px)";
    sim.style.transform = "translate(0px, 0px)";

    resp.style.opacity = 1;

    setTimeout(function() {
        resp.style.opacity = 0;
    }, 3000);

    moverBotao();
}