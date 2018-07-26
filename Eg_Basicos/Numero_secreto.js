var n = document.getElementById("text");

var adivina = document.getElementById("button");
adivina.addEventListener("click", comprovar);

var min = 1;
var max = 100;
var num_secreto = Math.random() * (max - min) + min;
num_secreto = parseInt(num_secreto);

function comprovar ()
{
  var numero = parseInt(n.value);

  if(numero == num_secreto)
  {
    alert("Wauu!! adivinaste el numero secreto");
  }
  else if(numero < num_secreto)
  {
    alert("Fallaste!! intentalo de nuevo, el numero secreto es mayor");
  }
  else if(numero > num_secreto)
  {
    alert("Fallaste!! intentalo de nuevo, el numero secreto es menor");
  }
}
