function jammer(was) {
  if (DEBUG_JAMMER_OFF === true){
    console.log(was);
    return;
  }
  if (null==was){
    was ="udef";
  }
  let buggy = document.createElement('p');
  let um = document.createTextNode(
    'DEBUG at (' + getCurrentFormattedTime() + '): ' + was.toString()
  );
  document.getElementById('debugDiv').appendChild(buggy).appendChild(um);
}

function fehlerjammer(ueber){
  jammer ('ERROR: '+ ueber);
}

function riesenjammer(ueber){
 jammer (ueber);
 let retVal='FIRST: ';
 Array.from(ueber.children).map((child)=>retVal=retVal+","+child);
 jammer (retVal);
}

console.log('funktionen.js geladen');
