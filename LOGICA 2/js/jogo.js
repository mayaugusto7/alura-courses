
var raio = 10;

window.onload = function init() {
    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    pincel.fillStyle = 'white';
    pincel.fillRect(0, 0, 600, 400);

    atualizarTela(pincel);
};

function desenharCirculo(x, y, raio, cor, pincel) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela(pincel) {
    pincel.clearRect(0, 0, 600, 400);
}

function desenhaAlvo(x, y, pincel) {
    desenharCirculo(x, y, raio + 20 , 'red', pincel);
    desenharCirculo(x, y, raio + 10, 'white', pincel);
    desenharCirculo(x, y, 10, 'red', pincel);
}

function atualizarTela(pincel) {
    limpaTela(pincel);
    var xAleatorio = sortearPosicao(600);
    var yAleatorio = sortearPosicao(400);

    desenhaAlvo(xAleatorio, yAleatorio, pincel);
}

setInterval(atualizarTela(pincel), 100);

function sortearPosicao(maximo) {
    return Math.floor(Math.random() * maximo);
}

function getElement(nome) {
    return document.querySelector(nome);
}

function getPincel(element) {
    return element.getContext('2d');
}