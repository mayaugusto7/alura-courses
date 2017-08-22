window.onload = function init() {

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    // desenhaCirculo(300, 180, 10, 'blue', pincel);
    // desenhaCirculo(300, 200, 10, 'red', pincel);
    // desenhaCirculo(300, 220, 10, 'yellow', pincel);
    // desenhaCirculo(280, 200, 10, 'orange', pincel);
    // desenhaCirculo(320, 200, 10, 'black', pincel);

    desenharFlor(300, 200, pincel);
    desenharFlor(150, 100, pincel);
};

function desenhaCirculo(x, y, raio, cor, pincel) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function desenharFlor(x, y, pincel) {

    desenhaCirculo(x, y + 20, 10, 'blue', pincel);
    desenhaCirculo(x, y, 10, 'red', pincel);
    desenhaCirculo(x, y - 20, 10, 'yellow', pincel);
    desenhaCirculo(x - 20, y, 10, 'orange', pincel);
    desenhaCirculo(x + 20, y, 10, 'black', pincel);
}