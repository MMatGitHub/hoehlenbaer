class MM {
  constructor(derDefault) {
    this.derDefault = derDefault;
  }

  hol(was) {
    document.getElementById('spielfeld').innerHTML="";
    document.getElementById('spielfeld').innerHTML=was;
  }
}