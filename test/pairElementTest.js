// load Unit.js module
var test = require('unit.js');

// load function
var pairElement = require('../src/pairElement.js');


describe('pairElementTest', function() {

  it('general asserts', function() {
    test.value(pairElement("ATCGA"))
        .is([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
    test.value(pairElement("TTGAG"))
        .is([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
    test.value(pairElement("CTCTA"))
        .is([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]);
  });

});
