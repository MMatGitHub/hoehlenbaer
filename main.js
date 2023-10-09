const spielfeld_status = [];
 
function raus_aus_der_hoehle() {
  let eineKopfzeile = new Kopfzeile("Oben steht was.").addKopfzeile();
  generateAppzeileDynamically();
  //app.js is generating das Spielfeld
  generateFooterDynamically();
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
  //let i=0;
  for (let stati of spielfeld_status){
    //jammer("Hiding Spielfeld" +spielfeld_status.toString());
    //jammer("Hiding Spielfeld ["+spielfeldobjekt_id+"]: "+spielfeld_status[spielfeldobjekt_id].derDefault);
    //jammer("Hiding Spielfeld ["+i+"]: "+spielfeld_status[spielfeldobjekt_id].derDefault); jammer("Hiding Spielfeld ["+i+"]: "+spielfeld_status[spielfeldobjekt_id].derDefault);
    //i++;
    //spielfeld_status[i].verstecken();
    stati.verstecken();
  }
  if (spielfeldobjekt_id===0){
    document.getElementById('kopfzeile').style.height='auto';
    document.getElementById('kopfzeile').style.visibility='visible';
  }else{
    document.getElementById('kopfzeile').style.visibility='hidden';
    document.getElementById('kopfzeile').style.height='0';
  }
  jammer("Zeige ["+spielfeldobjekt_id+"]: Hello from "+spielfeld_status[spielfeldobjekt_id].derDefault);

  return spielfeld_status[spielfeldobjekt_id];
}


console.log('main.js geladen');
