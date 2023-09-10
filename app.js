function aufwachen() {
  raus_aus_der_hoehle();
  return 'Bin aufgewacht um ' + new Date().toLocaleTimeString() + ' Uhr';
}

function testing() {
  console.log('Bin beim testing...');
  let testergebnis = do_testing(aufwachen());
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
  return "Testing... OK at ("+new Date().toLocaleTimeString() + ' Uhr'+")";
}
console.log('app.js geladen');
