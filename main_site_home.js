class Home {
  #kleinerBaer
  #grosserBaer
  constructor(derDefault) {
    this.derDefault = derDefault;
    this.kleinerBaer = document.getElementById('img_kleinerBaer');
    this.kleinerBaer.classList.add('mm-img'); 
    this.grosserBaer = document.getElementById('img_grosserBaer');
    this.grosserBaer.classList.add('mm-img'); 

  }
  zeigen() {
    jammer(this.derDefault);
    this.kleinerBaer.style.visibility = 'visible';
    this.grosserBaer.style.visibility = 'hidden';
  }
  GROSS_ZEIGEN() {
    jammer(this.derDefault);
    this.grosserBaer.style.visibility = 'visible';
    this.kleinerBaer.style.visibility = 'hidden';
  }
  

}
console.log('main_site_home.js geladen');
