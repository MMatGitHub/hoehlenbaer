class Chat {
  constructor(derDefault) {
    this.derDefault = derDefault;
    jammer("Erzeuge " + this.derDefault);
    try {
      this.peer = new Peer();
      
      const chat_div=document.createElement('div');
      chat_div.id="spielfeld_chat"
      const chat_p=document.createElement('p');
      chat_p.innerHTML="<a href='https://status.peerjs.com/'>peerjs erreichbar?</a><p>Verwende peerjs in der version 1.5.1 um zu chatten mit:</p>";
      chat_p.id="chat_header"
      
      const chat_id=document.createElement('p');
      chat_id.innerText="Niemand";
      chat_id.id="chat_id"
      document.getElementById('spielfeld').appendChild(chat_div);
      document.getElementById('spielfeld_chat').appendChild(chat_p);
      document.getElementById('spielfeld_chat').appendChild(chat_id);
      
      let self = this;

      let testChatfunktion = gibMirEinElementMitTextFormatiert(
        'button',
        'Test Chatfunktion',
        'w3-button w3-blue w3-hover-red w3-padding-large w3-large w3-margin-top'
        );  
        testChatfunktion.onclick = function () {
          jammer("teste Chatfunktion!");
          self.chatten("hello world");
        }
        document.getElementById('spielfeld_chat').appendChild(testChatfunktion);

        let testIDfunktion = gibMirEinElementMitTextFormatiert(
          'button',
          'Test IDfunktion',
          'w3-button w3-blue w3-hover-red w3-padding-large w3-large w3-margin-top'
          );
        
        testIDfunktion.onclick = function () {
          jammer("teste IDfunktion!");
          const userInput = prompt("Mit wem willst Du chatten? ID muss woanders ausgehandelt worden sein :-)");
            if (userInput !== null) {
              jammer("You entered:", userInput);
              chat_id.innerText = userInput;
              self.schwadronier ("Neue ID:" + userInput);
              self.verbinden();
            } else {
              jammer("User cancelled the input.");
            }
        }
        
        document.getElementById('spielfeld_chat').appendChild(testIDfunktion);



      this.verstecken(); 

    } catch (error) {
      // Handle the error
      jammer(error);
      console.error("An error occurred:", error);
    }
  }
  schwadronier(was){
    let schwadronier = document.createElement("p");
    schwadronier.innerText= was;
    document.getElementById("spielfeld_chat").appendChild(schwadronier);
  }
  verbinden(){
    let meinChatIDPartner = document.getElementById("chat_id").innerText;
    this.schwadronier("Verbinde zu ["+meinChatIDPartner+"]")
    this.conn = this.peer.connect(meinChatIDPartner);
  }
  chatten(text){
    this.conn.on('open', function(){
      this.conn.send('say: '+text);
    });
  }
  empfangen(){
    jammer("Empfange...");
    this.peer.on('connection', function(conn) {
      conn.on('data', function(data){
        alert(data);
      });
    });

  }

  verstecken() {
    jammer("Versteckt at "+this.derDefault);
    let d = document.getElementById('spielfeld_chat');
    d.style.visibility='hidden';
    d.style.height='0';
  }
  zeigen() {
    //jammer("Hello from "+this.derDefault);
    let d = document.getElementById('spielfeld_chat');
    d.style.visibility='visible';
    d.style.height='auto';
    this.empfangen();
  }
}
console.log('main_site_chat.js geladen');
