let spielfeld_status = [];

function raus_aus_der_hoehle() {
  let eineKopfzeile = new Kopfzeile("Oben steht was.").addKopfzeile();
  generateAppzeileDynamically();
  generateFooterDynamically();
  //new Home("Heimathöhle").zeigen();
  getHoehle().zeigen();
  return 'Brumm, Brummel, Gähn, ...';
}

function addSpielfeldStatus(wenOderWas){
  spielfeld_status.push(wenOderWas);
}

function getLastSpielfeldStatus(){
  return spielfeld_status[spielfeld_status.length-1];
}

function getSpielfeldStatusAsString(){
  let retVal=[];
  for (let stati of spielfeld_status){
    retVal.push(stati.derDefault)
  }
  return retVal;
}

console.log('main.js geladen');
