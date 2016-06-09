/**
 * Spinal Tap Case
 * ===============
 *
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 *
 */


// Helper functions
var stringHelpers = require('../utils/stringHelpers.js');
var isUpper = stringHelpers.isUpper;
var isLower = stringHelpers.isLower;


function spinalCase(str) {
  // take care of separators
  var res = str;
  res = res
    .replace(/ /gi, '-')
    .replace(/_/gi, '-');
  // camelCase
  var camelCaseIndices = [];
  res = res[0].toLowerCase() + res.substr(1);
  for (var i = 1; i < res.length; i++) {
    if (isUpper(res[i]) && res[i] != '-') {
      if (res[i-1] != '-') {
        camelCaseIndices.push(i);
      }
      res = res.substr(0, i) + res[i].toLowerCase() + res.substr(i+1);
    };
  }
  // use camelCaseIndexes to put dashes
  for (var i = 0; i < camelCaseIndices.length; i++) {
    var idx = camelCaseIndices[i] + i;
    res = res.substr(0, idx) + '-' + res.substr(idx);
  }
  return res;
}

module.exports = spinalCase;
