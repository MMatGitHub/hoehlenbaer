class Mie {
  constructor(derDefault) {
    this.derDefault = derDefault;
    
    document.getElementById('tabellendaten').appendChild(json2Table(messwerte_as_json_obj, 'tabellendaten'));

  }
  
  verstecken() {
    document.getElementById('tabellendaten').style.visibility='hidden';
    document.getElementById('tabellendaten').style.height=0;
  }
  zeigen() {
    document.getElementById('tabellendaten').style.visibility='visible';
    document.getElementById('tabellendaten').style.height='auto';
   }

}
console.log('main_site_mie.js geladen');
