class Kartenspiel {
  constructor(derDefault) {
    this.derDefault = derDefault;     
  }
    
  erzeugen(divname, kartensatzname){
    if (divname==='undefined') {;
      jammer("hää ["+divname+"]===spielfeld_kids_kartenspiel ???");
      return;
    }
    jammer("Soll Kartensatz erzeugen: ["+kartensatzname+"]");
    try{
      const cardContainer = document.getElementById(divname);
      const cardData = {
      imageSrc: 'https://www.w3schools.com/images/w3schools_green.jpg',
      headerText: 'Karte A1',
      textArray: ['Text 1', 'Text 2', 'Text 3', 'Text 4']
      };
      const cardData1 = {
        imageSrc: 'https://www.w3schools.com/images/w3schools_green.jpg',
        headerText: 'Card Header',
        textArray: ['Card 1', 'Card 2', 'Card 3', 'Card 4']
      };
      const card= new Karte(cardData.imageSrc, cardData.headerText, cardData.textArray);
      cardContainer.appendChild(card.getCardElement());
      const card1= new Karte(cardData.imageSrc, cardData.headerText, cardData.textArray);
      cardContainer.appendChild(card1.getCardElement());
      
      const kartensatz =kartensatz_einlesen(kartensatzname);
      const kartensatz_dimensionen =kartensatz_einlesen(kartensatzname+'_dimensionen');
   
      for (let zeile of kartensatz){
        const card= new Karte(zeile.url, "Der Titel", zeile.werte);
        cardContainer.appendChild(card.getCardElement());
      }

    } catch (e) {
      fehlerjammer(e.message + ' ' + e.stack);
      return retVal;
    }
  }
  verstecken() {
    let d = document.getElementById('spielfeld_kids');
    d.style.visibility='hidden';
    d.style.height=0;
  }
  zeigen() {
    let d = document.getElementById('spielfeld_kids')
    d.style.visibility='visible';
    d.style.height='auto';
   }

}
  

  