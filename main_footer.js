function generateFooterDynamically(){
  addHier(
    'app_author',
    gibMirEinUnformatiertesElement('p', '*Author*: ' + metadaten[0]['author'])
  );
  addHier(
    'app_name',
    gibMirEinUnformatiertesElement('p', '*Appname:* ' + metadaten[0]['appname'])
  );
  addHier(
    'app_version',
    gibMirEinUnformatiertesElement('p', '*Version*: ' + metadaten[0]['version'])
  );
  addHier(
    'app_hinweis',
    gibMirEinUnformatiertesElement('p', '*Hinweis*: In der Applikationszeile oben sind auswählbar: ' + getSpielfeldStatusAsString())
  );
  let retVal = new runtime().toLesbar();
  addStatuszeile("*Runtime*: "+retVal);
}
