var text = document.getElementById("text_line");
var button = document.getElementById("button");
button.addEventListener("click", drawForClick);

var d = document.getElementById("Dibujito");
var w = d.width;
var lienzo = d.getContext("2d");

function drawLine(color, x_ini, y_ini, x_fin, y_fin)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_ini, y_ini);
  lienzo.lineTo(x_fin, y_fin);
  lienzo.stroke();
  lienzo.closePath();
}

function drawForClick()
{
  var line = parseInt(text.value);
  var space = w / line;

  for(var l = 0;l < line;l = l + 1)
  {
    var y_i = space * l;
    var x_f = space * (l + 1);
    drawLine("red", 0, y_i, x_f, 300);
    var x_i = space * l;
    var y_f = space * (l + 1);
    drawLine("red", x_i, 0, 300, y_f);
  }

  drawLine("red", 1, 1, 299, 299);

  drawLine("green", 1, 1, 1, 299);
  drawLine("green", 1, 299, 299, 299);
  drawLine("blue", 299, 299, 299, 1);
  drawLine("blue", 1, 1, 299, 1);
}
