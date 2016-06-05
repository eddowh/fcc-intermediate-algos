// load Unit.js module
var test = require('unit.js');

// load function
var translatePigLatin = require('../src/translatePigLatin.js');


describe('translatePigLatinTest', function() {

  it('first consonant', function() {
    test.value(translatePigLatin("california")).is("aliforniacay");
    test.value(translatePigLatin("paragraphs")).is("aragraphspay");
  });

  it('consonant cluster', function() {
    test.value(translatePigLatin("glove")).is("oveglay");
  });

  it('begins with a vowel', function() {
    test.value(translatePigLatin("algorithm")).is("algorithmway");
    test.value(translatePigLatin("eight")).is("eightway");
  });

});
