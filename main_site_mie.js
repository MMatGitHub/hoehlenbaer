class Mie {
  constructor(derDefault) {
    this.derDefault = derDefault; 
    document.getElementById('tabellendaten').appendChild(json2Table(messwerte_as_json_obj, 'tabellendaten'));
    this.verstecken(); 
  }
  
  verstecken() {
    let d = document.getElementById('tabellendaten');
    d.style.visibility='hidden';
    d.style.height=0;
  }
  zeigen() {
    let d = document.getElementById('tabellendaten')
    d.style.visibility='visible';
    d.style.height='auto';
   }

}
console.log('main_site_mie.js geladen');
