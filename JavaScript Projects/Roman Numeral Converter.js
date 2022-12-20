function convertToRoman(numToConvert) {
  // make a list of all relevant Roman numerals and numbers
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  // Make an empty string for the result
  let result = "";

  // Loop through all the numbers while the numToConvert is greater than the number, keep looping numbers.
  ForEach(function (number, i) {
    while (numToConvert >= number) {
      // add the numerals as you go. ex 55 --> loop the numbers, find L, loop again, find V
      result += roman[i];
      numToConvert -= number;
    }
  });

  return result;
}
