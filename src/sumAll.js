/**
 * Sum All Numbers in a Range
 * ==========================
 *
 * We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers
 * between them.
 *
 * The lowest number will not always come first.
 *
 */


function sumAll(arr) {
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  return max * (max + 1) / 2 - min * (min - 1) / 2;
}


module.exports = sumAll;
