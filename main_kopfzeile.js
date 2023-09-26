class Kopfzeile {
  constructor(derDefault) {
    this.derDefault = derDefault;
  }

  zeigen() {
    jammer(this.derDefault);
    addKopfzeile();
  }
  

  addKopfzeile() {
    let test = document.getElementById('kopfzeile');
    test.appendChild(
      gibMirEinElementMitTextFormatiert(
        'h1',
        'Herzlich willkommen im ',
        'mm-margin-64'
      )
    );
    test.appendChild(
      gibMirEinElementMitTextFormatiert(
        'p',
        'Höhlenbärparadies',
        'w3-xlarge w3-jumbo'
      )
    );
    let hoehlenbutton = gibMirEinElementMitTextFormatiert(
      'button',
      'hallo',
      'w3-button w3-black w3-hover-red w3-padding-large w3-large w3-margin-top'
    );
    hoehlenbutton.addEventListener('mouseover', () => {
      hoehlenbutton.innerText = 'Ich bin WACH !!!';
    });
    hoehlenbutton.addEventListener('mouseout', () => {
      hoehlenbutton.innerText = 'Vegetarische Grüße :-)';
    });
    test.appendChild(hoehlenbutton);
  }
  
  

}