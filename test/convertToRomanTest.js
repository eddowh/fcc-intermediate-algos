// load Unit.js module
var test = require('unit.js');

// load function
var convertToRoman = require('../src/convertToRoman.js');


describe('convertToRomanTest', function() {

  it('1 <= n <= 9', function() {
    test.value(convertToRoman(2)).is("II");
    test.value(convertToRoman(3)).is("III");
    test.value(convertToRoman(4)).is("IV");
    test.value(convertToRoman(5)).is("V");
    test.value(convertToRoman(9)).is("IX");
  });

  it('10 <= n <= 99', function() {
    test.value(convertToRoman(12)).is("XII");
    test.value(convertToRoman(16)).is("XVI");
    test.value(convertToRoman(29)).is("XXIX");
    test.value(convertToRoman(44)).is("XLIV");
    test.value(convertToRoman(45)).is("XLV");
    test.value(convertToRoman(68)).is("LXVIII");
    test.value(convertToRoman(83)).is("LXXXIII");
    test.value(convertToRoman(97)).is("XCVII");
    test.value(convertToRoman(99)).is("XCIX");
  });

  it('100 <= n <= 999', function() {
    test.value(convertToRoman(500)).is("D");
    test.value(convertToRoman(501)).is("DI");
    test.value(convertToRoman(649)).is("DCXLIX");
    test.value(convertToRoman(798)).is("DCCXCVIII");
    test.value(convertToRoman(891)).is("DCCCXCI");
  });

  it('1000 <= n <= 3999', function() {
    test.value(convertToRoman(1000)).is("M");
    test.value(convertToRoman(1004)).is("MIV");
    test.value(convertToRoman(1006)).is("MVI");
    test.value(convertToRoman(1023)).is("MXXIII");
    test.value(convertToRoman(2014)).is("MMXIV");
    test.value(convertToRoman(3999)).is("MMMCMXCIX");
  });

  it('4000 <= n < 4999', function() {
    test.value(convertToRoman(4713)).is("MMMMDCCXIII");
  });

});
