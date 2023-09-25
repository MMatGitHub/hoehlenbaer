class Home {
  #privaterString
  constructor(derDefault) {
    this.derDefault = derDefault;
     this.#privaterString='iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
  }
ausfuehren() {
    jammer(this.derDefault);
    const dasBild = document.createElement("img");
    dasBild.src='data:image/png;base64,'+this.#privaterString;
    
    dasBild.alt="Lecker Salat!";
    document.getElementById('spielfeld').innerHTML="";
    document.getElementById('spielfeld').appendChild(dasBild);
  }

}
