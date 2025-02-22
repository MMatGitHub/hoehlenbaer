function json2TableEinfach(json_daten) {
  let neue_tabelle = document.createElement('table');
  let tabellenzeile = neue_tabelle.insertRow();
  let spalten = [];
  let DieWerte = [];
  
  for (let x of Object.keys(json_daten[0])) {
    if (spalten.indexOf(x) === -1) {
      //Gibt keys mehrfach
      spalten.push(x);
    }
  }

  for (let ueberschrift of spalten) {
    let th = document.createElement('th');
    th.innerHTML = ueberschrift;
    tabellenzeile.appendChild(th);
  }

  for (let i = 0; i < json_daten.length; i++) {
    tabellenzeile = neue_tabelle.insertRow();
    for (let j = 0; j < spalten.length; j++) {
      let tabCell = tabellenzeile.insertCell(-1);
      tabCell.innerHTML = json_daten[i][spalten[j]];
      //Werte
      if (j == 1) 
      {
        DieWerte.push(json_daten[i][spalten[j]]);
      }
    }
  }
  tabellenzeile = neue_tabelle.insertRow();
  neue_tabelle.setAttribute('class', 'mm-tabelle');
  return neue_tabelle;
}

function json2Table(json_daten) {
  let neue_tabelle = document.createElement('table');
  
  let tabellenzeile = neue_tabelle.insertRow();
  
  let spalten = [];
  let tagespalte = [];
  let deltaspalte = [] ;
  let mwresult = [];
  let mw2022result = [];
  let mw2023result = [];
  let mw2024result = [];
  let mw2025result = [];
  let jsumme2022 = 0;
  let jsumme2023 = 0;
  let jsumme2024 = 0;
  let jsumme2025 = 0;
  let DieWerte = [];
  
  for (let x of Object.keys(json_daten[0])) {
    if (spalten.indexOf(x) === -1) {
      //Gibt keys mehrfach
      spalten.push(x);
    }
  }

  //zusätzliche Spalten einfügen
  const SchritteZurwertspalteNachLinks = 4;
  const SchritteZurZeitspalteNachLinks = 2;
  const Tage_spaltenname='Tage';
  const Delta_spaltenname='Delta';
  const Mittelwert_spaltenname='MW';
  const Jahressumme_spaltenname='JSumme';
  spalten.push(Tage_spaltenname);
  spalten.push(Delta_spaltenname);
  spalten.push(Mittelwert_spaltenname);
  spalten.push(Jahressumme_spaltenname);

  for (let ueberschrift of spalten) {
    let th = document.createElement('th');
    th.innerHTML = ueberschrift;
    tabellenzeile.appendChild(th);
  }

  for (let i = 0; i < json_daten.length; i++) {
    tabellenzeile = neue_tabelle.insertRow();
    for (let j = 0; j < spalten.length; j++) {
      let tabCell = tabellenzeile.insertCell(-1);
      tabCell.innerHTML = json_daten[i][spalten[j]];
      //Werte
      if (j == 1) //"wert") 
      {
        DieWerte.push(json_daten[i][spalten[j]]);
      }

      
      //Wertedifferenz
      if (spalten[j] === Delta_spaltenname) {
        if (i>0){
          let delta = Number(
            json_daten[i][spalten[j - SchritteZurwertspalteNachLinks]]
          );
          let deltaAlt = Number(
            json_daten[i - 1][spalten[j - SchritteZurwertspalteNachLinks]]
          );
          let berechneterWert = deltaspaltebefuellen(deltaAlt, delta);
          deltaspalte[i]=berechneterWert;
          tabCell.innerText=  berechneterWert;
        }
      }
      //Tagesdifferenz
      if (spalten[j] === Tage_spaltenname) {
        if (i>0){
          let delta = String(
            json_daten[i][spalten[j - SchritteZurZeitspalteNachLinks]]
          );
          let deltaAlt = String(
            json_daten[i - 1][spalten[j - SchritteZurZeitspalteNachLinks]]
          );
          let berechneterWert = timediffspaltebefuellen(deltaAlt, delta);
          tagespalte[i]=berechneterWert;
          tabCell.innerText=  berechneterWert;
        }
      }
      //Jahressumme_spaltenname
      if (spalten[j] === Jahressumme_spaltenname) {
        let jsumme = Jahressummespaltebefuellen(deltaspalte[i]);   
        let spalte_2=2;
        let aktuellesJahr = String(
          json_daten[i][spalten[spalte_2]]
        );
        tabCell.innerText = "-";
        if (aktuellesJahr.includes("2022")){
          if (!isNaN(jsumme)) {
            jsumme2022 = jsumme2022+jsumme;
            tabCell.innerText =jsumme2022
          }
        }
        if (aktuellesJahr.includes("2023")){
          if (!isNaN(jsumme)) {
            jsumme2023 = jsumme2023+jsumme;
            tabCell.innerText =jsumme2023
          }
        }
        if (aktuellesJahr.includes("2024")){
          if (!isNaN(jsumme)) {
            jsumme2024 = jsumme2024+jsumme;
            tabCell.innerText =jsumme2024
          }
        }
        if (aktuellesJahr.includes("2025")){
          if (!isNaN(jsumme)) {
            jsumme2025 = jsumme2025+jsumme;
            tabCell.innerText =jsumme2025
          }
        }
      }

      //Mittelwert
      if (spalten[j] === Mittelwert_spaltenname) {
        let mittelwert = Mittelwertspaltebefuellen(deltaspalte[i],tagespalte[i]);
        let spalte_2=2;
        let aktuellesJahr = String(
          json_daten[i][spalten[spalte_2]]
        );
        if (aktuellesJahr.includes("2022")){
          mw2022result.push(mittelwert);
        }
        if (aktuellesJahr.includes("2023")){
          mw2023result.push(mittelwert);
        }
        if (aktuellesJahr.includes("2024")){
          mw2024result.push(mittelwert);
        }
        if (aktuellesJahr.includes("2025")){
          mw2025result.push(mittelwert);
        }
        mwresult.push(mittelwert);
        tabCell.innerText= mittelwert;
       // jammer("hä:" +aktuellesJahr);
      }
      
    }
    
  }
  tabellenzeile = neue_tabelle.insertRow();
  //jammer("MW-Resultarray: "+mwresult.toString());
  let w2022=document.createElement("p");
  let w2023 = document.createElement("p");
  let w2024 = document.createElement("p");
  let w2025 = document.createElement("p");
  let wAll = document.createElement("p");
  let sumVonAnbeginn = document.createElement("p");
  w2022.innerHTML="MW (2022): " +calculateMean(mw2022result)+ ", SUM (2022): " +jsumme2022;
  //jammer("hä:"  +calculateSum(mw2022result));
  w2023.innerHTML="MW (2023): " +calculateMean(mw2023result)+ ", SUM (2023): " +jsumme2023;
  w2024.innerHTML="MW (2024): " +calculateMean(mw2024result)+ ", SUM (2024): " +jsumme2024;
  w2025.innerHTML="MW (2025): " +calculateMean(mw2025result)+ ", SUM (2025): " +jsumme2025;
  wAll.innerHTML="MW (ges.): " +calculateMean(mwresult);
  let ersterWert = Number(DieWerte[0]);
  if (ersterWert<1){let ersterWert = Number(DieWerte[1])};

  let letzerWert = Number(DieWerte[DieWerte.length-1]);
  let dieSumme = Number(letzerWert-ersterWert);
  dieSumme = dieSumme.toFixed(2);
  sumVonAnbeginn.innerHTML="Gesamt: "+(dieSumme) + ", abgerunde ges. für (2022-2025): "+(Number(jsumme2022)+Number(jsumme2023)+Number(jsumme2024)+Number(jsumme2025));
  tabellenzeile.appendChild(w2022); 
  tabellenzeile.appendChild(w2023); 
  tabellenzeile.appendChild(w2024); 
  tabellenzeile.appendChild(w2025); 
  tabellenzeile.appendChild(wAll); 
  tabellenzeile.appendChild(sumVonAnbeginn); 
  //tabellenzeile.appendChild(document.createTextNode("("+DieWerte[DieWerte.length-1].toString()+" -"+DieWerte[0].toString()+")"));
  //jammer("hä:" +DieWerte.toString());
  //jammer("hä:" +DieWerte[0].toString());
  //jammer("hä:" +DieWerte[DieWerte.length-1].toString());
   
  neue_tabelle.setAttribute('class', 'mm-tabelle');
 // document.getElementById('spielfeld').innerHTML='';
  return neue_tabelle;
}
function Mittelwertspaltebefuellen(zaehler, nenner){ 
  let differenz = 0;
  differenz = zaehler / nenner;
  differenz = differenz.toFixed(2);
  let retVal= "nix";
  retVal = differenz;
  return retVal;
}
function Jahressummespaltebefuellen(einWert){
  zahlwert= Number(einWert)
  return Number(zahlwert);
}
function deltaspaltebefuellen(alt, neu){ 
    let differenz = 0;
    differenz = Number(Math.round(alt - neu));
    let retVal= "nix";
    if (differenz > 0) {
      retVal = '+' + differenz;
    } else {
      retVal = differenz;
    }
    return retVal;
}


