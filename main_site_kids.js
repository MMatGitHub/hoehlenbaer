class Kids {
  constructor(derDefault) {
    this.derDefault = derDefault;
    const kids_p=document.createElement('p');
    kids_p.innerText="kiddiees";
    kids_p.id="spielfeld_kids"
    document.getElementById('spielfeld').appendChild(kids_p);
    this.verstecken(); 
  }

  verstecken() {
    let d = document.getElementById('spielfeld_kids');
    d.style.visibility='hidden';
    d.style.height='0';
  }
  zeigen() {
    let d = document.getElementById('spielfeld_kids');
    d.style.visibility='visible';
    d.style.height='auto';
   }
}
console.log('main_site_kids.js geladen');
