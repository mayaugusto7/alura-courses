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

    if (evento.shiftKey && evento.altKey) {
        alert('Só aperte uma tecla por vez, por favor!');
    } else if (evento.shiftKey && raio + 5 <= 40) {
        raio += 5;
    } else if (evento.altKey && raio - 5 >= 10) {
        raio = raio - 5;
    }

    // if (evento.shiftKey) {
    //     if (raio <= 40) {
    //         raio += 10;
    //     }
    // }
    //
    // if (evento.altKey) {
    //     raio -= 5;
    // }

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