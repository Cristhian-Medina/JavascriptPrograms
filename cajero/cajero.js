class Billetes
{
  constructor(v, c)
  {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.imagen.src = imagenBillete[this.valor];
  }
}

var imagenBillete = [];
imagenBillete[100] = "b100.png";
imagenBillete[50] = "b50.png";
imagenBillete[20] = "b20.png";
imagenBillete[10] = "b10.png";
imagenBillete[5] = "b5.png";
imagenBillete[2] = "b2.png";
imagenBillete[1] = "b1.png";

var cajero = [];
cajero.push(new Billetes(100, 4));
cajero.push(new Billetes(50, 3));
cajero.push(new Billetes(20, 2));
cajero.push(new Billetes(10, 6));

var resultado = document.getElementById("resultado");
var entregado = [];
var boton1 = 0;
var dinero = 0;
var darDinero = 0, traerDinero = 0;
var clave = 0, traerClave = 0;
var div = 0;
var papeles = 0;

boton1 = document.getElementById("button1");
boton1.addEventListener("click", check);

function check(event)
{
  traerDinero = document.getElementById("user_cash");
  darDinero = parseInt(traerDinero.value);

  traerClave = document.getElementById("password");
  clave = parseInt(traerClave.value);

  if(darDinero <= 0 || darDinero%10 != 0)
  {
    alert("¡ERROR! la cantidad de dinero no esta disponible. Intentalo nuevamente");
  }
  else if(clave != 1234)
  {
    alert("¡ERROR! la clave es incorrecta. Intentalo nuevamente con '1234'");
  }
  else
  {
    entregarDinero(darDinero);
  }
} // funcion check compruba cantidad dinero y password correctos

function entregarDinero(darDinero)
{
  for(var bien of cajero)
  {
      if(darDinero > 0)
      {
        div = Math.floor(darDinero / bien.valor);

        if(div > bien.cantidad)
        {
          papeles = bien.cantidad;
        }
        else
        {
          papeles = div;
        }
        entregado.push(new Billetes(bien.valor, papeles));
      }
      darDinero = darDinero - (bien.valor * papeles);
    } // ciclo cantidad de billetes

    if(darDinero > 0)
    {
      resultado.innerHTML = "Que vaina vecino no me alcanza la plata";
    }
    else
    {
      for(var resul of entregado)
      {
        if(resul.cantidad > 0)
        {
          while(resul.cantidad > 0)
          {
            resultado.innerHTML = resultado.innerHTML + "<img src=" + resul.imagen.src + "/>";
            resul.cantidad --;
          }
        }
      }
    }
} // funcion entregarDinero
