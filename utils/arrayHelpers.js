/**
 * Helper functions for arrays
 * ===========================
 *
 *   - sumArray
 *
 */


/**
 * Returns the sum of an array of numbers
 *
 * @param {Array} arr The array of numbers.
 */
function sumArray(arr) {
  return arr.reduce(function(x, y) { return x + y; }, 0);
}


module.exports = {
  sumArray: sumArray
}
