class Kids {
  constructor(derDefault) {
    this.derDefault = derDefault;
    const kids_p=document.createElement('p');
    kids_p.innerText="kidss";
    kids_p.id="spielfeld_kids"
    document.getElementById('spielfeld').appendChild(kids_p);

    let neuesSpiel = gibMirEinElementMitTextFormatiert(
      'button',
      'Neues Spiel',
      'w3-button w3-blue w3-hover-red w3-padding-large w3-large w3-margin-top'
      );
  
      const self = this; // Capture the 'this' context

      neuesSpiel.onclick = function () {
        jammer("Neues Spiel clicked!");
        self.zeigen(); // Call 'zeigen' on the captured 'this' context
      }

   // document.getElementById('spielfeld').appendChild(new Kartenspiel("Kartenspiel"));
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
  

  