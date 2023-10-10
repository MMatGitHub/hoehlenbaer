
// Globale Variablen
var DEBUG_JAMMER_OFF = false;
const spielfeld_id = ['home','kids','mie','mm','chat'];
const Home_id = 0;
const Kids_id = 1;
const Mie_id = 2;
const MM_id = 3; 
const Chat_id = 4; 

const appzeile_group_labels_overwrite = spielfeld_id;

function aufwachen() {
  DEBUG_JAMMER_OFF = true;
  console.log('Bin am rennen ...');
  do_initialize();
  raus_aus_der_hoehle();
  console.log('Bin aufgewacht um ' + new Date().toLocaleTimeString() + ' Uhr');
  return testergebnis
}

function do_run() {
  try {
    raus_aus_der_hoehle();
  } catch (e) {
   return "Aua - Kopf gestossen!" 
  }
  return 'running... OK at (' + new Date().toLocaleTimeString() + ' Uhr' + ')';
}

function testing() {
  console.log('Bin am testen ......');
  do_initialize();
  let testergebnis = do_testing();
  console.log(testergebnis);
  return testergebnis;
}

function do_testing() {
  try {
    eval(raus_aus_der_hoehle());
  } catch (e) {
    if (e instanceof SyntaxError) {
      if (e.message.includes("expected expression, got '...'")){
        return "...";
      }
      return 'ERR: (' + e.name + ' ' + e.message+ ') ' + e.stack;
    }
    return 'Error (' + e.message + ') ' + e.stack;
  }
  return 'Testing... OK at (' + new Date().toLocaleTimeString() + ' Uhr' + ')';
}

function do_initialize() {
  console.log('Initialisiere ......');
  try {
    eval(addSpielfeldStatus (new Home(spielfeld_id[Home_id])));
    eval(addSpielfeldStatus (new Kids(spielfeld_id[Kids_id])));
    eval(addSpielfeldStatus (new Mie(spielfeld_id[Mie_id])));
    eval(addSpielfeldStatus (new MM(spielfeld_id[MM_id])));
    eval(addSpielfeldStatus (new Chat(spielfeld_id[Chat_id])));
    jammer(getSpielfeldStatusAsString()+",... found");
  } catch (e) {
    return 'Error (' + e.message + ') ' + e.stack;
  }
  return 'Testing... OK at (' + new Date().toLocaleTimeString() + ' Uhr' + ')';
}
console.log('app.js geladen');



