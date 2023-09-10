//https://stackoverflow.com/questions/7340726/detect-version-of-javascript
const ecmaScriptInfo = (function () {
  // () => { is not allowed
  function getESEdition() {
    const array = [];
    switch (true) {
      case !Array.isArray:
        return 3;
      case !window.Promise:
        return 5;
      case !array.includes:
        return 6;
      case !''.padStart:
        return 7;
      case !Promise.prototype.finally:
        return 8;
      case !window.BigInt:
        return 9;
      case !Promise.allSettled:
        return 10;
      case !''.replaceAll:
        return 11;
      case !array.at:
        return 12;
      default:
        return 13;
    }
  }

  function getESYear(edition) {
    return (
      {
        3: 1999,
        5: 2009,
      }[edition] || 2009 + edition
    );
  }

  const edition = getESEdition();
  const year = getESYear(edition);

  return {
    edition: edition, // usually shortened [edition,]
    year: year, // usually shortened [year,]
    text: 'Edition: ' + edition + ' | Year: ' + year,
    // `Edition: ${edition} | Year: ${year}` is not allowed
  };
})();

function toString(){
  let retVal =
    'ECMA Script: Edition ' +
    ecmaScriptInfo.edition +
    ' (' +
    ecmaScriptInfo.year +
    ')';
    return retVal;
}
console.log('runtime.js geladen');