import {raus_aus_der_hoehle} from './main.js';

export function aufwachen() {
  raus_aus_der_hoehle();
  return 'Bin aufgewacht um ' + new Date().toLocaleTimeString() + ' Uhr';
}

export function testing() {
  console.log('Bin beim testing...');
  let testergebnis = do_testing(raus_aus_der_hoehle());
  console.log(testergebnis);
  return testergebnis ;
}

function do_testing(functionUnderTest) {
  try {
    eval(functionUnderTest);
  } catch (e) {
    if (e instanceof SyntaxError) {
      return 'SyntaxError (' + e.message + ') ' + e.stack;
    }
    return 'Error (' + e.message + ') ' + e.stack;
  }
  return "Testing... OK";
}

import {protokolliere} from './protokoll.js';
protokolliere('app.js geladen');
