window.onload = function init() {

    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    var serie2015 = [50, 25, 20, 5];
    var serie2016 = [65, 20, 13, 2];

    var cores = ['blue', 'green', 'yellow', 'red'];

    desenharBarra(50, 50, serie2015, cores, '2015', pincel);
    desenharBarra(150, 50, serie2016, cores, '2016', pincel);
};

function desenharRetangulo(x, y, largura, altura, cor, pincel) {

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, largura, altura);
    pincel.strokeStyle = 'white';
    pincel.strokeRect(x, y, largura, altura);
}

function desenharTexto(x, y, texto, pincel) {

    pincel.font = '15px Georgia';
    pincel.fillStyle = 'black';
    pincel.fillText(texto, x, y);
}


function desenharBarra(x, y, series, cores, texto, pincel) {

    desenharTexto(x, y - 10, texto, pincel);

    var somaAltura = 0;

    for (var i = 0; i < series.length; i++) {
        var altura = series[i];
        desenharRetangulo(x, y + somaAltura, 50, altura, cores[i], pincel);
        somaAltura += altura;
    }
  
}

function getElement(nome) {
    return document.querySelector(nome);
}

function getPincel(element) {
    return element.getContext('2d');
}