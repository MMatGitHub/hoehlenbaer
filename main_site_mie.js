class Mie {
  constructor(derDefault) {
    this.derDefault = derDefault;
  }
  
  ausfuehren() {
    jammer(this.derDefault);
    json2Table(messwerte_as_json_obj, 'tabellendaten');
  }

}
