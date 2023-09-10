function raus_aus_der_hoehle() {
  let metadaten = messwerte_as_json_obj;
  addKopfzeile();
  addHier(
    'app_author',
    gibMirEinUnformatiertesElement('p', 'Author: '+ metadaten[0]["author"])
  );
  addHier(
    'app_name',
    gibMirEinUnformatiertesElement('p', '*Appname:* ' + metadaten[0]["appname"])
  );
  addHier(
    'app_version',
    gibMirEinUnformatiertesElement('p', 'Version: ' + metadaten[0]["version"])
  );
  json2Table(messwerte_as_json_obj, 'messwerttabellenausgabe');

  document.getElementById('navdemo').innerHTML = getSmallAppzeile();
  document.getElementById('appzeile').innerHTML = getAppzeile();
  document.getElementById('statuszeile').innerHTML = addAblaufumgebungInfo();

  return 'Brumm, Brummel, Gähn, ...';
}

function addHier(wo, was) {
  let test = document.getElementById(wo);
  test.appendChild(was);
}

function addKopfzeile() {
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

function gibMirEinUnformatiertesElement(meinTag, meinText) {
  return gibMirEinElementMitTextFormatiert(meinTag, meinText, '');
}
function gibMirEinElementMitTextFormatiert(
  meinTag,
  meinText,
  mein_mm_css_Format
) {
  let retVal = document.createElement(meinTag);
  retVal.innerHTML = meinText;
  if ('' === mein_mm_css_Format) {
    return retVal;
  }
  let myStringArray = mein_mm_css_Format.split(' ');
  for (const s of myStringArray) {
    retVal.classList.add(s);
  }
  return retVal;
}

function getAppzeile() {
  return `<div class="w3-top">
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
  einfuegen.appendChild(gibMirEinElementMitTextFormatiert('p', nachricht, ''));
}
function addAblaufumgebungInfo(nachricht) {
  let retVal=ecmaScriptInfo.toString();
  return retVal;
}
console.log('main.js geladen');