function sehr_alt_json2Table(json_daten) {
  let cols = Object.keys(json_daten[0]);

  //Map over columns, make headers,join into string
  let headerRow = cols.map((col) => "<th>"+`${col}`+"</th>").join('');

  let rows = json_daten.map((row) => {
      let tds = cols.map((col) => `<td>${row[col]}</td>`).join('');
      return `<tr>${tds}</tr>`;
    })
    .join('');

  const js_table = `
	<table class="dieMesswerteTabelle">
		<thead>
			<tr>${headerRow}</tr>
		<thead>
		<tbody>
			${rows}
		<tbody>
	<table>`;
  return js_table;
}


function alt_json2Table(json_daten, inWelcheTabelle) {
  let cols = Object.keys(json_daten[0]);
  let rows = Object.values(json_daten);
  let retVal = document.getElementById(inWelcheTabelle);
  let tabellenkopfzeile = document.createElement("tr");
  for (let x of cols){
      let tabellenkopfzelle = document.createElement("th");
      tabellenkopfzelle.innerHTML= x;
      tabellenkopfzeile.appendChild(tabellenkopfzelle);
  }
  retVal.appendChild(tabellenkopfzeile);

for (let i in json_daten) {
  retVal = document.getElementById(inWelcheTabelle);
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  
  for (let key in json_daten[i]) {
    let txt = document.createTextNode(key);
    td.appendChild(txt);
    tr.appendChild(td);
  }
  retVal.appendChild(tr);
}

  return retVal;
}

export function json2Table(json_daten, inWelcheTabelle){

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
  table.setAttribute("class",'dieMesswerteTabelle');
  document.getElementById('tabellendaten').appendChild(table);
}

//export default neu_json2Table;