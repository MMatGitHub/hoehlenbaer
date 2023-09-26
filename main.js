function raus_aus_der_hoehle() {
  let eineKopfzeile = new Kopfzeile("Oben steht was.").addKopfzeile();
   
  addHier(
    'app_author',
    gibMirEinUnformatiertesElement('p', '*Author*: ' + metadaten[0]['author'])
  );
  addHier(
    'app_name',
    gibMirEinUnformatiertesElement('p', '*Appname:* ' + metadaten[0]['appname'])
  );
  addHier(
    'app_version',
    gibMirEinUnformatiertesElement('p', '*Version*: ' + metadaten[0]['version'])
  );


  //document.getElementById('appzeile').innerHTML = getAppzeile();
  generateAppzeileDynamically();
  document.getElementById('appzeile').classList.add('w3-top');
  document.getElementById('navdemo').innerHTML = getSmallAppzeile();
  addAblaufumgebungInfo();
  document.getElementById('halloDiv').innerText =
    'Brummte um ' + new Date().toLocaleTimeString() + ' Uhr';

//  let mieSeite = new Mie("Die Messwerte tabellarisch anzeigen");
//  mieSeite.ausfuehren();
  let home_seite = new Home("Heimathöhle");
  home_seite.ausfuehren();
  return 'Brumm, Brummel, Gähn, ...';
}

function addHier(wo, was) {
  let test = document.getElementById(wo);
  test.appendChild(was);
}

function getAppzeile() {
  let retVal = `<div class="w3-top">
    <div class="w3-bar w3-orange w3-card w3-left-align w3-large">
      <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
      <a href="index.html" class="w3-bar-item w3-button w3-padding-large w3-white">Home</a>
      <a href="../zischliste/zischliste.html"  class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Zischliste</a>
      <a href="../quartette/quartette.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Quartette</a>
      <a href="../todo/todo.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">todo</a>
      <a href="../mie/mie.html" class="w3-bar-item w3-butt2 files modified, 1 addedon w3-hide-small w3-padding-large w3-hover-white">mie</a>
      <a href="../mm/mm.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">mm</a>
    </div>
  </div>`;
  return retVal;
}
function getSmallAppzeile() {
  return `<div id="navdemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
    <a href="index.html" class="w3-bar-item w3-button w3-padding-large">home</a>
    <a href="../dieblumarbeit/dieblumarbeit.html" class="w3-bar-item w3-button w3-padding-large">DieBlumarbeit</a>
    <a href="../zischliste/zischliste.html" class="w3-bar-item w3-button w3-padding-large">Zischliste</a>
    <a href="../quartette/quartette.html" class="w3-bar-item w3-button w3-padding-large">Quartette</a>
    <a href="../todo/todo.html" class="w3-bar-item w3-button w3-padding-large">todo</a>
    <a href="../mie/mie.html" class="w3-bar-item w3-button w3-padding-large">mie</a>
    <a href="../mm/mm.html" clashallos="w3-bar-item w3-button w3-padding-large">mm</a>
  </div>
</div>`;
}

function addStatuszeile(nachricht) {
  let einfuegen = document.getElementById('statuszeile');
  let eineKopfzeile =new Kopfzeile("Oben steht was.");
  einfuegen.appendChild(eineKopfzeile.gibMirEinElementMitTextFormatiert('p', nachricht, ''));
}
function addAblaufumgebungInfo(nachricht) {
  let retVal = new runtime().toLesbar();
  addStatuszeile("*Runtime*: "+retVal);
}
function addStyledButtonsToDiv(myDiv, buttonTextArray, cssClassliste) {
  const n = buttonTextArray.length;
  //let myDiv = document.createElement('div');
 
  for (let i = 0; i < n; i++) {
    let button = document.createElement('button');
    button.textContent = buttonTextArray[i];
    if (i === 0) {
      button = styleMich(
        button,
        'w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red'
      );
      button.onclick = function () {
        myFunction();
        //alert("Button is clicked");
      };
    }
    if (i === 1) {
      button = styleMich(
        button,
        'w3-bar-item w3-button w3-padding-large w3-white'
      );
    }

    if (i > 1) {
      styleMich(button, cssClassliste);
    }
    if (buttonTextArray[i]==="home") {
      button.onclick = function () {
        new Home('Heimathöhle again').zeigen();
      };
    }    if (buttonTextArray[i]==="mm") {
      button.onclick = function () {
        new MM('MM selected').zeigen();
      };
    }
    if (buttonTextArray[i]==="kids") {
      button.onclick = function () {
        new Kids('kinderen!').zeigen();
      };
    }
    if (buttonTextArray[i]==="mie") {
      button.onclick = function () {
        let mieSeite = new Mie("Die Messwerte tabellarisch anzeigen").zeigen();
      };
    }
    myDiv.appendChild(button);
  }
  return myDiv;
}

function myFunction() {
  jammer("ToDo Menu anzeigen.");
    var x = document.getElementById("halloDiv");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
 }

function styleMich(mich, cssClasses) {
  let retVal = mich;
  let myStringArray = [];
  if (cssClasses) {
    if (cssClasses.includes(' ')) {
      myStringArray = cssClasses.split(' ');
    } else {
      myStringArray[0] = cssClasses;
    }
  }
  if (myStringArray.length > 0) {
    for (const s of myStringArray) {
      retVal.classList.add(s);
    }
  }
  return retVal;
}

function generateAppzeileDynamically() {
  const innerAppzeilenDiv = gibMirEinFormatiertesElementOhneText(
    'div',
    'w3-bar w3-orange w3-card w3-left-align w3-large'
  );
  const divWithButtons = addStyledButtonsToDiv(innerAppzeilenDiv, 
    ['menu', 'home', 'kids', 'mie', 'mm'],
    'w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white'
  );
  document.getElementById('appzeile').appendChild(divWithButtons);
}

console.log('main.js geladen');
