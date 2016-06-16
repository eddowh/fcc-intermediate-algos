// load Unit.js module
var test = require('unit.js');

// load function
var dropElements = require('../src/dropElements.js');


describe('dropElementsTest', function() {

  it('general asserts', function() {
    test.value(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))
        .is([3, 4]);
    test.value(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))
        .is([1, 0, 1]);
    test.value(dropElements([1, 2, 3], function(n) {return n > 0;}))
        .is([1, 2, 3]);
    test.value(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}))
        .is([7, 4]);
    test.value(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))
        .is([3, 9, 2]);
  });

  it('empty array', function() {
    test.value(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))
        .is([]);
  });

});
