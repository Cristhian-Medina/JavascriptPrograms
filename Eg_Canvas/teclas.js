var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado); //evento
var area = document.getElementById("area_de_dibujo"); //canvas
var papel = area.getContext("2d");  //contexto de trabajo en canvas
var x = 150;
var y = 150;

dibujarLinea("#ba0d84", 149, 149, 151, 151, papel); //punto de partida

function dibujarLinea(color, x_ini, y_ini, x_fin, y_fin, lienzo) //funcion para dibujar lineas
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 1;
  lienzo.moveTo(x_ini, y_ini);
  lienzo.lineTo(x_fin, y_fin);
  lienzo.stroke();
  lienzo.closePath();
}

var movimiento = 5;          //velocidad de movimiento
var colorcito = "#0358ff";     //colo de la linea

function dibujarTeclado(evento) //funcion para dibujar con las teclas de direccion

{
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;

    default:  //reinicia los valores de x y y
      x = 150;
      y = 150;
      break;
  }
}
