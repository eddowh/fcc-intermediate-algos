// load Unit.js module
var test = require('unit.js');

// load function
var spinalCase = require('../src/spinalCase.js');


describe('spinalCaseTest', function() {

  it('separated by spaces', function() {
    test.value(spinalCase("This Is Spinal Tap"))
        .is("this-is-spinal-tap");
  });

  it('camelCase', function() {
    test.value(spinalCase("thisIsSpinalTap"))
        .is("this-is-spinal-tap");
  });

  it('separated by underscores', function() {
    test.value(spinalCase("The_Andy_Griffith_Show"))
        .is("the-andy-griffith-show");
  });

  it('mix of spaces and dashes', function() {
    test.value(spinalCase("Teletubbies say Eh-oh"))
        .is("teletubbies-say-eh-oh");
  });

  it('arbitrary pattern', function() {
    test.value(spinalCase("AllThe-small Things"))
        .is("all-the-small-things");
  });

});
