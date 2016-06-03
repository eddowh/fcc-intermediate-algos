/**
 * Diff Two Arrays
 * ===============
 *
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 * In other words, return the symmetric difference of the two arrays.
 *
 */


function filterArray(arr1, arr2) {
  return arr1.filter(function(val) {
    return arr2.indexOf(val) == -1;
  });
}

function diffArray(arr1, arr2) {
  return filterArray(arr1, arr2).concat(filterArray(arr2, arr1));
}


module.exports = diffArray;
