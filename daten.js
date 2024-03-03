const ftempwerte_as_json_obj = [
  { id: 'id-01', wert: 37.6,  zeitpunkt: '07.10.2023', Kommentar: 'ABENDS (20:15)' },
  { id: 'id-02', wert: 37.8,  zeitpunkt: '07.10.2023', Kommentar: '22:15 Uhr' },
  { id: 'id-03', wert: 38.5,  zeitpunkt: '08.10.2023', Kommentar: 'NACHTS (01:00)' },
  { id: 'id-04', wert: 38.1,  zeitpunkt: '08.10.2023', Kommentar: '04:00 Uhr' },
  { id: 'id-05', wert: 38.5,  zeitpunkt: '08.10.2023', Kommentar: 'MORGENS (06:30)' },
  { id: 'id-06', wert: 38.1,  zeitpunkt: '08.10.2023', Kommentar: '08:00 Uhr' },
  { id: 'id-07', wert: 38.5,  zeitpunkt: '08.10.2023', Kommentar: '16:00 Uhr' },
  { id: 'id-08', wert: 38.7,  zeitpunkt: '08.10.2023', Kommentar: 'NACHMITTAGS (16:45)' },
  { id: 'id-09', wert: 37.4,  zeitpunkt: '09.10.2023', Kommentar: 'NACHTS (01:50)' },
  { id: 'id-10', wert: 37.7,  zeitpunkt: '09.10.2023', Kommentar: 'MORGENS (08:15)' },
  { id: 'id-11', wert: 36.9,  zeitpunkt: '09.10.2023', Kommentar: 'ABENDS (19:00)' },
  { id: 'id-12', wert: 37.2,  zeitpunkt: '10.10.2023', Kommentar: 'MORGENS (09:00)' },
  { id: 'id-13', wert: 36.5,  zeitpunkt: '10.10.2023', Kommentar: 'ABENDS (20:00)' },
];

