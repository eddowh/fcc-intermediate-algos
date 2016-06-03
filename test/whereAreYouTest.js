// load Unit.js module
var test = require('unit.js');

// load function
var whereAreYou = require('../src/whereAreYou.js');


describe('whereAreYouTest', function() {

  it('general asserts', function() {
    test.given(collection = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
               source = { last: "Capulet" })
        .value(whereAreYou(collection, source))
        .is([{ first: "Tybalt", last: "Capulet" }]);

    test.given(collection = [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }],
               source = { "a": 1 })
        .value(whereAreYou(collection, source))
        .is([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]);

    test.given(collection = [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }],
               source = { "a": 1, "b": 2 })
        .value(whereAreYou(collection, source))
        .is([{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]);

    test.given(collection = [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }],
               source = { "a": 1, "c": 2 })
        .value(whereAreYou(collection, source))
        .is([{ "a": 1, "b": 2, "c": 2 }]);
  });

});
