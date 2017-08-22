window.onload = function init() {

    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    pincel.fillStyle = 'gray';
    pincel.fillRect(0, 0, 600, 400);

    tela.onclick = desenharCirculo;
};

var raio = 10;

function desenharCirculo(evento) {

    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    console.log(x + ',' + y);

    if (evento.shiftKey) {
        raio += 10;
    }

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}

function getElement(nome) {
    return document.querySelector(nome);
}

function getPincel(element) {
    return element.getContext('2d');
}