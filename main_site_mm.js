class MM {
  constructor(derDefault) {
    this.derDefault = derDefault;
    jammer("Erzeuge " + this.derDefault);
    const mm_div=document.createElement('div');
    mm_div.id="spielfeld_mm"
    const mm_p=document.createElement('p');
    mm_p.innerText="Meßwerttabelle";
    mm_p.id="mm_header"
    document.getElementById('spielfeld').appendChild(mm_div);
    document.getElementById('spielfeld_mm').appendChild(mm_p);
    document.getElementById('spielfeld_mm').appendChild(json2TableEinfach(ftempwerte_as_json_obj));
    this.verstecken(); 
  }
  verstecken() {
    jammer("Versteckt at "+this.derDefault);
    let d = document.getElementById('spielfeld_mm');
    d.style.visibility='hidden';
    d.style.height='0';
  }
  zeigen() {
    //jammer("Hello from "+this.derDefault);
    let d = document.getElementById('spielfeld_mm');
    d.style.visibility='visible';
    d.style.height='auto';
   }
}
console.log('main_site_mm.js geladen');
