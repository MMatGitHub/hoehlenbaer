class Home {
    #kleinerBaer='';
    #grosserBaer='';
    constructor(derDefault) {
      this.derDefault = derDefault;
      jammer("Erzeuge " + this.derDefault);
      this.#kleinerBaer = document.getElementById('canvas_keinerBaer');
      this.#kleinerBaer.classList.add('mm-img'); 
      this.#grosserBaer = document.getElementById('img_grosserBaer');
      this.#grosserBaer.classList.add('mm-img'); 
      let obenLinks= 150;
      let links=250;
      let neue_breite=500;
      let neue_hoehe=337;
      let imgPath= 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Bob_der_B%C3%A4r.JPG/800px-Bob_der_B%C3%A4r.JPG';
      this.cropImage(imgPath,obenLinks,links,neue_breite,neue_hoehe);
      this.verstecken();
    }

    cropImage(imagePath, newX, newY, newWidth, newHeight) {
      const originalImage = new Image();
      originalImage.src = imagePath;
      const resultCanvas = document.getElementById('canvas_keinerBaer');
      const resultCtx = resultCanvas.getContext('2d');
      originalImage.addEventListener('load', function() {
          const originalWidth = originalImage.naturalWidth;
          const originalHeight = originalImage.naturalHeight;
          const aspectRatio = originalWidth/originalHeight;
  
          if(newHeight === undefined) {
              newHeight = newWidth/aspectRatio;
          }
          resultCanvas.width = newWidth;
          resultCanvas.height = newHeight;  
          resultCtx.drawImage(originalImage, newX, newY, newWidth, newHeight, 0, 0, newWidth, newHeight);
      });
  
  }

    zeigen() {
      //jammer("Hello from "+this.derDefault);
      //this.zurechtschneiden();
      this.#grosserBaer.style.height = 0;
      this.#kleinerBaer.style.height = 'auto';
     }
    verstecken() {
      jammer("Versteckt at "+this.derDefault);
      this.#grosserBaer.style.height = 0;
      this.#kleinerBaer.style.height = 0;
    }

    GROSS_ZEIGEN() {
      jammer("Grosser Baer at "+this.derDefault);
      this.#grosserBaer.style.height = 'auto';
      this.#kleinerBaer.style.height = 0;
    }
  
}
console.log('main_site_home.js geladen');
