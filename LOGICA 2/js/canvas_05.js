window.onload = function init() {

    for (var i = 0; i <= 600;) {
        desenharQuadrado(i, 0, 'green');
        i = i + 50;
    }

    for (var j = 0; j <= 600;) {
        desenharQuadrado(0, j, 'red');
        j = j + 50;
    }

    for (var k = 0; k <= 600;) {
        desenharQuadrado(k, 50, 'blue');
        k = k + 50;
    }

    for (var n = 0; n <= 600;) {
        desenharQuadrado(n, 100, 'yellow');
        n = n + 50;
    }
};


function desenharQuadrado(x, y, cor) {

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, 50, 50);
    pincel.strokeStyle = 'white';
    pincel.strokeRect(x, y, 50, 50);
}