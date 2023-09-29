class MM {
  constructor(derDefault) {
    this.derDefault = derDefault;
    let kids_p=document.createElement('p');
    kids_p.innerText="mmmmmmm";
    kids_p.id="spielfeld_mm"
    document.getElementById('spielfeld').appendChild(kids_p);
 }
  verstecken() {
    jammer("HIDE "+this.derDefault);
    document.getElementById('spielfeld_mm').style.visibility='hidden';
  }
  zeigen() {
    jammer("SHOW "+this.derDefault);
    document.getElementById('spielfeld_mm').style.visibility='visible';
   }
}
console.log('main_site_mm.js geladen');
