// load Unit.js module
var test = require('unit.js');

// load function
var uniteUnique = require('../src/uniteUnique.js');


describe('uniteUniqueTest', function() {

  it('general asserts', function() {
    test.value(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
        .is([1, 3, 2, 5, 4]);
    test.value(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]))
        .is([1, 3, 2, [5], [4]]);
    test.value(uniteUnique([1, 2, 3], [5, 2, 1]))
        .is([1, 2, 3, 5]);
    test.value(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
        .is([1, 2, 3, 5, 4, 6, 7, 8]);
  });

});
