// load Unit.js module
var test = require('unit.js');

// load function
var sumPrimes = require('../src/sumPrimes.js');


describe('sumPrimesTest', function() {

  it('output type: number', function() {
    test.number(sumPrimes(10));
  });

  it('general asserts', function() {
    test.value(sumPrimes(10)).is(17);
    test.value(sumPrimes(977)).is(73156);
  });

});
