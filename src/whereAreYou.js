/**
 * Where art thou
 * ==============
 *
 * Make a function that looks through an array of objects (first argument) and returns an array of
 * all objects that have matching property and value pairs (second argument). Each property and
 * value pair of the source object has to be present in the object from the collection if it is to
 * be included in the returned array.
 *
 * For example, if the first argument is
 *
 *     [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
 *
 * , and the second argument is
 *
 *     { last: "Capulet" }
 *
 * , then you must return the third object from the array (the first argument), because it contains
 * the property and its value, that was passed on as the second argument.
 *
 */


function isSubobject(subObj, obj) {
  if (Object.keys(subObj).length > Object.keys(obj).length)
    return false;
  else
    for (var o in subObj) {
      if (obj[o] != subObj[o])
        return false;
    }
  return true;
}


function whereAreYou(collection, source) {
  var arr = [];
  for (var i in collection) {
    c = collection[i];
    if (isSubobject(source, c))
      arr = arr.concat(c);
  }
  return arr;
}


module.exports = whereAreYou;