const messwerte_as_json_obj = [
  {  id: 'id-40', wert: 7797.2,  zeitpunkt: '06.01.2022', Kommentar: '' },
  {  id: 'id-41', wert: 7867.0,  zeitpunkt: '30.01.2022', Kommentar: '' },
  {  id: 'id-42', wert: 7891.4,  zeitpunkt: '05.02.2022', Kommentar: '' },
  {  id: 'id-43', wert: 7909.65, zeitpunkt: '12.02.2022', Kommentar: '' },
  {  id: 'id-44', wert: 7913.2,  zeitpunkt: '13.02.2022', Kommentar: '' },
  {  id: 'id-45', wert: 7955.0,  zeitpunkt: '26.02.2022', Kommentar: '' },
  {  id: 'id-46', wert: 7961.0,  zeitpunkt: '28.02.2022', Kommentar: '' },
  {  id: 'id-47', wert: 7967.9,  zeitpunkt: '03.03.2022', Kommentar: 'weg' },
  {  id: 'id-48', wert: 7969.3,  zeitpunkt: '06.03.2022', Kommentar: 'bis' },
  {  id: 'id-49', wert: 7979.2,  zeitpunkt: '09.03.2022', Kommentar: '' },
  {  id: 'id-50', wert: 8359.15, zeitpunkt: '30.09.2022', Kommentar: '' },
  {  id: 'id-51', wert: 8440.4,  zeitpunkt: '29.10.2022', Kommentar: '' },
  {  id: 'id-52', wert: 8443.1,  zeitpunkt: '06.11.2022', Kommentar: '' },
  {  id: 'id-53', wert: 8444.0,  zeitpunkt: '07.11.2022', Kommentar: '' },
  {  id: 'id-54', wert: 8451.45, zeitpunkt: '11.11.2022', Kommentar: '' },
  {  id: 'id-55', wert: 8643.45, zeitpunkt: '02.02.2023', Kommentar: '' },
  {  id: 'id-56', wert: 8684.3,  zeitpunkt: '19.02.2023', Kommentar: 'weg 19.02' },
  {  id: 'id-57', wert: 8687.25, zeitpunkt: '24.02.2023', Kommentar: 'weg 22.02' },
  {  id: 'id-58', wert: 8705.5,  zeitpunkt: '08.03.2023', Kommentar: '' },
  {  id: 'id-59', wert: 8722.56, zeitpunkt: '29.03.2023', Kommentar: '' },
  {  id: 'id-60', wert: 8730.4,  zeitpunkt: '03.04.2023', Kommentar: '' },
  {  id: 'id-61', wert: 8735.1,  zeitpunkt: '06.04.2023', Kommentar: 'weg 10.08'  },
  {  id: 'id-62', wert: 8729.15, zeitpunkt: '16.04.2023', Kommentar: 'bis 15.08'  },
  {  id: 'id-63', wert: 8743.1,  zeitpunkt: '06.05.2023', Kommentar: '' },
  {  id: 'id-64', wert: 8761.8,  zeitpunkt: '15.05.2023', Kommentar: '' },
  {  id: 'id-65', wert: 8764.8,  zeitpunkt: '20.05.2023', Kommentar: '' },
  {  id: 'id-66', wert: 8773.15, zeitpunkt: '28.05.2023', Kommentar: 'weg 30.05' },
  {  id: 'id-67', wert: 8765.3,  zeitpunkt: '02.06.2023', Kommentar: 'bis 03.06' },
  {  id: 'id-68', wert: 8766.7,  zeitpunkt: '06.06.2023', Kommentar: '' },
  {  id: 'id-69', wert: 8766.2,  zeitpunkt: '09.06.2023', Kommentar: '' },
  {  id: 'id-70', wert: 8766.6,  zeitpunkt: '13.06.2023', Kommentar: '' },
  {  id: 'id-71', wert: 8767.3,  zeitpunkt: '18.06.2023', Kommentar: '' },
  {  id: 'id-72', wert: 8769.15, zeitpunkt: '22.06.2023', Kommentar: '' },
  {  id: 'id-73', wert: 8768.3,  zeitpunkt: '22.06.2023', Kommentar: '' },
  {  id: 'id-74', wert: 8769.4,  zeitpunkt: '24.06.2023', Kommentar: '' },
  {  id: 'id-75', wert: 8767.8,  zeitpunkt: '29.06.2023', Kommentar: '' },
  {  id: 'id-76', wert: 8777.3,  zeitpunkt: '05.07.2023', Kommentar: '' },
  {  id: 'id-77', wert: 8774.8,  zeitpunkt: '07.07.2023', Kommentar: '' },
  {  id: 'id-78', wert: 8777.5,  zeitpunkt: '10.07.2023', Kommentar: '' },
  {  id: 'id-79', wert: 8780.0,  zeitpunkt: '17.07.2023', Kommentar: '' },
  {  id: 'id-80', wert: 8780.2,  zeitpunkt: '19.07.2023', Kommentar: '' },
  {  id: 'id-81', wert: 8781.3,  zeitpunkt: '24.07.2023', Kommentar: '' },
  {  id: 'id-82', wert: 8794.15, zeitpunkt: '01.08.2023', Kommentar: '' },
  {  id: 'id-83', wert: 8796.4,  zeitpunkt: '05.08.2023', Kommentar: 'weg 07.08'  },
  {  id: 'id-84', wert: 8787.9,  zeitpunkt: '19.08.2023', Kommentar: 'bis 19.08'  },
  {  id: 'id-85', wert: 8791.9,  zeitpunkt: '23.08.2023', Kommentar: '' },
  {  id: 'id-86', wert: 8801.0,  zeitpunkt: '01.09.2023', Kommentar: '' },
  {  id: 'id-87', wert: 8815.5,  zeitpunkt: '11.09.2023', Kommentar: '' },
  {  id: 'id-88', wert: 8821.85, zeitpunkt: '19.09.2023', Kommentar: '' },
  {  id: 'id-89', wert: 8829.2, zeitpunkt: '28.09.2023', Kommentar: '' },
  {  id: 'id-90', wert: 8841.05, zeitpunkt: '04.10.2023', Kommentar: 'Kids, Pfannkuchen, ...' },
  {  id: 'id-91', wert: 8853.35, zeitpunkt: '11.10.2023', Kommentar: '' },
  {  id: 'id-92', wert: 8868.3, zeitpunkt: '20.10.2023', Kommentar: '' },
  {  id: 'id-93', wert: 8869.05, zeitpunkt: '23.10.2023', Kommentar: '' },
  {  id: 'id-94', wert: 8868.3, zeitpunkt: '20.10.2023', Kommentar: '' },
  {  id: 'id-95', wert: 8890.75, zeitpunkt: '01.11.2023', Kommentar: 'weg bis 05.11' },
  {  id: 'id-96', wert: 8892.35, zeitpunkt: '05.11.2023', Kommentar: '' },
  {  id: 'id-97', wert: 8897.66, zeitpunkt: '09.11.2023', Kommentar: '' },
  {  id: 'id-99', wert: 8902.4, zeitpunkt: '13.11.2023', Kommentar: '' },
  {  id: 'id-100', wert: 8907.2, zeitpunkt: '16.11.2023', Kommentar: '' },
  {  id: 'id-101', wert: 8925.8, zeitpunkt: '24.11.2023', Kommentar: 'Ende 1. Woche mit Kids' },
  {  id: 'id-102', wert: 8965.9, zeitpunkt: '05.12.2023', Kommentar: '2. Woche mit Kids beendet' },
  {  id: 'id-103', wert: 8967.05, zeitpunkt: '06.12.2023', Kommentar: 'Grau bewölkt, Winter' },
  {  id: 'id-104', wert: 8972.0, zeitpunkt: '08.12.2023', Kommentar: 'Winter' },
  {  id: 'id-105', wert: 8981.25, zeitpunkt: '11.12.2023', Kommentar: 'Winter' },
  {  id: 'id-106', wert: 9032.85, zeitpunkt: '27.12.2023', Kommentar: 'Urlaubbeginn' },
  {  id: 'id-107', wert: 9056.2, zeitpunkt: '07.01.2024', Kommentar: 'Urlaubende' },
  {  id: 'id-108', wert: 9061.35, zeitpunkt: '11.01.2024', Kommentar: 'Surprise: Winter' },
  {  id: 'id-109', wert: 9065.9, zeitpunkt: '14.01.2024', Kommentar: '2. Mammsiweek' },
  {  id: 'id-110', wert: 9078.3, zeitpunkt: '22.01.2024', Kommentar: 'End of 2. Mammsiweek' },
  {  id: 'id-111', wert: 9090.25, zeitpunkt: '26.01.2024', Kommentar: 'Ende 2. Woche mit Kids' },
  {  id: 'id-112', wert: 9107.5, zeitpunkt: '02.02.2024', Kommentar: '' },
  {  id: 'id-113', wert: 9113.5, zeitpunkt: '05.02.2024', Kommentar: 'Allein: 1. Woche starting...' },
  {  id: 'id-114', wert: 9115.6, zeitpunkt: '07.02.2024', Kommentar: '' },
  {  id: 'id-115', wert: 9118.85, zeitpunkt: '09.02.2024', Kommentar: 'Allein: 1 WE' },
  {  id: 'id-110', wert: 9078.3, zeitpunkt: '22.01.2024', Kommentar: 'End of 2. Mammsiweek' },
  {  id: 'id-111', wert: 9090.25, zeitpunkt: '26.01.2024', Kommentar: 'Ende 2. Woche mit Kids' },
  {  id: 'id-112', wert: 9107.5, zeitpunkt: '02.02.2024', Kommentar: '' },
  {  id: 'id-113', wert: 9113.5, zeitpunkt: '05.02.2024', Kommentar: 'Allein: 1. Woche starting...' },
  {  id: 'id-114', wert: 9115.6, zeitpunkt: '07.02.2024', Kommentar: '' },
  {  id: 'id-115', wert: 9118.85, zeitpunkt: '09.02.2024', Kommentar: 'One: 1 WE' },
  {  id: 'id-116', wert: 9120.2, zeitpunkt: '11.02.2024', Kommentar: 'One: 2 Woche beginnt' },
  {  id: 'id-117', wert: 9126.9, zeitpunkt: '15.02.2024', Kommentar: '' },
  {  id: 'id-118', wert: 9129.25, zeitpunkt: '16.02.2024', Kommentar: 'Three: 2 Woche' },
  {  id: 'id-119', wert: 9131.0, zeitpunkt: '18.02.2024', Kommentar: 'Three: 1 Woche beginnt' },
  {  id: 'id-120', wert: 9143.8, zeitpunkt: '25.02.2024', Kommentar: 'Three: 2 Woche beginnt' },
  {  id: 'id-121', wert: 9157.5, zeitpunkt: '01.03.2024', Kommentar: 'Three: Letztes WE Sa' },	
  {  id: 'id-122', wert: 9159.7, zeitpunkt: '02.03.2024', Kommentar: 'Three: Letztes WE Croissant' },	
];

console.log('daten.js geladen');
