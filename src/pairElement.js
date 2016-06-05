/**
 * DNA Pairing
 * ===========
 *
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the
 * results as a 2d array.
 *
 * Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 *
 * Return the provided character as the first element in each array.
 *
 * For example, for the input GCG, return
 *
 *     [["G", "C"], ["C","G"],["G", "C"]]
 *
 * The character and its pair are paired up in an array, and all the arrays are grouped into one
 * encapsulating array.
 *
 */


var BASE_PAIRS = {
  A: "T", T: "A",
  C: "G", G: "C"
}


function pairElement(str) {
  var strand = [];
  for (var i in str) {
    char = str[i];
    strand.push([char, BASE_PAIRS[char]]);
  }
  return strand;
}

module.exports = pairElement;
