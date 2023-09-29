class Kids {
  constructor(derDefault) {
    this.derDefault = derDefault;
    let kids_p=document.createElement('p');
    kids_p.innerText="kiddiees";
    document.getElementById('spielfeld').appendChild(kids_p);
  }

  verstecken() {
    jammer("HIDE "+this.derDefault);
  }
  zeigen() {
    jammer("SHOW "+this.derDefault);
   }
}
console.log('main_site_kids.js geladen');
