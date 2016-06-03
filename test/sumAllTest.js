// load Unit.js module
var test = require('unit.js');

// load function
var sumAll = require('../src/sumAll.js');


describe('sumAllTest', function() {

  it('output type: number', function() {
    test.number(sumAll([1,4]));
  });

  it('general asserts', function() {
    test.value(sumAll([1, 4])).is(10);
    test.value(sumAll([4, 1])).is(10);
    test.value(sumAll([5, 10])).is(45);
    test.value(sumAll([10, 5])).is(45);
  });

});
