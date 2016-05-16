(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, function () { 'use strict';

  var divide = function divide(x, y) {
    return x / y;
  };

  var subtract = function subtract(x, y) {
    return x - y;
  };

  console.log(divide(4, 2));
  console.log(subtract(4, 2));

}));