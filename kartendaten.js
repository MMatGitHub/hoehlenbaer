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
const gammelfleischUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Clostridium_botulinum.jpg/300px-Clostridium_botulinum.jpg';
const nudelUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Nudeln_trocken_makro.jpg/320px-Nudeln_trocken_makro.jpg';
const kaffeeUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Coffee_beans2.jpg/220px-Coffee_beans2.jpg';
const tofuUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG/220px-Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG';
const schokoladeUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Schokolade-schwarz-braun-weiss.jpg/330px-Schokolade-schwarz-braun-weiss.jpg';
const bananeUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bananas.jpg/220px-Bananas.jpg';
const schimmelGemueseUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Moldy_nectarines.jpg/220px-Moldy_nectarines.jpg';
const maniokUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Manihot_esculenta_-_cross_section_2.jpg/407px-Manihot_esculenta_-_cross_section_2.jpg';
const weinUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Red_and_white_wine_12-2015.jpg/220px-Red_and_white_wine_12-2015.jpg';
const schnapsUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Wodkaflaschen.JPG/220px-Wodkaflaschen.JPG';
const cannabisUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Marijuana-Cannabis-Weed-Bud-Gram.jpg/220px-Marijuana-Cannabis-Weed-Bud-Gram.jpg';


const kartensatz_futter = [
  { id: 'A1', name: 'Schokolade', url: schokoladeUrl, werte: [234, 55, 'nein', 4234, 553 ] },
  { id: 'A2', name: 'Kartoffel', url: kartoffelUrl, werte: [254, 55, 'nein', 0, 553 ] }, 
  { id: 'A3', name: 'Tofu', url: tofuUrl, werte: [4, 55, +0, 'nein', 553 ] }, 
  { id: 'A4', name: 'Nudeln', url: nudelUrl, werte: [26674, 55, 'nein', 32, 553 ] },
  { id: 'A5', name: 'Kaffee', url: kaffeeUrl, werte: [234343564, 55, '25 l LD=10g (Koffein)', 1, 553 ] },
  { id: 'B1', name: 'Gurken', url: gurkenUrl, werte: [234, 545, 'nein', 2340, 1553 ] },
  { id: 'B2', name: 'Reis', url: reisUrl, werte: [234, 55, '999:(Arsen)', 4, 2553 ] },
  { id: 'B3', name: 'Speck', url: speckUrl, werte: [234, 565, '20kg (Nitrit) LD: 4g Konz. 40 g Pökelsalz/kg a 0,5% Na-Nitrit', 3450, 5353 ] },
  { id: 'B4', name: 'Zimt', url: zimtUrl, werte: [234, 535, '999:Cumarin', 330, 56 ] },
  { id: 'B5', name: 'Banane', url: bananeUrl, werte: [234, 355, 'nein', 30, 563 ] },
  { id: 'C1', name: 'Fleisch', url: fleischUrl, werte: [234, 255, 'nein', 30, 53 ] },
  { id: 'C2', name: 'Maniok', url: maniokUrl, werte: [234, 255, 'ja', 30, 53 ] },
  { id: 'C3', name: 'Obst & Gemüse (verschimmelt)', url: schimmelGemueseUrl, werte: [234, 255, 'ca. 100 g (div. Mykotoxine)_LD=ca. 100 mg', 30, 53 ] },
  { id: 'C4', name: 'Spinat (aufgewärmt)', url: spinatUrl, werte: [234, 255, '10 kg (Nitrit)_LD=4g Konz.=400 mg/kg)', 30, 53 ] },
  { id: 'C5', name: 'Bittermandel', url: mandelUrl, werte: [234, 255, '999:Blausäure K=3000 mg/kg', 30, 53 ] },
  { id: 'D1', name: 'Bier 5%', url: bierUrl, werte: [234, 255, '14 l (Ethanol) Blutalkohol=0,5% (Widmark-Formel)', 30, 53 ] },
  { id: 'D2', name: 'Fleisch (verdorben)', url: gammelfleischUrl, werte: [234, 255, 'ca. 1 g (Botulinumtoxin) LD=0,00007g', 30, 53 ] },
  { id: 'D3', name: 'Wein 10%', url: weinUrl, werte: [234, 255, '4 l (Ethanol) Blutalkohol=0,5% (Widmark-Formel)', 30, 53 ] },
  { id: 'D4', name: 'Schnaps 50%', url: schnapsUrl, werte: [234, 255, '1,4 l (Ethanol) Blutalkohol=0,5% (Widmark-Formel)', 30, 53 ] },
  { id: 'D5', name: 'Cannabis', url: cannabisUrl, werte: [234, 255, '1,4 l (Ethanol) Blutalkohol=0,5% (Widmark-Formel)', 30, 53 ] },
];

console.log('kartendaten.js geladen');