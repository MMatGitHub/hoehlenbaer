class Homeseite {
  constructor(derDefault) {
    this.derDefault = derDefault;
  }
  
  ausfuehren() {
    jammer(this.derDefault);
    var img = document.createElement("img");
    img.src = 'Hoehli.png';
    img.width = 999;
    img.height = 777;
    document.getElementById('spielfeld').appendChild(img);
  }

}
