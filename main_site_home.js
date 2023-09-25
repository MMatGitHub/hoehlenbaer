class Home {
  constructor(derDefault) {
    this.derDefault = derDefault;
  }
  
  ausfuehren() {
    jammer(this.derDefault);
    const dasBild = document.createElement("img");
    dasBild.src = './Hoehli.png';
    dasBild.width="999";
    dasBild.height="777";
    dasBild.alt="Lecker Salat!";
    document.getElementById('spielfeld').appendChild(dasBild);
    //document.getElementById('spielfeld').innerHTML="";
    //document.getElementById('spielfeld').innerHTML=dasBild;
  }

}
