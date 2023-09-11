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
            tabCell.innerText = '';
          }
          let SchritteZurwertspalteNachLinks = 3;
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
