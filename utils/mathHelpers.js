/**
 * Helper functions for mathematics
 * ================================
 *
 *   - range
 *   - [~] gcd (great common divisor)
 *   - [~] lcm (least common multiple)
 *
 * [~]: Implemented  by StackOverflow user `rgbchris`.
 * See <http://stackoverflow.com/questions/31302054/how-to-find-the-least-common-multiple-of-a-range-of-numbers>.
 */


function range(min, max, isReverse) {
  // isReverse === false by default
  isReverse = typeof isReverse !== 'undefined' ? isReverse : false;

  var arr = [];
  if (isReverse) {
    for (var i = max; i >= min; i--) { arr.push(i); }
  } else {
    for (var i = min; i <= max; i++) { arr.push(i); }
  }

  return arr;
}


function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
}


function lcm(a, b) {
  return (a * b) / gcd(a, b);
}


module.exports = {
  range: range,
  gcd: gcd,
  lcm: lcm
}
