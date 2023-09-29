
function raus_aus_der_hoehle() {
  let eineKopfzeile = new Kopfzeile("Oben steht was.").addKopfzeile();
  generateAppzeileDynamically();
  generateFooterDynamically();
  //new Home("Heimathöhle").zeigen();
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

const wechsleZuSpielfeldStatus = function(spielfeldobjekt_id){
  for (let stati of spielfeld_status){
    stati.verstecken();
  }
  return spielfeld_status[spielfeldobjekt_id];
}


console.log('main.js geladen');
