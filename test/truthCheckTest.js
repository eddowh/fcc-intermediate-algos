// load Unit.js module
var test = require('unit.js');

// load function
var truthCheck = require('../src/truthCheck.js');


describe('truthCheckTest', function() {

  it('truths', function() {
    test.given(collection = [{"user": "Tinky-Winky", "sex": "male"},
                             {"user": "Dipsy", "sex": "male"},
                             {"user": "Laa-Laa", "sex": "female"},
                             {"user": "Po", "sex": "female"}],
               pre = "sex")
        .value(truthCheck(collection, pre)).is(true);
    test.given(collection = [{"name": "Pete", "onBoat": true},
                             {"name": "Repeat", "onBoat": true, "alias": "Repete"},
                             {"name": "FastFoward", "onBoat": true}],
               pre = "onBoat")
        .value(truthCheck(collection, pre)).is(true);
    test.given(collection = [{"single": "yes"}],
               pre = "single")
        .value(truthCheck(collection, pre)).is(true);
  });

  it('missing key', function() {
    test.given(collection = [{"user": "Tinky-Winky", "sex": "male"},
                             {"user": "Dipsy"},
                             {"user": "Laa-Laa", "sex": "female"},
                             {"user": "Po", "sex": "female"}],
               pre = "sex")
        .value(truthCheck(collection, pre)).is(false);
  });

  it('contains integer 0 (coerced into false)', function() {
    test.given(collection = [{"user": "Tinky-Winky", "sex": "male", "age": 0},
                             {"user": "Dipsy", "sex": "male", "age": 3},
                             {"user": "Laa-Laa", "sex": "female", "age": 5},
                             {"user": "Po", "sex": "female", "age": 4}],
               pre = "age")
        .value(truthCheck(collection, pre)).is(false);
  });

  it('contains null', function() {
    test.given(collection = [{"name": "Pete", "onBoat": true},
                             {"name": "Repeat", "onBoat": true},
                             {"name": "FastFoward", "onBoat": null}],
               pre = "onBoat")
        .value(truthCheck(collection, pre)).is(false);
  });

  it('contains empty string', function() {
    test.given(collection = [{"single": ""},
                             {"single": "double"}],
               pre = "single")
        .value(truthCheck(collection, pre)).is(false);
  });

  it('contains undefined', function() {
    test.given(collection = [{"single": "double"},
                             {"single": undefined}],
               pre = "single")
        .value(truthCheck(collection, pre)).is(false);
  });

  it('contains NaN', function() {
    test.given(collection = [{"single": "double"},
                             {"single": NaN}],
               pre = "single")
        .value(truthCheck(collection, pre)).is(false);
  });

});
