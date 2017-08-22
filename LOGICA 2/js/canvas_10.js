window.onload = function init() {

    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    pincel.fillStyle = 'gray';
    pincel.fillRect(0, 0, 600, 400);

    //Navegador chama a funcao exibirAlerta
    tela.onclick = desenharCirculo;

};

function getElement(nome) {
    return document.querySelector(nome);
}

function getPincel(element) {
    return element.getContext('2d');
}

//parametro evento e populado pelo navegador
function desenharCirculo(event) {

    var tela = getElement('canvas');
    var pincel = getPincel(tela);

    var x = event.pageX - tela.offsetLeft;
    var y = event.pageY - tela.offsetTop;

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * Math.PI);
    pincel.fill();

    //alert('Cliquei');
    console.log(event);
    console.log('X:' + x + ', Y:' + y);
}