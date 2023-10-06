class Kids {
  constructor(derDefault) {
    this.derDefault = derDefault;
    const kids_p=document.createElement('p');
    kids_p.innerText="kiddiees";
    kids_p.id="spielfeld_kids"
    document.getElementById('spielfeld').appendChild(kids_p);
    
    let neuesSpiel = gibMirEinElementMitTextFormatiert(
      'button',
      'Neues Spiel',
      'w3-button w3-blue w3-hover-red w3-padding-large w3-large w3-margin-top'
      );
  
    neuesSpiel.onclick = function () { 
        jammer("Neues Spiel clicked!");
        this.zeigen();
    }
  
    let neueZeile = document.createElement('p');
    document.getElementById('spielfeld_kids').appendChild(neueZeile);
    document.getElementById('spielfeld_kids').appendChild(neuesSpiel);

    let kartenblatt = document.createElement('article');
    kartenblatt.className="Karte";
    
    
    let ueberschrift=document.createElement('header');
    styleMich(kartenblatt, 'karte');
    ueberschrift.innerText="Überschrift: Karte";
    kartenblatt.appendChild(ueberschrift);
    let ueber_h1=document.createElement('h1');
    ueber_h1.innerText="hallo!!!"
    kartenblatt.appendChild(ueber_h1);
    document.getElementById('spielfeld_kids').appendChild(kartenblatt);
    kartenblatt.appendChild(ueber_h1);
    this.verstecken();
  }  

  verstecken() {
    let d = document.getElementById('spielfeld_kids');
    d.style.visibility='hidden';
    d.style.height='0';
  }
  zeigen() {
    let d = document.getElementById('spielfeld_kids');
    d.style.visibility='visible';
    d.style.height='auto';
   }
}

/*<div class="cards">
    <article class="card">
        <header>
            <h2>A short heading</h2>
        </header>    
        <img src="balloons.jpg" alt="Hot air balloons">
        <div class="content">
            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many years ago. </p>
        </div>
            
    </article>
            
     <article class="card">
        <header>
            <h2>A short heading</h2>
        </header>    
        <img src="balloons2.jpg" alt="Hot air balloons">
        <div class="content">
            <p>Short content.</p>
        </div>
        <footer>I have a footer!</footer>
    </article>
            
    <article class="card">
        <header>
            <h2>A longer heading in this card</h2>
        </header>
        <img src="balloons.jpg" alt="Hot air balloons">
        <div class="content">
            <p>In a curious work, published in Paris in 1863 by Delaville Dedreux, there is a
                suggestion for reaching the North Pole by an aerostat.</p>
        </div>
        <footer>I have a footer!</footer>
    </article>
    <article class="card">
        <header>
            <h2>A short heading</h2>
        </header>
        <img src="balloons2.jpg" alt="Hot air balloons">
        <div class="content">
            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many
                years ago. </p>
        </div>

    </article>
</div>
*/
console.log('main_site_kids.js geladen');
