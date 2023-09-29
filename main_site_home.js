class Home {
    #kleinerBaer='';
    #grosserBaer='';
    constructor(derDefault) {
      this.derDefault = derDefault;
      this.#kleinerBaer = document.getElementById('img_kleinerBaer');
      this.#kleinerBaer.classList.add('mm-img'); 
      this.#grosserBaer = document.getElementById('img_grosserBaer');
      this.#grosserBaer.classList.add('mm-img'); 
      this.verstecken();
    }

    zeigen() {
      jammer("SHOW "+this.derDefault);
      this.#grosserBaer.style.height = 0;
      this.#kleinerBaer.style.height = 'auto';
     }
    verstecken() {
      jammer("HIDE "+this.derDefault);
      this.#grosserBaer.style.height = 0;
      this.#kleinerBaer.style.height = 0;
    }

    GROSS_ZEIGEN() {
      jammer("SHOW BIG "+this.derDefault);
      this.#grosserBaer.style.height = 'auto';
      this.#kleinerBaer.style.height = 0;
  }
 
}
console.log('main_site_home.js geladen');
