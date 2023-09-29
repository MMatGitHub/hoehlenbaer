function generateAppzeileDynamically() {
  const innerAppzeilenDiv = gibMirEinFormatiertesElementOhneText(
    'div',
    'w3-bar w3-orange w3-card w3-left-align w3-large'
  );
  const divWithButtons = addStyledButtonsToDiv(innerAppzeilenDiv, 
    ['menu', 'home', 'kids', 'mie', 'mm'],
    'w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white'
  );
  document.getElementById('appzeile').appendChild(divWithButtons);
  document.getElementById('appzeile').classList.add('w3-top');
  document.getElementById('navdemo').classList.add('w3-top');
}


function addStyledButtonsToDiv(myDiv, buttonTextArray, cssClassliste) {
  const n = buttonTextArray.length;

  for (let i = 0; i < n; i++) {
    let button = document.createElement('button');
    button.textContent = buttonTextArray[i];
    if (i === 0) {
      button = styleMich(
        button,
        'w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red'
      );
      button.onclick = function () {
        myFunction();
        //alert("Button is clicked");
      };
    }
    if (i === 1) {
      button = styleMich(
        button,
        'w3-bar-item w3-button w3-padding-large w3-white'
      );
    }

    if (i > 1) {
      styleMich(button, cssClassliste);
    }
    if (buttonTextArray[i]==="home") {
      button.onclick = function () {
        wechsleZuSpielfeldStatus(Home_id).zeigen();
      };
    }    if (buttonTextArray[i]==="mm") {
      button.onclick = function () {
        wechsleZuSpielfeldStatus(MM_id).zeigen();
      };
    }
    if (buttonTextArray[i]==="kids") {
      button.onclick = function () {
        wechsleZuSpielfeldStatus(Kids_id).zeigen();
      };
    }
    if (buttonTextArray[i]==="mie") {
      button.onclick = function () {
        wechsleZuSpielfeldStatus(Mie_id).zeigen();
      };
    }
    myDiv.appendChild(button);
  }
  return myDiv;
}
