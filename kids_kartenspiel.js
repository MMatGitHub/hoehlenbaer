class Kartenspiel {
  constructor(derDefault) {
    this.derDefault = derDefault;     
    this.erzeugen();
  }
    
  erzeugen(){
    const cardContainer = document.getElementById('spielfeld_kids')
    const cardData = {
    imageSrc: 'https://www.w3schools.com/images/w3schools_green.jpg',
    headerText: 'Card Header',
    textArray: ['Text 1', 'Text 2', 'Text 3', 'Text 4']
  };
  const cardData1 = {
    imageSrc: 'https://www.w3schools.com/images/w3schools_green.jpg',
    headerText: 'Card Header',
    textArray: ['Card 1', 'Card 2', 'Card 3', 'Card 4']
  };
    const card = new Karte(cardData.imageSrc, cardData.headerText, cardData.textArray);
    cardContainer.appendChild(card.getCardElement());
    const card1= new Karte(cardData.imageSrc, cardData.headerText, cardData.textArray);
    cardContainer.appendChild(card1.getCardElement());

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
  

  