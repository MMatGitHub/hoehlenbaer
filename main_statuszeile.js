function addStatuszeile(nachricht) {
  let einfuegen = document.getElementById('statuszeile');
  let eineKopfzeile =new Kopfzeile("Oben steht was.");
  einfuegen.appendChild(gibMirEinElementMitTextFormatiert('p', nachricht, ''));
}


