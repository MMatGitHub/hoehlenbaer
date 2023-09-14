function json2Table(json_daten, inWelcheTabelle) {
  const table = document.createElement('table');
  
  let tabellenzeile = table.insertRow();
  
  let spalten = [];
  
  for (let x of Object.keys(json_daten[0])) {
    if (spalten.indexOf(x) === -1) {
      //Gibt keys mehrfach
      spalten.push(x);
    }
  }
  //zusätzliche Spalten einfügen
  const SchritteZurwertspalteNachLinks = 4;
  spalten.push('Mittelwert');
  spalten.push('delta');

  for (let ueberschrift of spalten) {
    let th = document.createElement('th');
    th.innerHTML = ueberschrift;
    tabellenzeile.appendChild(th);
  }

  for (let i = 0; i < json_daten.length; i++) {
    tabellenzeile = table.insertRow();
    for (let j = 0; j < spalten.length; j++) {
      let tabCell = tabellenzeile.insertCell(-1);
      tabCell.innerHTML = json_daten[i][spalten[j]];
      if (j === spalten.length - 1) {
        try {
          if (i === 0) {
            tabCell.innerText = '0';
          }
          let delta = Number(
            json_daten[i][spalten[j - SchritteZurwertspalteNachLinks]]
          );
          let deltaAlt = Number(
            json_daten[i - 1][spalten[j - SchritteZurwertspalteNachLinks]]
          );
          let differenz = 0;
          differenz = Number(Math.round(deltaAlt - delta));
          if (differenz > 0) {
            tabCell.innerText = '+' + differenz;
          } else {
            tabCell.innerText = differenz;
          }
         
          let timedifferenzAlt = Number(json_daten[i - 1][spalten[j - SchritteZurwertspalteNachLinks]]);
          let timedifferenz = json_daten[i][spalten[j - SchritteZurwertspalteNachLinks]];
          timedifferenz = new Date(timedifferenzAlt)-new Date(timedifferenz) + ' Tage';
        
          const str = '2022-06-15';
          
          const datum1 = new Date(str);

          var datum2 = new Date("12/25/2021");

          const difference = datum2.getTime()-datum1.getTime();

          let years = Math.round(difference.getTime());
          
          const asdf = difference;

          tabCell.innerText = "asdf" //.toDateString(); //Date.parse("2022-01-02").toLocaleString() ;
        
        } catch (e) {
          console.log(e.stack);
        }
      }
    }
  }

  table.setAttribute('class', 'mm-tabelle');
  document.getElementById('tabellendaten').appendChild(table);
}

console.log('funktionen_fuer_tabellen.js geladen');
