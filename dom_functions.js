function gibMirEinUnformatiertesElement(meinTag, meinText) {
  return gibMirEinElementMitTextFormatiert(meinTag, meinText, '');
}

function gibMirEinElementMitTextFormatiert(
  meinTag,
  meinText,
  mein_mm_css_Format
) {
  let retVal = document.createElement(meinTag);
  if ('' !== meinText) {
    retVal.innerHTML = meinText;
  }

  if ('' === mein_mm_css_Format) {
    return retVal;
  }

  let myStringArray = mein_mm_css_Format.split(' ');
  for (const s of myStringArray) {
    retVal.classList.add(s);
  }
  return retVal;
}

function gibMirEinFormatiertesElementOhneText(meinTag, mein_mm_css_Format) {
  return gibMirEinElementMitTextFormatiert(meinTag, '', mein_mm_css_Format);
}

function addHier(wo, was) {
  let test = document.getElementById(wo);
  test.appendChild(was);
}

function styleMich(mich, cssClasses) {
  let retVal = mich;
  let myStringArray = [];
  if (cssClasses) {
    if (cssClasses.includes(' ')) {
      myStringArray = cssClasses.split(' ');
    } else {
      myStringArray[0] = cssClasses;
    }
  }
  if (myStringArray.length > 0) {
    for (const s of myStringArray) {
      retVal.classList.add(s);
    }
  }
  return retVal;
}
