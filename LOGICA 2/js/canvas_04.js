window.onload = function init() {
 
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(0, 0, 600, 400);

  pincel.fillStyle='yellow';
    pincel.beginPath();
    pincel.moveTo(300, 50);
    pincel.lineTo(50, 200);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.beginPath();
    pincel.moveTo(300, 350);
    pincel.lineTo(50, 200);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.fillStyle = 'darkblue';
    pincel.beginPath();
    pincel.arc(300, 200, 100, 0, 2 * Math.PI);
    pincel.fill();

}