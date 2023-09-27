class Kopfzeile {
  constructor(derDefault) {
    this.derDefault = derDefault;
  }

  zeigen() {
    jammer(this.derDefault);
    addKopfzeile();
  }
  
  addKopfzeile() {
    let eineKopfzeile = document.getElementById('kopfzeile');
    eineKopfzeile.appendChild(
      gibMirEinElementMitTextFormatiert(
        'h1',
        'Herzlich willkommen im ',
        'mm-margin-64'
      )
    );
    eineKopfzeile.appendChild(
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
      let dasBild = document.createElement("img");
      dasBild.src=new Home("Bin big").GROSS_ZEIGEN();
      document.getElementById('spielfeld').innerHTML="";
      dasBild.classList.add('mm-img');
      document.getElementById('spielfeld').appendChild(dasBild);
    });
    hoehlenbutton.addEventListener('mouseout', () => {
      hoehlenbutton.innerText = 'Vegetarische Grüße :-)';
      let dasBild = document.createElement("img");
      dasBild.src=new Home("Bin big").GROSS_ZEIGEN();
      document.getElementById('spielfeld').innerHTML="";
      dasBild.classList.add('mm-img');
      document.getElementById('spielfeld').appendChild(dasBild);
    });
    eineKopfzeile.appendChild(hoehlenbutton);
  }

}
console.log('main_kopfzeile.js geladen');
