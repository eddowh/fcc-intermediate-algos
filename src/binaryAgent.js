/**
 * Binary Agents
 * =============
 *
 * Return an English translated sentence of the passed binary string.
 *
 * The binary string will be space separated.
 *
 */


var ALPHABET_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ALPHABET_LOWER = "abcdefghijklmnopqrstuvwxyz";

var PUNCTUATION_BINARY_LOOKUP = {
  " ": "00100000",
  "'": "00100111",
  "!": "00100001",
  "?": "00111111"
};

// constants
function binaryToString(seq) {
  // alphabet or punctuation marks?
  if (seq.slice(0, 3) === '001') {
    for (var key in PUNCTUATION_BINARY_LOOKUP) {
      value = PUNCTUATION_BINARY_LOOKUP[key];
      if (value === seq)
        return key;
    }
  }
  if (seq.slice(0, 2) !== '01') { return ; }
  // Alphabet: determine if its upper or lower
  var alphabet;
  if (seq[2] === '0')
    alphabet = ALPHABET_UPPER;
  else
    alphabet = ALPHABET_LOWER;
  seq = seq.substr(3);
  // main
  var n = 0;
  for (var i in seq) {
    n += seq[seq.length - 1 - i] * Math.pow(2, i);
  }
  return alphabet[n - 1];
}


function binaryAgent(str) {
  return str
    .split(' ')
    .map(function(s) { return binaryToString(s); })
    .join('');
}

module.exports = binaryAgent;
