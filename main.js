function raus_aus_der_hoehle() {
  let eineKopfzeile = new Kopfzeile("Oben steht was.").addKopfzeile();
  generateAppzeileDynamically();
  generateFooterDynamically();
  new Home("Heimathöhle").zeigen();
  return 'Brumm, Brummel, Gähn, ...';
}
console.log('main.js geladen');
