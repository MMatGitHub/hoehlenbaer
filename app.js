
// Globale Variablen
const spielfeld_id = ['home','kids','mie','mm'];
const Home_id = 0;
const Kids_id = 1;
const Mie_id = 2;
const MM_id = 3; 

const appzeile_group_labels_overwrite = spielfeld_id;

function aufwachen() {
  console.log('Bin am rennen ...');
  do_initialize();
  let testergebnis = do_testing();
  console.log(testergebnis);
  return 'Bin aufgewacht um ' + new Date().toLocaleTimeString() + ' Uhr';
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
    jammer(getSpielfeldStatusAsString()+",... found");
  } catch (e) {
    return 'Error (' + e.message + ') ' + e.stack;
  }
  return 'Testing... OK at (' + new Date().toLocaleTimeString() + ' Uhr' + ')';
}
console.log('app.js geladen');



