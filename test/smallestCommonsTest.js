// load Unit.js module
var test = require('unit.js');

// load function
var smallestCommons = require('../src/smallestCommons.js');


describe('smallestCommonsTest', function() {

  it('output type: number', function() {
    test.number(smallestCommons([1, 5]));
  });

  it('general asserts', function() {
    test.value(smallestCommons([1, 5]))
        .is(60);
    test.value(smallestCommons([5, 1]))
        .is(60);
    test.value(smallestCommons([1, 13]))
        .is(360360);
  });

});
