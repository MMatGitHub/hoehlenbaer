const spielfeld_status = [];

function raus_aus_der_hoehle() {
  let eineKopfzeile = new Kopfzeile("Oben steht was.").addKopfzeile();
  generateAppzeileDynamically();
  generateFooterDynamically();
  new Home("Heimathöhle").zeigen();
  return 'Brumm, Brummel, Gähn, ...';
}

function addSpielfeldStatus(wenOderWas){
  spielfeld_status.push(wenOderWas);
}

function getLastSpielfeldStatus(){
  return spielfeld_status[spielfeld_status.length-1];
}
addSpielfeldStatus (new Home("initiale Höhle"));
/*
addSpielfeldStatus (new Mie("initiale Mie"));
addSpielfeldStatus (new Kids("new born"));
addSpielfeldStatus (new MM("initial MM"));
*/
console.log('main.js geladen');
