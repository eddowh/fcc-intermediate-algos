/**
 * Pig Latin
 * =========
 *
 * Translate the provided string to pig latin.
 *
 * Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the
 * end of the word and suffixes an "ay".
 *
 * If a word begins with a vowel you just add "way" to the end.
 *
 */


var VOWELS = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];

function isVowel(char) {
  return VOWELS.indexOf(char) != -1;
}

function translatePigLatin(str) {
  if (isVowel(str[0]))
    return str + "way";
  else {
    var consonantCluster = "";
    for (var i in str) {
      var letter = str[i];
      if (!isVowel(letter))
        consonantCluster += letter;
      else
        break;
    }
    return str.substr(i) + consonantCluster + "ay";
  }
}

module.exports = translatePigLatin;
