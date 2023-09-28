
function myFunction() {
  jammer("ToDo Menu anzeigen.");
    var x = document.getElementById("halloDiv");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
 }

function getAppzeile() {
  let retVal = `<div class="w3-top">
    <div class="w3-bar w3-orange w3-card w3-left-align w3-large">
      <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
      <a href="index.html" class="w3-bar-item w3-button w3-padding-large w3-white">Home</a>
      <a href="../zischliste/zischliste.html"  class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Zischliste</a>
      <a href="../quartette/quartette.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Quartette</a>
      <a href="../todo/todo.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">todo</a>
      <a href="../mie/mie.html" class="w3-bar-item w3-butt2 files modified, 1 addedon w3-hide-small w3-padding-large w3-hover-white">mie</a>
      <a href="../mm/mm.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">mm</a>
    </div>
  </div>`;
  return retVal;
}

function getSmallAppzeile() {
  return `<div id="navdemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
    <a href="index.html" class="w3-bar-item w3-button w3-padding-large">home</a>
    <a href="../dieblumarbeit/dieblumarbeit.html" class="w3-bar-item w3-button w3-padding-large">DieBlumarbeit</a>
    <a href="../zischliste/zischliste.html" class="w3-bar-item w3-button w3-padding-large">Zischliste</a>
    <a href="../quartette/quartette.html" class="w3-bar-item w3-button w3-padding-large">Quartette</a>
    <a href="../todo/todo.html" class="w3-bar-item w3-button w3-padding-large">todo</a>
    <a href="../mie/mie.html" class="w3-bar-item w3-button w3-padding-large">mie</a>
    <a href="../mm/mm.html" clashallos="w3-bar-item w3-button w3-padding-large">mm</a>
  </div>
</div>`;
}
