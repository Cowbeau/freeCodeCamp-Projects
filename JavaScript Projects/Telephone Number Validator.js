function telephoneCheck(str) {
  // ^ - for beginning of string
  // 2 - (1\s?)? allows for 1 or "1" if there is a 1 in the number.
  // 3 - \d{n} checks for number of digits. \d{3} checks for 3 digits.
  // 4 - x|y checks for values of either "x" or "y"
  // 5 - [\s\-]? checks for spaces or dashes between the groups of numbers.
  // 6 - $ signifies the end of string
  const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
  // test the string
  return regex.test(str);
}
