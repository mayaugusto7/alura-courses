window.onload = function init() {

    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    desenharTexto("Qual é a fração?", 50, 30, pincel);

    var y = 50;

    desenharQuadrado(50, y, 100, 'red', pincel);
    desenharQuadrado(150, y, 100, 'red', pincel);
    desenharQuadrado(250, y, 100, 'red', pincel);
    desenharQuadrado(350, y, 100, 'white', pincel);
};


function desenharQuadrado(x, y, tamanho, cor, pincel) {

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, tamanho, tamanho);

    pincel.strokeStyle = 'black';
    pincel.strokeRect(x, y, tamanho, tamanho);
}

function desenharTexto(texto, x, y, pincel) {

    pincel.font='20px Georgia';
    pincel.fillStyle='black';
    pincel.fillText(texto, x, y);  

}

function getElement(nome) {
    return document.querySelector(nome);
}

function getPincel(element) {
    return element.getContext('2d');
}