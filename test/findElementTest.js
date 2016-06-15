// load Unit.js module
var test = require('unit.js');

// load function
var findElement = require('../src/findElement.js');


describe('findElementTest', function() {

  it('general asserts', function() {
    test.value(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))
        .is(8);
  });

  it('no matching elements', function() {
    test.value(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }))
        .is(undefined);
  });

});
