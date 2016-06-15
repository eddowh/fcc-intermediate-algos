/**
 * Finders Keepers
 * ===============
 *
 * Create a function that looks through an array (first argument) and returns the first element in
 * the array that passes a truth test (second argument).
 *
 */


function findElement(arr, func) {
  for (var i in arr) {
    var elem = arr[i];
    if (func(elem)) {
      return elem;
    }
  }
  return undefined;
}

module.exports = findElement;
