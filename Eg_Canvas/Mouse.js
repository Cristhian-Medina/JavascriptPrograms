var tab = document.getElementById("tablero");
var pizarra = tab.getContext("2d");

tab.addEventListener("mousedown", presionar);
tab.addEventListener("mouseup", soltar);
tab.addEventListener("mousemove", linea);
document.addEventListener("keydown", cambiarColor);

var presion = false;
var tonalidad = "#000000";
var colorcito ={
  B:66, //azul
  Y:89, //amarillo
  R:82, //rojo
  G:71, //verde
  TAB:32 // BORRA LA PANTALLA
};
var x;
var y;

function dibujarLinea(color, x_ini, y_ini, x_fin, y_fin, lienzo){

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_ini, y_ini);
  lienzo.lineTo(x_fin, y_fin);
  lienzo.stroke();
  lienzo.closePath();

} //function dibujarlineas en canvas

function presionar(event){

  presion = true;
  x = event.offsetX;
  y = event.offsetY;

}//activa el cursor para dibujar

function soltar(event){

  presion = false;
  x = event.offsetX;
  y = event.offsetY;

}//desactiva el cursor para dibujar

function linea(event){

  if(presion){

    dibujarLinea(tonalidad, x, y, event.offsetX, event.offsetY, pizarra);

  }  // if presion true

  x = event.offsetX;
  y = event.offsetY;

}  // function linea

function cambiarColor(event){

  switch (event.keyCode){

    case colorcito.B:
      tonalidad = "#001de0";
      break;
    case colorcito.R:
      tonalidad = "#f70a0a";
      break;
    case colorcito.Y:
      tonalidad = "#f4ea10";
      break;
    case colorcito.G:
      tonalidad = "#1ab600";
      break;
    case colorcito.TAB:
    pizarra.clearRect(0, 0, tab.width, tab.height);
      break;
    default:
      tonalidad = "#000000";
      break;
  }
}
