/**
 * Roman Numeral Converter
 * =======================
 *
 * Convert the given number into a roman numeral.
 *
 * All roman numerals answers should be provided in upper-case.
 *
 */


var ROMAN_LOOKUP = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}


/**
 * Starting at the largest number, continue subtracting from the lookup table.
 * Appending as long as the remainder is greater than the lookup value
 *
 * Courtesy of NextLocal
 * <http://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript>
 */
function convertToRoman(num) {
  var i, roman = '';
  for (i in ROMAN_LOOKUP) {
    while (num >= ROMAN_LOOKUP[i]) {
      roman += i;
      num -= ROMAN_LOOKUP[i];
    }
  }
  return roman;
}


module.exports = convertToRoman;
