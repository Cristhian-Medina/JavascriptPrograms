var texto = document.getElementById("text_line");
var boton = document.getElementById("button");
boton.addEventListener("click", drawForClick);

var dibujo = document.getElementById("Dibujito");
var ancho = dibujo.width;
var lienzo = dibujo.getContext("2d");

console.log(texto);

function drawLine(color, x_ini, y_ini, x_fin, y_fin, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_ini, y_ini);
  lienzo.lineTo(x_fin, y_fin);
  lienzo.stroke();
  lienzo.closePath();
}

function drawForClick(){
  var line = parseInt(texto.value);
  var space = ancho / line;

  for(var l = 0;l < line;l = l + 1){
    var y_i = space * l;
    var x_f = space * (l + 1);
    drawLine("red", 0, y_i, x_f, 300, lienzo);
    var x_i = space * l;
    var y_f = space * (l + 1);
    drawLine("red", x_i, 0, 300, y_f, lienzo);
    var x_f = space * l;
    var y_f = space * (l + 1);
    drawLine("blue", 0, 300, x_f, y_f, lienzo);
    var x_f = space * l;
    var y_f = space * (l + 1);
    drawLine("blue", 300, 0, x_f, y_f, lienzo);
  }
}
