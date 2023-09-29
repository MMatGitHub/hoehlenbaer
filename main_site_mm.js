class MM {
  constructor(derDefault) {
    this.derDefault = derDefault;
    const kids_p=document.createElement('p');
    kids_p.innerText="mmmmmmm";
    kids_p.id="spielfeld_mm"
    document.getElementById('spielfeld').appendChild(kids_p);
    this.verstecken(); 
  }
  verstecken() {
    let d = document.getElementById('spielfeld_mm');
    d.style.visibility='hidden';
    d.style.height='0';
  }
  zeigen() {
    let d = document.getElementById('spielfeld_mm');
    d.style.visibility='visible';
    d.style.height='auto';
   }
}
console.log('main_site_mm.js geladen');
