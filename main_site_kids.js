class Kids {
  constructor(derDefault) {
    this.derDefault = derDefault;
    const kids_p=document.createElement('p');
    kids_p.innerText="kiddiees";
    kids_p.id="spielfeld_kids"
    document.getElementById('spielfeld').appendChild(kids_p);
  }

  verstecken() {
    document.getElementById('spielfeld_kids').style.visibility='hidden';
    document.getElementById('spielfeld_kids').style.height='0';
  }
  zeigen() {
    document.getElementById('spielfeld_kids').style.visibility='visible';
    document.getElementById('spielfeld_kids').style.height='auto';
   }
}
console.log('main_site_kids.js geladen');
