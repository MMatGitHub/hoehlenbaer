//document.addEventListener('DOMContentLoaded', function() {
  class Home {
    #kleinerBaer='';
    #grosserBaer='';
    constructor(derDefault) {
      this.derDefault = derDefault;
      this.#kleinerBaer = document.getElementById('img_kleinerBaer');
      this.#kleinerBaer.classList.add('mm-img'); 
      this.#grosserBaer = document.getElementById('img_grosserBaer');
      this.#grosserBaer.classList.add('mm-img'); 
    }

    zeigen() {
      jammer(this.derDefault);
      this.#grosserBaer.style.height = 0;
      this.#kleinerBaer.style.height = 'auto';
      this.#kleinerBaer.style.visibility = 'visible';
      this.#grosserBaer.style.visibility = 'hidden';
    }

    GROSS_ZEIGEN() {
      jammer(this.derDefault);
      this.#grosserBaer.style.height = 'auto';
      this.#grosserBaer.style.visibility = 'visible';
      this.#kleinerBaer.style.height = 0;
      this.#kleinerBaer.style.visibility = 'hidden';
    }
 
  }
console.log('main_site_home.js geladen');
//});
