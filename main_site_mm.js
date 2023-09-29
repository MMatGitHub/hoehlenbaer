class MM {
  constructor(derDefault) {
    this.derDefault = derDefault;
    const kids_p=document.createElement('p');
    kids_p.innerText="mmmmmmm";
    kids_p.id="spielfeld_mm"
    document.getElementById('spielfeld').appendChild(kids_p);
 }
  verstecken() {
    document.getElementById('spielfeld_mm').style.visibility='hidden';
    document.getElementById('spielfeld_mm').style.height='0';
  }
  zeigen() {
    document.getElementById('spielfeld_mm').style.visibility='visible';
    document.getElementById('spielfeld_mm').style.height='auto';
   }
}
console.log('main_site_mm.js geladen');
