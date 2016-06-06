/**
 * Sorted Union
 * ============
 *
 * Write a function that takes two or more arrays and returns a new array of unique values in the
 * order of the original provided arrays.
 *
 * In other words, all values present from all arrays should be included in their original order,
 * but with no duplicates in the final array.
 *
 * The unique numbers should be sorted by their original order, but the final array should not be
 * sorted in numerical order.
 *
 * Check the assertion tests for examples.
 *
 */


function uniteUnique() {
  var arr = arguments[0];
  for (var i in arguments) {
    if (i === 0) { continue; }
    for (var j in arguments[i]) {
      var item = arguments[i][j];
      if (arr.indexOf(item) == -1)
        arr.push(item);
    }
  }
  return arr;
}

module.exports = uniteUnique;
