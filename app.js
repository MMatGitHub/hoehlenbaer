'use strict';
import {raus_aus_der_hoehle} from './main.js';

export function aufwachen() {
  raus_aus_der_hoehle();
  return 'Bin aufgewacht um ' + new Date().toLocaleTimeString() + ' Uhr';
}

export function testing() {
   document.getElementById('statuszeile').innerText="Bin beim Testing...";
   let testergebnis = do_testing(raus_aus_der_hoehle());
   document.getElementById('statuszeile').innerText=testergebnis ;
   document.getElementById('halloDiv').innerText = 'Testende: ' + new Date().toLocaleTimeString() + ' Uhr';
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
console.log('main.js geladen');
