class Karte {
    constructor(imageSrc, headerText, textArray, dimensionenArray) {
         
      const cardContainer = document.getElementById('spielfeld_kids');
      cardContainer.classList.add("Karten"); //wirksam? Notwendig?
      this.visible = true;
  
      this.cardElement = document.createElement('article');
      this.cardElement.className = 'karte';
  
      this.header = document.createElement('header');
      this.header.innerText = headerText;
  
      this.image = document.createElement('img');
      this.image.src = imageSrc;
  
      this.textElements = [];
      for (let text of textArray) {
        let tabelle = document.createElement('p');
        const paragraph = document.createElement('p');
        paragraph.innerText = text;
        this.textElements.push(paragraph);
      }
  
      this.toggleButton = document.createElement('button');
      this.toggleButton.innerText = 'Mogeln';
      this.toggleButton.onclick = () => this.toggle();
  
      // Construct the card structure
      this.cardElement.appendChild(this.header);
      this.cardElement.appendChild(this.image);
      for (const textElement of this.textElements) {
        this.cardElement.appendChild(textElement);
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
  

  