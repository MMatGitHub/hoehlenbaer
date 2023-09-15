const messwerte_as_json_obj = [
  { id: 'id-40', wert: 7797.2,  zeitpunkt: '06.01.2022', Kommentar: '' },
  { id: 'id-41', wert: 7867.0,  zeitpunkt: '30.01.2022', Kommentar: '' },
  { id: 'id-42', wert: 7891.4,  zeitpunkt: '05.02.2022', Kommentar: '' },
  { id: 'id-43', wert: 7909.65, zeitpunkt: '12.02.2022', Kommentar: '' },
  { id: 'id-44', wert: 7913.2,  zeitpunkt: '13.02.2022', Kommentar: '' },
  { id: 'id-45', wert: 7955.0,  zeitpunkt: '26.02.2022', Kommentar: '' },
  { id: 'id-46', wert: 7961.0,  zeitpunkt: '28.02.2022', Kommentar: '' },
  { id: 'id-47', wert: 7967.9,  zeitpunkt: '03.03.2022', Kommentar: 'weg' },
  { id: 'id-48', wert: 7969.3,  zeitpunkt: '06.03.2022', Kommentar: 'bis' },
  { id: 'id-49', wert: 7979.2,  zeitpunkt: '09.03.2022', Kommentar: '' },
  { id: 'id-50', wert: 8359.15, zeitpunkt: '30.09.2022', Kommentar: '' },
  { id: 'id-51', wert: 8440.4,  zeitpunkt: '29.10.2022', Kommentar: '' },
  { id: 'id-52', wert: 8443.1,  zeitpunkt: '06.11.2022', Kommentar: '' },
  { id: 'id-53', wert: 8444.0,  zeitpunkt: '07.11.2022', Kommentar: '' },
  { id: 'id-54', wert: 8451.45, zeitpunkt: '11.11.2022', Kommentar: '' },
  { id: 'id-55', wert: 8643.45, zeitpunkt: '02.02.2023', Kommentar: '' },
  { id: 'id-56', wert: 8684.3,  zeitpunkt: '19.02.2023', Kommentar: 'weg 19.02' },
  { id: 'id-57', wert: 8687.25, zeitpunkt: '24.02.2023', Kommentar: 'weg 22.02' },
  { id: 'id-58', wert: 8705.5,  zeitpunkt: '08.03.2023', Kommentar: '' },
  { id: 'id-59', wert: 8722.56, zeitpunkt: '29.03.2023', Kommentar: '' },
  { id: 'id-60', wert: 8730.4,  zeitpunkt: '03.04.2023', Kommentar: '' },
  { id: 'id-61', wert: 8735.1,  zeitpunkt: '06.04.2023', Kommentar: 'weg 10.08'  },
  { id: 'id-62', wert: 8729.15, zeitpunkt: '16.04.2023', Kommentar: 'bis 15.08'  },
  { id: 'id-63', wert: 8743.1,  zeitpunkt: '06.05.2023', Kommentar: '' },
  { id: 'id-64', wert: 8761.8,  zeitpunkt: '15.05.2023', Kommentar: '' },
  { id: 'id-65', wert: 8764.8,  zeitpunkt: '20.05.2023', Kommentar: '' },
  { id: 'id-66', wert: 8773.15, zeitpunkt: '28.05.2023', Kommentar: 'weg 30.05' },
  { id: 'id-67', wert: 8765.3,  zeitpunkt: '02.06.2023', Kommentar: 'bis 03.06' },
  { id: 'id-68', wert: 8766.7,  zeitpunkt: '06.06.2023', Kommentar: '' },
  { id: 'id-69', wert: 8766.2,  zeitpunkt: '09.06.2023', Kommentar: '' },
  { id: 'id-70', wert: 8766.6,  zeitpunkt: '13.06.2023', Kommentar: '' },
  { id: 'id-71', wert: 8767.3,  zeitpunkt: '18.06.2023', Kommentar: '' },
  { id: 'id-72', wert: 8769.15, zeitpunkt: '22.06.2023', Kommentar: '' },
  { id: 'id-73', wert: 8768.3,  zeitpunkt: '22.06.2023', Kommentar: '' },
  { id: 'id-74', wert: 8769.4,  zeitpunkt: '24.06.2023', Kommentar: '' },
  { id: 'id-75', wert: 8767.8,  zeitpunkt: '29.06.2023', Kommentar: '' },
  { id: 'id-76', wert: 8777.3,  zeitpunkt: '05.07.2023', Kommentar: '' },
  { id: 'id-77', wert: 8774.8,  zeitpunkt: '07.07.2023', Kommentar: '' },
  { id: 'id-78', wert: 8777.5,  zeitpunkt: '10.07.2023', Kommentar: '' },
  { id: 'id-79', wert: 8780.0,  zeitpunkt: '17.07.2023', Kommentar: '' },
  { id: 'id-80', wert: 8780.2,  zeitpunkt: '19.07.2023', Kommentar: '' },
  { id: 'id-81', wert: 8781.3,  zeitpunkt: '24.07.2023', Kommentar: '' },
  { id: 'id-82', wert: 8794.15, zeitpunkt: '01.08.2023', Kommentar: '' },
  { id: 'id-83', wert: 8796.4,  zeitpunkt: '05.08.2023', Kommentar: 'weg 07.08'  },
  { id: 'id-84', wert: 8787.9,  zeitpunkt: '19.08.2023', Kommentar: 'bis 19.08'  },
  { id: 'id-85', wert: 8791.9,  zeitpunkt: '23.08.2023', Kommentar: '' },
  { id: 'id-86', wert: 8801.0,  zeitpunkt: '01.09.2023', Kommentar: '' },
  { id: 'id-87', wert: 8815.5,  zeitpunkt: '11.09.2023', Kommentar: '' },
];

const beispieldaten = [
  {
    first_name: 'Toast',
    last_name: 'Follie',
    company: 'Ausbeuters',
  },
  {
    first_name: 'Töff',
    last_name: 'Deller',
    company: 'Bullshieter',
  },
  {
    first_name: 'Osteria',
    last_name: 'Italia',
    company: 'Hü & Hott & Co',
  },
];
console.log('daten.js geladen');