window.onload = function init() {

    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    pincel.fillStyle = 'gray';
    pincel.fillRect(0, 0, 600, 400);

    //tela.onclick = desenharCirculo;
    tela.onmousemove = desenharCirculo;
    tela.onmousedown = habilitaDesenhar;
    tela.onmouseup = desabilitaDesenhar;

    // Funcoes anonimas nao tem nome
    // elas podem ser atribuidas a uma variavel
    // atribuindo diretamente a função anônima
    // tela.onmousedown = function() {
    //
    //     desenha = true;
    // };

    // atribuindo diretamente a função anônima
    // tela.onmouseup = function() {
    //
    //     desenha = false;
    // }
};

var desenha = false;

function desenharCirculo(evento) {

    var paleta = document.querySelector('input');
    var tela = getElement('canvas');

    if(desenha) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        pincel.fillStyle = 'blue';
        pincel.beginPath();
        pincel.arc(x, y, 10, 0, 2 * 3.14);
        pincel.fill();
    }

    console.log(x + ',' + y);
}

function habilitaDesenhar() {
    desenha = true;
}

function desabilitaDesenhar() {
    desenha = false;
}


function getElement(nome) {
    return document.querySelector(nome);
}

function getPincel(element) {
    return element.getContext('2d');
}