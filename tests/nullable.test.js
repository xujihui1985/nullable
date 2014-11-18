/**
 * Created by sean on 11/18/14.
 */
'use strict';

var expect = require('chai').expect;
var Nullable = require('../lib/nullable');

describe('nullable', function () {

  it('should return default value if value is not defined', function() {
    var nullable = new Nullable(null).def([]);
    expect(nullable.val).to.eql([]);
  });

  it('should return target if value is defined', function() {
    var nullable = new Nullable([1,2,3]).def([]);
    expect(nullable.val).to.eql([1,2,3]);
  });

  it('should throw TypeError', function() {
    var nullable = new Nullable();
    expect(function() { var value = nullable.val; }).to.throw(TypeError);
  });

  it('should return nullable object if instance without new', function() {
    var nullable = Nullable();
    expect(nullable).to.be.instanceOf(Nullable);
  });
});
