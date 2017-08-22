window.onload = function init() {

    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    desenharEsquadro(50, 50, 400, 400, 'black', pincel);
    desenharEsquadro(100, 175, 275, 350, 'white', pincel);

};

function desenharEsquadro(xa, ya, xc, yc, cor, pincel) { 

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.moveTo(xa, ya);
    pincel.lineTo(xa, yc);
    pincel.lineTo(xc, yc);
    pincel.fill();
}

function getElement(nome) {
    return document.querySelector(nome);
}

function getPincel(element) {
    return element.getContext('2d');
}