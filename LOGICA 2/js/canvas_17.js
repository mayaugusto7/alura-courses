var raio = 10;

window.onload = function init() {

    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    pincel.fillStyle = 'gray';
    pincel.fillRect(0, 0, 600, 400);

    desenharCirculo(300, 200, raio + 20, 'red');
    desenharCirculo(300, 200, raio + 10, 'white');
    desenharCirculo(300, 200, raio, 'red');

    tela.onclick = disparar;
};

function desenharCirculo(x, y, raio, cor) {

    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limparTela(pincel) {
    pincel.clearRect(0, 0, 600, 400);
}

function disparar(evento) {

    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    console.log(x + ', ' + y);

    if (x > 300 - raio &&
        x < 300 + raio &&
        y > 200 - raio &&
        y < 200 + raio) {
        console.log('acertou no alvo!');
    } else {
        console.log('voce errou o alvo!')
    }
}


function getElement(nome) {
    return document.querySelector(nome);
}

function getPincel(element) {
    return element.getContext('2d');
}