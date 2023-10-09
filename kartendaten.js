const kartensatz_futter_werte = [
  { id: 'A1', werte: [234, 55, 'n', 4234, 553 ] },
  { id: 'A2', werte: [254, 55, 'j', 0, 553 ] },
  { id: 'A3', werte: [4, 55, +0, 'j', 553 ] },
  { id: 'A4', werte: [26674, 55, 'n', 32, 553 ] },
  { id: 'A5', werte: [234343564, 55, 'j', 1, 553 ] },
  { id: 'B1', werte: [234, 545, 'j', 2340, 1553 ] },
  { id: 'B2', werte: [234, 55, 'j', 4, 2553 ] },
  { id: 'B3', werte: [234, 565, 'n', 3450, 5353 ] },
  { id: 'B4', werte: [234, 535, 'j', 330, 56 ] },
  { id: 'B5', werte: [234, 355, 'j', 30, 563 ] },
  { id: 'C1', werte: [234, 255, 'n', 30, 53 ] }
];
const kartensatz_futter_zutat = [
  { id: 'A1', name: 'Wurst', url: 'http//:adfjklö.de' },
  { id: 'A2', name: 'Salzkartoffel', url: 'http//:adfjklö.de' }, 
  { id: 'A3', name: 'VeggiSchnitzel', url: 'http//:adfjklö.de' }, 
  { id: 'A4', name: 'Naan', url: 'http//:adfjklö.de' },
  { id: 'A5', name: 'Banana', url: 'http//:adfjklö.de' },
  { id: 'B1', name: 'Gurkas', url: 'http//:adfjklö.de' },
  { id: 'B2', name: 'Leis', url: 'http//:adfjklö.de' },
  { id: 'B3', name: 'O-Saft', url: 'http//:adfjklö.de' },
  { id: 'B4', name: 'Pommes', url: 'http//:adfjklö.de' },
  { id: 'B5', name: 'Chips', url: 'http//:adfjklö.de' },
  { id: 'C1', name: 'Radieschen', url: 'http//:adfjklö.de' }
]; 

const kartensatz_futter_dimensionen = [
  { id: '1', name: 'Brennwert', masseinheit: 'kcal', auswertung: 'min' },
  { id: '2', name: 'Zucker', masseinheit: 'g', auswertung: 'min' }, 
  { id: '3', name: 'Letale Dosis', masseinheit: 'milligramm', auswertung: 'min' }, 
  { id: '4', name: 'Fett', masseinheit: 'g', auswertung: 'min' },
  { id: '5', name: 'Geschmack', masseinheit: 'g', auswertung: ['gut', 'besser', 'am besten'] },
  { id: '5', name: 'Eiweiß', masseinheit: 'g', auswertung: 'min' }
]; 
console.log('kartendaten.js geladen');