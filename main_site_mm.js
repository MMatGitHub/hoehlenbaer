class MM {
  constructor(derDefault) {
    this.derDefault = derDefault;
  }

  zeigen() {
    jammer(this.derDefault);
    let kids_p=document.createElement('p');
    kids_p.innerText="mmmmmmm";
    document.getElementById('spielfeld').appendChild(kids_p);
    new Home("Kein Baer mehr").verstecken();  }
}
console.log('main_site_mm.js geladen');
