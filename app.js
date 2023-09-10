'use strict';

function aufwachen() {
  raus_aus_der_hoehle();
  return 'Bin aufgewacht um ' + new Date().toLocaleTimeString() + ' Uhr';
}

export function module_testing() {
  return 'Bin aufgewacht um ' + new Date().toLocaleTimeString() + ' Uhr';
}

function testing() {
  let kaputt = "Alles gut";
  try {
    Error.stackTraceLimit = 20;
    eval(raus_aus_der_hoehle());
  } catch (e) {
    let retVal= "nix error";
    if (e instanceof SyntaxError) {
      retVal = 'SyntaxError (' + e.message + ') ' + e.stack;
    }
    retVal = 'Error (' + e.message + ') ' + e.stack;
    console.log(retVal);
    console. trace();
    console.log('testing NOT OK');
    kaputt = "Fehler beim testing: NOT OK";
   // alert(kaputt);
    return retVal;
  }
  console.log('testing OK');
}
console.log('main.js geladen');
