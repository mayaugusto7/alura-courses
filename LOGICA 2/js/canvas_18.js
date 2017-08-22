var raio = 10;

window.onload = function init() {

    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    pincel.fillStyle = 'gray';
    pincel.fillRect(0, 0, 600, 400);
};

var x = 1;

function desenha() {
    limpaTela();
    circulo(x, 100, 10);
    x = x + 1;
}

setInterval(desenha, 30);

function circulo(x, y, raio) {

    for(var x = 0; x < 600; x = x + 1) {
        limpaTela();
        circulo(x, 100, 10);
    }

    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2*Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function getElement(nome) {
    return document.querySelector(nome);
}

function getPincel(element) {
    return element.getContext('2d');
}