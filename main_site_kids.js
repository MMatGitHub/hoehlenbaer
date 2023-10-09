class Kids {
  constructor(derDefault) {
    this.derDefault = derDefault;
    jammer("Erzeuge " + this.derDefault);
    const kids_div=document.createElement('div');
    kids_div.id="spielfeld_kids"
    const kids_p=document.createElement('p');
    kids_p.innerText="kidss";
    kids_p.id="spielfeld_kids"
    document.getElementById('spielfeld').appendChild(kids_div);
    document.getElementById(kids_div.id).appendChild(kids_p);

    const kids_kartenspiel_div=document.createElement('div');
    kids_kartenspiel_div.id="spielfeld_kids_kartenspiel"
    document.getElementById('spielfeld_kids').appendChild(kids_kartenspiel_div);

    let neuesSpiel = gibMirEinElementMitTextFormatiert(
      'button',
      'Neues Spiel',
      'w3-button w3-blue w3-hover-red w3-padding-large w3-large w3-margin-top'
      );
    document.getElementById(kids_kartenspiel_div.id).appendChild(neuesSpiel);
    neuesSpiel.onclick = function () {
        jammer("Neues Spiel clicked!");
        new Kartenspiel("Kartenspiel").erzeugen(kids_kartenspiel_div.id);
      }
    this.verstecken(); 
  }
  verstecken() {
    jammer("Versteckt at "+this.derDefault);
    let d = document.getElementById('spielfeld_kids');
    d.style.visibility='hidden';
    d.style.height='0';
  }
  zeigen() {
    //jammer("Hello from "+this.derDefault);
    let d = document.getElementById('spielfeld_kids');
    d.style.visibility='visible';
    d.style.height='auto';
   }
}
  

  