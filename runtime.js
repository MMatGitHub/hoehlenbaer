//https://stackoverflow.com/questions/7340726/detect-version-of-javascript

class runtime {

  getESEdition() {
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

  getESYear(edition) {
    return (
      {
        3: 1999,
        5: 2009,
      }[this.getESEdition()] || 2009 + this.getESEdition()
    );
  }

  toLesbar(){
    let retVal =
      'ECMA Script: Edition ' +
      this.getESEdition() +
      ' (' +
      this.getESYear() +
      ')';
      return retVal;
  }
  
}

console.log('runtime.js geladen');
 
