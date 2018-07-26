var vp = document.getElementById("villaPlatzi");
var area = vp.getContext("2d");

vp.addEventListener("mousedown", presionar);
vp.addEventListener("mouseup", soltar);
vp.addEventListener("mousemove", dibujarMapa);

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
}
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}
var pollo = {
  url: "pollo.png",
  cargaOK: false
}
var farmer = {
  url: "farmer.png",
  cargaOK: false
}
var cantidad = aleatorio(1, 10);
var presion = false;
var x = 420;
var y = 0;

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarMapa);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

farmer.imagen = new Image();
farmer.imagen.src = farmer.url;
farmer.imagen.addEventListener("load", cargarFarmer);

function cargarMapa(){
  fondo.cargaOK = true;
  dibujarMapa();
}

function cargarVaca(){
  vaca.cargaOK = true;
  dibujarMapa();
}

function cargarPollo(){
  pollo.cargaOK = true;
  dibujarMapa();
}

function cargarCerdo(){
  cerdo.cargaOK = true;
  dibujarMapa();
}

function cargarFarmer(){
  farmer.cargaOK = true;
  dibujarMapa();
}

function dibujarMapa(event){

  if(fondo.cargaOK){
    area.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK && cerdo.cargaOK && pollo.cargaOK && farmer.cargaOK){

    for(var v=0; v<cantidad; v++){

      console.log(cantidad);
      var xv = aleatorio(0, 7);
      var yv = aleatorio(0, 7);
      xv = xv * 60;
      yv = yv * 60;
      area.drawImage(vaca.imagen, xv, yv);

    }  //for cantidad vacas

    var xc = aleatorio(0, 420);
    var yc = aleatorio(0, 420);
    area.drawImage(cerdo.imagen, xc, yc);

    var xp = aleatorio(0, 420);
    var yp = aleatorio(0, 420);
    area.drawImage(pollo.imagen, xp, yp);

    if(presion){

      x = event.offsetX;
      y = event.offsetY;

    }  // if presion true

    area.drawImage(farmer.imagen, x, y);

  }  // if vaca, cerdo y pollo

}  // funcion dibujarMapa

function presionar(event){

  presion = true;

}  //activa el cursor

function soltar(event){

  presion = false;

}  //desactiva el cursor

function aleatorio(min, max){
  var resultado = Math.floor(Math.random() * (max - min)) + min;
  return resultado;
}
