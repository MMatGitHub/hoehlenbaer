class Karte {
    constructor(imageSrc, headerText, werteArray, derKartensatz) {
         
      const cardContainer = document.getElementById('spielfeld_kids');
      cardContainer.classList.add("Karten"); //wirksam? Notwendig?
      this.visible = true;
  
      this.cardElement = document.createElement('article');
      this.cardElement.className = 'karte';
  
      this.header = document.createElement('header');
      this.header.innerText = headerText;
  
      this.image = document.createElement('img');
      this.image.src = imageSrc;
  
      this.wertElemente = [];
      let counter=0;
      const dimensionenArray = kartensatz_einlesen(derKartensatz+'_dimensionen');
      //const dimensionen= JSON.stringify(dimensionenArray);
      for (let text of werteArray) {
        let tabelle = document.createElement('p');
        const paragraph = document.createElement('p');
        paragraph.innerText = dimensionenArray[counter].name +': '+text;
        this.wertElemente.push(paragraph);
        counter++;
      }
  
      this.toggleButton = document.createElement('button');
      this.toggleButton.innerText = 'Mogeln';
      this.toggleButton.onclick = () => this.toggle();
  
      // Construct the card structure
      this.cardElement.appendChild(this.header);
      this.cardElement.appendChild(this.image);
      for (let we of this.wertElemente) {
        this.cardElement.appendChild(we);
      }
      this.cardElement.appendChild(this.toggleButton);
  
      // Initially, set the card as visible
      this.zeigen();
    }
  
    verstecken() {
      this.cardElement.style.display = 'none';
      this.visible = false;
    }
  
    zeigen() {
      this.cardElement.style.display = 'grid';
      this.visible = true;
    }
  
   
    toggle() {
      if (this.visible) {
        this.verstecken();
      } else {
        this.zeigen();
      }
    }
  
    getCardElement() {
      return this.cardElement;
    }
}
  

  