// load Unit.js module
var test = require('unit.js');

// load function
var diffArray = require('../src/diffArray.js');


describe('diffArrayTest', function() {

  it('output type: array', function() {
    test.array(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  });

  it('general asserts', function() {
    test
      .given(arr1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
             arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"])
      .value(diffArray(arr1, arr2)).is(["pink wool"]);
    test
      .given(arr1 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
             arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"])
      .value(diffArray(arr1, arr2)).is(["pink wool", "diorite"]);
    test
      .given(arr1 = [1, "calf", 3, "piglet"],
             arr2 = [1, "calf", 3, 4])
      .value(diffArray(arr1, arr2)).is(["piglet", 4]);
  });

  it('equal arrays', function() {
    test
      .given(arr1 = ["andesite", "grass", "dirt", "dead shrub"],
             arr2 = ["andesite", "grass", "dirt", "dead shrub"])
      .value(diffArray(arr1, arr2)).is([]);
  });

  it('one empty array', function() {
    test
      .given(arr1 = [],
             arr2 = ["snuffleupagus", "cookie monster", "elmo"])
      .value(diffArray(arr1, arr2)).is(["snuffleupagus", "cookie monster", "elmo"]);
  });

  it('diff arrays concatenated', function() {
    test
      .given(arr1 = [1, "calf", 3, "piglet"],
             arr2 = [7, "filly"])
      .value(diffArray(arr1, arr2)).is([1, "calf", 3, "piglet", 7, "filly"]);
  });

});
