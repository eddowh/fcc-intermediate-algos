// load Unit.js module
var test = require('unit.js');

// load function
var booWho = require('../src/booWho.js');


describe('booWhoTest', function() {

  it('general asserts', function() {
    test.value(booWho(true)).is(true);
    test.value(booWho(false)).is(true);
  });

  it('arrays', function() {
    test.value(booWho([1, 2, 3])).is(false);
  });

  it('functions', function() {
    test.value(booWho([].slice)).is(false);
  });

  it('objects', function() {
    test.value(booWho({ "a": 1 })).is(false);
  });

  it('integers', function() {
    test.value(booWho(1)).is(false);
  });

  it('NaN', function() {
    test.value(booWho(NaN)).is(false);
  });

  it('regular string', function() {
    test.value(booWho("a")).is(false);
  });

  it('string repr. of boolean values', function() {
    test.value(booWho("true")).is(false);
    test.value(booWho("false")).is(false);
  });

});
