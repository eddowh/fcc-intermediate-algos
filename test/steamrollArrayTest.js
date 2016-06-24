// load Unit.js module
var test = require('unit.js');

// load function
var steamrollArray = require('../src/steamrollArray.js');


describe('steamrollArrayTest', function() {

  it('general asserts', function() {
    test.value(steamrollArray([[["a"]], [["b"]]]))
        .is(["a", "b"]);
    test.value(steamrollArray([1, [2], [3, [[4]]]]))
        .is([1, 2, 3, 4]);
  });

  it('contains empty array', function() {
    test.value(steamrollArray([1, [], [3, [[4]]]]))
        .is([1, 3, 4]);
  });

  it('contains empty object', function() {
    test.value(steamrollArray([1, {}, [3, [[4]]]]))
        .is([1, {}, 3, 4]);
  });

});
