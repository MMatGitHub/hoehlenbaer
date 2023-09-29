function json2Table(json_daten) {
  let neue_tabelle = document.createElement('table');
  
  let tabellenzeile = neue_tabelle.insertRow();
  
  let spalten = [];
  let tagespalte = [];
  let deltaspalte = [] ;
  let mwresult = [];
  let mw2022result = [];
  let mw2023result = [];
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
  spalten.push(Tage_spaltenname);
  spalten.push(Delta_spaltenname);
  spalten.push(Mittelwert_spaltenname);

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
      //Mittelwert
      if (spalten[j] === Mittelwert_spaltenname) {
        let mittelwert = Mittelwertspaltebefuellen(deltaspalte[i],tagespalte[i]);
        let spalte_2=2;
        let aktuellesJahr = String(
          json_daten[i][spalten[spalte_2]]
        );
        if (aktuellesJahr.includes("2022")){
          mw2022result.push(mittelwert);
        }else{
          mw2023result.push(mittelwert);
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
  let wAll = document.createElement("p");
  let sumVonAnbeginn = document.createElement("p");
  w2022.innerHTML="MW (2022): " +calculateMean(mw2022result);
  w2023.innerHTML="MW (2023): " +calculateMean(mw2023result);
  wAll.innerHTML="MW (ges.): " +calculateMean(mwresult);
  let ersterWert = Number(DieWerte[0]);
  let letzerWert = Number(DieWerte[DieWerte.length-1]);
  let dieSumme = Number(letzerWert-ersterWert);
  dieSumme = dieSumme.toFixed(2);
  sumVonAnbeginn.innerHTML="Gesamt: "+(dieSumme);
  tabellenzeile.appendChild(w2022); 
  tabellenzeile.appendChild(w2023); 
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
