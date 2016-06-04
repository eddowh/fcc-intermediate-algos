/**
 * Search and Replace
 * ==================
 *
 * Perform a search and replace on the sentence using the arguments provided and return the new
 * sentence.
 *
 * First argument is the sentence to perform the search and replace on.
 *
 * Second argument is the word that you will be replacing (before).
 *
 * Third argument is what you will be replacing the second argument with (after).
 *
 * NOTE: Preserve the case of the original word when you are replacing it. For example if you mean
 * to replace the word "Book" with the word "dog", it should be replaced as "Dog"
 *
 */


// Helper functions
var stringHelpers = require('../utils/stringHelpers.js');
var isUpper = stringHelpers.isUpper;
var isLower = stringHelpers.isLower;


function myReplace(str, before, after) {
  var re = new RegExp(before, 'g');
  if (isUpper(before[0]))
    after = after[0].toUpperCase() + after.substr(1);
  else
    after = after[0].toLowerCase() + after.substr(1);
  return str.replace(re, after);
}

module.exports = myReplace;
