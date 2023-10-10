const kartensatz_futter_dimensionen = [
  { name: 'Brennwert', masseinheit: 'kcal', auswertung: 'min' },
  { name: 'Zucker', masseinheit: 'g', auswertung: 'min' }, 
  { name: 'Letale Dosis', masseinheit: 'gramm', auswertung: 'min' }, 
  { name: 'Fett', masseinheit: 'g', auswertung: 'min' },
  { name: 'Geschmack', masseinheit: 'g', auswertung: ['gut', 'besser', 'am besten'] },
  { name: 'Eiweiß', masseinheit: 'g', auswertung: 'min' }
];

const kartoffelUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Kartoffeln_Sorte_Nicola.jpg/220px-Kartoffeln_Sorte_Nicola.jpg'
const pommesUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Pommes-1.jpg/220px-Pommes-1.jpg';
const gurkenUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Cucumis_sativus20090812_496.jpg/275px-Cucumis_sativus20090812_496.jpg';
const mandelUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Almonds.png/293px-Almonds.png';
const reisUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/White%2C_Brown%2C_Red_%26_Wild_rice.jpg/260px-White%2C_Brown%2C_Red_%26_Wild_rice.jpg';
const zimtUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Cinnamomum_verum_vs_Cinnamomum_burmanni.jpg/220px-Cinnamomum_verum_vs_Cinnamomum_burmanni.jpg';
const fleischUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Venison_Steaks.jpg/220px-Venison_Steaks.jpg';
const spinatUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/5aday_spinach.jpg/220px-5aday_spinach.jpg';
const speckUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Speck-1.jpg/220px-Speck-1.jpg';
const bierUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Helles_im_Glas-Helles_%28pale_beer%29.jpg/170px-Helles_im_Glas-Helles_%28pale_beer%29.jpg';

const kartensatz_futter = [
  { id: 'A1', name: 'Wurst', url: kartoffelUrl, werte: [234, 55, 'n', 4234, 553 ] },
  { id: 'A2', name: 'Kartoffel', url: kartoffelUrl, werte: [254, 55, 'j', 0, 553 ] }, 
  { id: 'A3', name: 'VeggiSchnitzel', url: kartoffelUrl, werte: [4, 55, +0, 'j', 553 ] }, 
  { id: 'A4', name: 'Naan', url: kartoffelUrl, werte: [26674, 55, 'n', 32, 553 ] },
  { id: 'A5', name: 'Banana', url: kartoffelUrl, werte: [234343564, 55, 'j', 1, 553 ] },
  { id: 'B1', name: 'Gurkas', url: gurkenUrl, werte: [234, 545, 'j', 2340, 1553 ] },
  { id: 'B2', name: 'Leis', url: kartoffelUrl, werte: [234, 55, 'j', 4, 2553 ] },
  { id: 'B3', name: 'O-Saft', url: kartoffelUrl, werte: [234, 565, 'n', 3450, 5353 ] },
  { id: 'B4', name: 'Pommes', url: pommesUrl, werte: [234, 535, 'j', 330, 56 ] },
  { id: 'B5', name: 'Chips', url: kartoffelUrl, werte: [234, 355, 'j', 30, 563 ] },
  { id: 'C1', name: 'Radieschen', url: kartoffelUrl, werte: [234, 255, 'n', 30, 53 ] }
];

console.log('kartendaten.js geladen');