// load Unit.js module
var test = require('unit.js');

// load function
var sumFibs = require('../src/sumFibs.js');


describe('sumFibsTest', function() {

  it('output type: number', function() {
    test.number(sumFibs(1));
  });

  it('small numbers', function() {
    test.value(sumFibs(4)).is(5);
  });


  it('medium numbers', function() {
    test.value(sumFibs(1000)).is(1785);
  });

  it('large numbers', function() {
    test.value(sumFibs(75024)).is(60696);
    test.value(sumFibs(75025)).is(135721);
    test.value(sumFibs(4000000)).is(4613732);
  });

});
