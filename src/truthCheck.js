/**
 * Everything Be True
 * ==================
 *
 * Check if the predicate (second argument) is truthy on all elements of a collection (first
 * argument).
 *
 * Remember, you can access object properties through either dot notation or [] notation.
 *
 */


function truthCheck(collection, pre) {
  for (var i in collection) {
    var obj = collection[i];
    if (!obj[pre]) { return false; }
  }
  return true;
}

module.exports = truthCheck;