function timediffspaltebefuellen(alt, neu){
    return dateDifference(alt, neu);
}

function calculateSum(numbers) {
  if (numbers.length === 0) {
    return NaN; 
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let einWert=Number(numbers[i]);
    if (typeof einWert !== 'number' || isNaN(einWert) || !isFinite(einWert)) {
      continue; // Skip non-numeric, NaN, or Infinity values
    }
    sum += einWert;
  }
  if (sum === 0) {
    jammer("Nullsumme-keine Daten: Komisch!");
    return 0;
  }
  if (sum < 0) {
    jammer("Invertiere negative Summe");
    sum = sum * -1;
    zahl = Number(sum);

    return zahl.toFixed(2);
  }
  return sum;
}

function calculateMean(numbers) {
  if (numbers.length === 0) {
    return NaN; // chatGPT: Return NaN if the array is empty to handle this edge case
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let einWert=Number(numbers[i]);
    if (typeof einWert !== 'number' || isNaN(einWert) || !isFinite(einWert)) {
      continue; // Skip non-numeric, NaN, or Infinity values
    }
    sum += einWert;
  }
  //jammer("Summe: "+sum);
  if (sum === 0) {
    jammer("Nullsumme-keine Daten: Komisch!");
    return 0;
  }
  let mean = sum / numbers.length;
  //jammer("Mittelwert: "+mean);
  return mean.toFixed(2);
}


function dateDifference(date1Str, date2Str) {
  let [day1, month1, year1] = date1Str.split('.').map(Number);
  let [day2, month2, year2] = date2Str.split('.').map(Number);

  let date1 = new Date(year1, month1 - 1, day1);
  let date2 = new Date(year2, month2 - 1, day2);

  let timeDifference = Math.abs(date2 - date1); // chatGPT: Calculate absolute time difference in milliseconds

  let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

  return daysDifference;
}

function getCurrentFormattedTime() {
  return new Date().toLocaleTimeString() + ' Uhr'
}

console.log('funktionen_fuer_tabellen.js geladen');
