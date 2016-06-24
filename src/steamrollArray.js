/**
 * Steamroller
 * ===========
 *
 * Flatten a nested array. You must account for varying levels of nesting.
 *
 */


function steamrollArray(arr) {
  var res = [];
  // using recursion!
  for (var i in arr) {
    var elem = arr[i];
    if (elem.constructor === Array)
      res = res.concat(steamrollArray(elem));
    else
      res.push(arr[i]);
  }
  return res;
}

module.exports = steamrollArray;
