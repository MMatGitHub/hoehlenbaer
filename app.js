function aufwachen() {
  console.log('Bin beim testing ......');
  let testergebnis = do_testing();
  console.log(testergebnis);
  return 'Bin aufgewacht um ' + new Date().toLocaleTimeString() + ' Uhr';
}

function testing() {
  console.log('Bin beim testing ......');
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
console.log('app.js geladen');



