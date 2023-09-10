function json2Table(json_daten, inWelcheTabelle){

  const table = document.createElement("table");
  let tabellenzeile = table.insertRow();

  let spalten = [];
  
  for (let x of Object.keys(json_daten[0])){
    if (spalten.indexOf(x) === -1) { //Gibt keys mehrfach
      spalten.push(x);
    }
  }

  for (let ueberschrift of spalten){
    let th = document.createElement("th");
    th.innerHTML = ueberschrift;
    tabellenzeile.appendChild(th);
  }

  for (let i = 0; i < json_daten.length; i++) {
    tabellenzeile = table.insertRow();

    for (let j = 0; j < spalten.length; j++) {
      let tabCell = tabellenzeile.insertCell(-1);
      tabCell.innerHTML = json_daten[i][spalten[j]];
    }
  }
  table.setAttribute("class",'mm-tabelle');
  document.getElementById('tabellendaten').appendChild(table);
}

console.log('funktionen_fuer_tabellen.js geladen');