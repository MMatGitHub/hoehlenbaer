function kartensatz_einlesen(arr_name) {
    jammer("Soll was einlesen: ["+arr_name+"]");
    let retVal="Problem: Nicht eingelesen: ["+arr_name+"]";
    try{
      retVal = eval(arr_name);

      if (Array.isArray(retVal)) {
          jammer("Eingelesenes Array:" + JSON.stringify(retVal, null, 2));
        } else {
          fehlerjammer(`Eingelesenes Array:", "${arr_name}" existiert nicht oder ist kein Array.`);
      }
    } catch (e) {
      fehlerjammer(e.message + ' ' + e.stack);
      return retVal;
    }
    return retVal;
  }
  function kartensatzToTable(datArray){
    jammer("Soll ne Tabelle machen");
    let neue_tabelle="keine Tabelle";
    try{
      neue_tabelle = document.createElement('table');
      datArray.forEach((item) => {
        const zeile = neue_tabelle.insertRow();
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            const zelle = zeile.insertCell();
            zelle.textContent = item[key];
            const wertzelle = zeile.insertCell();
            wertzelle= item.name;
          }
        }
      });
    } catch(e){
      fehlerjammer(`Eingelesenes Array:", "${datArray}" konnte nicht in Tabelle konvertiert werden.`);
      fehlerjammer(e.message + ' ' + e.stack);
    }
    jammer("Tabelle ist da:"+neue_tabelle.toString());
    return neue_tabelle;
  }
