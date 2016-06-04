// load Unit.js module
var test = require('unit.js');

// load function
var myReplace = require('../src/myReplace.js');


describe('myReplaceTest', function() {

  it('general asserts', function() {
    test.given(str = "Let us go to the store", before = "store", after = "mall")
        .value(myReplace(str, before, after)).is("Let us go to the mall");
  });

  it('spelling errors', function() {
    test.given(str = "This has a spellngi error", before = "spellngi", after = "spelling")
        .value(myReplace(str, before, after)).is("This has a spelling error");
  });

  it('preserve capitalization', function() {
    test.given(str = "He is Sleeping on the couch", before = "Sleeping", after = "sitting")
        .value(myReplace(str, before, after)).is("He is Sitting on the couch");
    test.given(str = "His name is Tom", before = "Tom", after = "john")
        .value(myReplace(str, before, after)).is("His name is John");
    test.given(str = "Let us get back to more Coding", before = "Coding", after = "algorithms")
        .value(myReplace(str, before, after)).is("Let us get back to more Algorithms");
  });

});
