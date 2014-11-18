/**
 * Created by sean on 11/18/14.
 */

'use strict';

module.exports = Nullable;

function Nullable(value) {
  if (!(this instanceof Nullable)) {
    return new Nullable(value);
  }
  this.value = value;

  Object.defineProperty(this, 'val', {
    get: function () {

      if (!isEmpty(this.value)) return this.value;

      if (!isEmpty(this.defaultValue)) return this.defaultValue;
      throw new TypeError('');
    }
  });
}

Nullable.prototype.def = function (defaultValue) {
  this.defaultValue = defaultValue;
  return this;
};

function isEmpty(target) {
  return target === null || target === undefined;
}

