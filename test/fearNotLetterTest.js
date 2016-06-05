// load Unit.js module
var test = require('unit.js');

// load function
var fearNotLetter = require('../src/fearNotLetter.js');


describe('fearNotLetterTest', function() {

  it('missing letters', function() {
    test.value(fearNotLetter("abce")).is("d");
    test.value(fearNotLetter("abcdefghjklmno")).is("i");
  });

  it('no missing letters', function() {
    test.value(fearNotLetter("bcd")).is(undefined);
    test.value(fearNotLetter("yz")).is(undefined);
  });

});
