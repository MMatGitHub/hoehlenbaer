class Karte {
    constructor(imageSrc, headerText, textArray, valueArray) {
         
      const cardContainer = document.getElementById('spielfeld_kids');
      
      this.visible = true;
  
      this.cardElement = document.createElement('article');
      this.cardElement.className = 'karte';
  
      this.header = document.createElement('header');
      this.header.innerText = headerText;
  
      this.image = document.createElement('img');
      this.image.src = imageSrc;

      let tabelle = document.createElement('TABLE');
      tabelle.id= "myTable";
     // document.body.appendChild(tabelle);
      this.textElements = [];
      for (let text of textArray) {
  
      
        var y = document.createElement("TR");
        y.setAttribute("id", "myTr");
        document.getElementById("myTable").appendChild(y);
      
        var z = document.createElement("TD");
        var t = document.createTextNode("cell");
        z.appendChild(t);
        document.getElementById("myTr").appendChild(z);


        this.textElements.push(tabelle);
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
  

  