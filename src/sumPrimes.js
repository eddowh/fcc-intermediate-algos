/**
 * Sum All Primes
 * ==============
 *
 * Sum all the prime numbers up to and including the provided number.
 *
 * A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime
 * number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only
 * divisible by itself.
 *
 * The provided number may not be a prime.
 *
 */


// Helper functions
var sumArray = require('../utils/arrayHelpers.js').sumArray;
var genPrimes = require('../utils/primesHelper.js').genPrimes;


function sumPrimes(num) {
  return sumArray(genPrimes(num));
}

module.exports = sumPrimes;
