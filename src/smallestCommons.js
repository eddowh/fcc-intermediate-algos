/**
 * Smallest Common Multiple
 * ========================
 *
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both,
 * as well as by all sequential numbers in the range between these parameters.
 *
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 *
 * e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by
 * all numbers between 1 and 3.
 *
 */


// Helper functions
var mathHelpers = require('../utils/mathHelpers.js');
var range = mathHelpers.range;
var lcm = mathHelpers.lcm;


function smallestCommons(arr) {
  // range
  arr.sort(function(a, b) { return a - b; });
  var arrRange = range(arr[0], arr[1], isReverse=true);

  return arrRange.reduce(function(a, b) { return lcm(a,b); });
}

module.exports = smallestCommons;
