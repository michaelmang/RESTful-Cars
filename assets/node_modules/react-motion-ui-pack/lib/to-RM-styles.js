'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = toRMStyles;

var _reactMotion = require('react-motion');

function toRMStyles(styles) {
  var rmStyles = {};

  Object.keys(styles).forEach(function (key) {
    var style = styles[key];
    var isObject = (typeof style === 'undefined' ? 'undefined' : _typeof(style)) === 'object';

    // check if user passed their own config
    // if not default to a regular spring
    rmStyles[key] = isObject ? _extends({}, style) : (0, _reactMotion.spring)(style);
  });

  return rmStyles;
}