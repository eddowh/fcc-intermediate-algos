// load Unit.js module
var test = require('unit.js');

// load function
var convertHTML = require('../src/convertHTML.js');


describe('convertHTMLTest', function() {

  it('ampersand', function() {
    test.value(convertHTML("Dolce & Gabbana"))
        .is("Dolce &amp; Gabbana");
  });

  it('less than', function() {
    test.value(convertHTML("Hamburgers < Pizza < Tacos"))
        .is("Hamburgers &lt; Pizza &lt; Tacos");
  });

  it('greater than', function() {
    test.value(convertHTML("Sixty > twelve"))
        .is("Sixty &gt; twelve");
  });

  it('quotation marks', function() {
    test.value(convertHTML('Stuff in "quotation marks"'))
        .is("Stuff in &quot;quotation marks&quot;");
  });

  it('apostrophe', function() {
    test.value(convertHTML("Shindler's List"))
        .is("Shindler&apos;s List");
  });

  it('enclosing tags', function() {
    test.value(convertHTML("<>"))
        .is("&lt;&gt;");
  });

  it('no html entities', function() {
    test.value(convertHTML("abc"))
        .is("abc");
  });

});
