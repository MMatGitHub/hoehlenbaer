class Mie {
  constructor(derDefault) {
    this.derDefault = derDefault;
    jammer("Erzeuge " + this.derDefault);
    const mie_div=document.createElement('div');
    mie_div.id="spielfeld_mie"
    const mie_p=document.createElement('p');
    mie_p.innerText="Meßwerttabelle";
    mie_p.id="mie_header"
    document.getElementById('spielfeld').appendChild(mie_div);
    document.getElementById('spielfeld_mie').appendChild(mie_p);
    document.getElementById('spielfeld_mie').appendChild(json2Table(messwerte_as_json_obj));
    this.verstecken(); 
  }
  
  verstecken() {
    jammer("Versteckt at "+this.derDefault);
    let d = document.getElementById('spielfeld_mie');
    d.style.visibility='hidden';
    d.style.height=0;
  }
  zeigen() {
    //jammer("Hello from "+this.derDefault);
    let d = document.getElementById('spielfeld_mie')
    d.style.visibility='visible';
    d.style.height='auto';
   }

}
console.log('main_site_mie.js geladen');
