/**
 * Sum All Odd Fibonacci Numbers
 * =============================
 *
 * Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a
 * Fibonacci number.
 *
 * The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent
 * number is the sum of the previous two numbers.
 *
 * As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers
 * under 4 are 1, 1, and 3.
 *
 */


// Helper functions
var sumArray = require('../utils/arrayHelpers.js').sumArray;

// Constants
var FIB_INIT = [1, 1];


function sumFibs(num) {
  // value is not cached when running tests
  var fibSeq = FIB_INIT.slice();
  while (true) {
    var next = sumArray(fibSeq.slice(fibSeq.length - 2, fibSeq.length));
    if (next <= num)
      fibSeq.push(next);
    else
      break;
  }
  oddFibSeq = fibSeq.filter(function(n) { return n % 2 == 1; });
  return sumArray(oddFibSeq);
}

module.exports = sumFibs;
