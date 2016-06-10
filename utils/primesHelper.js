/**
 * Helper functions for prime numbers
 * ==================================
 *
 *   - isPrime
 *   - genPrimes
 *
 */


/**
 * Checks whether a number is prime or not.
 *
 * @param {Number} n The number.
 */
function isPrime(n) {
  if (n === 1)
    return false;
  else if (n < 4)
    // 2 and 3 are primes
    return true;
  else if (n % 2 === 0)
    return false;
  else if (n < 9)
    // we have already excluded 4,6,8
    return true;
  else if (n % 3 === 0)
    return false;
  else {
    var r = Math.floor(Math.sqrt(n));
    var f = 5;
    while (f <= r) {
      if (n % f === 0)
        return false;
      if (n % (f + 2) === 0)
        return false;
      f += 6;
    }
    return true;
  }
}


/**
 * Returns an array of primes up until a finite number as the limit.
 *
 * @param {Number} limit The upper limit.
 */
function genPrimes(limit) {
  var primes = [2];
  var counter = 3;
  while (counter <= limit) {
    if (isPrime(counter))
      primes.push(counter);
    counter += 2;
  }
  return primes;
}


module.exports = {
  isPrime: isPrime,
  genPrimes: genPrimes
}
