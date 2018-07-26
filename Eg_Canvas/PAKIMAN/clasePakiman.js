class Pakiman {
  constructor(n, l, a) {
    this.imagen = new Image();
    this.name = n;
    this.live = l;
    this.attack = a;
    this.imagen.src = imagenes[this.name];
  }

  mostrar(){
    document.body.appendChild(this.imagen);
    document.write("<br/><strong>" + this.name + "</strong><br/>");
    document.write("Vida: " + this.live + "<br/>");
    document.write("Ataque: " + this.attack);
    document.write("<hr/>"); //  crea una linea
  }
}
