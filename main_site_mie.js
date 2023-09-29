class Mie {
  constructor(derDefault) {
    this.derDefault = derDefault;
    
    document.getElementById('tabellendaten').in(json2Table(messwerte_as_json_obj, 'tabellendaten'));

  }
  
  verstecken() {
    jammer("HIDE "+this.derDefault);
    document.getElementById('tabellendaten').style.visibility='hidden';
  }
  zeigen() {
    jammer("SHOW "+this.derDefault);
    document.getElementById('tabellendaten').style.visibility='visible';

   }

}
console.log('main_site_mie.js geladen');
