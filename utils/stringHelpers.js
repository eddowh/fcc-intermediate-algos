/**
 * Helper functions on strings.
 */


function isLower(char) {
  return char === char.toLowerCase();
}

function isUpper(char) {
  return char === char.toUpperCase();
}

module.exports = {
  isLower: isLower,
  isUpper: isUpper
};
