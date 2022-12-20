function rot13(str) {
  var decoded = "";
  for (var i in str) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 91) {
      //This checks if character is outside of the A-Z range.
      decoded += str[i];
      continue;
    }
    if (str.charCodeAt(i) < 78) {
      decoded += String.fromCharCode(str.charCodeAt(i) + 13); //This checks characters A-M
    } else {
      decoded += String.fromCharCode(str.charCodeAt(i) - 13); //This checks characters N-Z
    }
  }
  return decoded;
}
