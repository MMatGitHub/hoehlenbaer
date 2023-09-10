export function protokolliere(wasdennLoggen) {
  document.getElementById('statuszeile').innerText = document.getElementById('statuszeile').innerText + wasdennLoggen;
  console.log(wasdennLoggen);
}
protokolliere('protokoll.js geladen');
