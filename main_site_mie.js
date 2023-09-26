class Mie {
  constructor(derDefault) {
    this.derDefault = derDefault;
  }
  
  zeigen() {
    jammer(this.derDefault);
    json2Table(messwerte_as_json_obj, 'tabellendaten');
  }

}
console.log('main_site_mie.js geladen');
