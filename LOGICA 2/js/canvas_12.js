window.onload = function init() {

    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    pincel.fillStyle = 'grey';
    pincel.fillRect(0, 0, 600, 400);

    tela.onclick = desenharCirculo;
};


function desenharCirculo(evento) {

    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    pincel.fillStyle = 'blue';
    pincel.beginPath();

    if (evento.shiftKey) {
        pincel.arc(x, y, 20, 0, 2 * 3.14);
    } else {
        pincel.arc(x, y, 10, 0, 2 * 3.14);
    }

    pincel.fill();
    console.log(x + ',' + y);
}

function getElement(nome) {
    return document.querySelector(nome);
}

function getPincel(element) {
    return element.getContext('2d');
}