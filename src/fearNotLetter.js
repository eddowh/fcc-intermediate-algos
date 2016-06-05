/**
 * Missing letters
 * ===============
 *
 * Find the missing letter in the passed letter range and return it.
 *
 * If all letters are present in the range, return undefined.
 *
 */


var ALPHABET = "abcdefghijklmnopqrstuvwxyz";

/**
 * Courtesy of Guido Flohr
 * <http://stackoverflow.com/questions/5699127/how-to-find-out-the-position-of-the-first-occurrence-of-the-difference-between-t>
 */
function firstDiff(a, b) {
  var i = 0;
  while (a.charAt(i) === b.charAt(i))
    if (a.charAt(i++) === '')
      return -1;
  return i;
}


function fearNotLetter(str) {
  var alphabetSubset = ALPHABET.substr(ALPHABET.indexOf(str[0]));
  var i = firstDiff(str, alphabetSubset);
  if (i != str.length)
    return ALPHABET[i];
}

module.exports = fearNotLetter;
