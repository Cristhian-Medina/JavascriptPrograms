var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
imagenes["Grask"] = "farmer.png";

var collection = [];
collection.push(new Pakiman("Cauchin", 100, 30));
collection.push(new Pakiman("Pokacho", 80, 50));
collection.push(new Pakiman("Tocinauro", 120, 40));
collection.push(new Pakiman("Grask", 150, 20));

for(var can of collection){
  can.mostrar();
}

for(var can in collection){
  console.log(collection[can]);
}
