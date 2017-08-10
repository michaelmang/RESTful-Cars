'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMotion = require('react-motion');

var _isElement = require('./is-element');

var _isElement2 = _interopRequireDefault(_isElement);

var _fromRMStyles = require('./from-RM-styles');

var _fromRMStyles2 = _interopRequireDefault(_fromRMStyles);

var _toRMStyles = require('./to-RM-styles');

var _toRMStyles2 = _interopRequireDefault(_toRMStyles);

var _configToStyle = require('./config-to-style');

var _configToStyle2 = _interopRequireDefault(_configToStyle);

var _specialAssign = require('./special-assign');

var _specialAssign2 = _interopRequireDefault(_specialAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var checkedProps = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool, _isElement2.default]),
  runOnMount: _propTypes2.default.bool,
  appear: _propTypes2.default.object,
  enter: _propTypes2.default.object,
  leave: _propTypes2.default.object,
  onEnter: _propTypes2.default.func,
  onLeave: _propTypes2.default.func
};

var Transition = function (_Component) {
  _inherits(Transition, _Component);

  function Transition() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Transition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Transition.__proto__ || Object.getPrototypeOf(Transition)).call.apply(_ref, [this].concat(args))), _this), _this._getDefaultStyles = function () {
      return _react.Children.map(_this.props.children, function (child) {
        if (child) {
          return {
            key: child.key,
            data: child,
            style: _extends({}, _this._getMountStyles())
          };
        }
      });
    }, _this._getStyles = function () {
      var _this$props = _this.props;
      var component = _this$props.component;
      var children = _this$props.children;
      var enter = _this$props.enter;


      return _react.Children.map(children, function (child) {
        if (!child) return;

        var key = child.key;


        if (!key) {
          console.error('You must provide a key for every child of Transition.');
        }

        return {
          key: key,
          data: child,
          style: _extends({}, (0, _toRMStyles2.default)(enter))
        };
      });
    }, _this._willEnter = function (_ref2) {
      var key = _ref2.key;
      var style = _ref2.style;
      var _this$props2 = _this.props;
      var appear = _this$props2.appear;
      var leave = _this$props2.leave;
      var onEnter = _this$props2.onEnter;

      var childStyles = (typeof appear === 'undefined' ? 'undefined' : _typeof(appear)) === 'object' ? appear : leave;

      // fire enter callback
      onEnter(childStyles);

      return childStyles;
    }, _this._willLeave = function (_ref3) {
      var key = _ref3.key;
      var style = _ref3.style;
      var _this$props3 = _this.props;
      var leave = _this$props3.leave;
      var onLeave = _this$props3.onLeave;

      // fire leaving callback

      onLeave(style);

      return (0, _toRMStyles2.default)(leave);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Transition, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props;
      var component = _props.component;
      var runOnMount = _props.runOnMount;
      var onEnter = _props.onEnter;
      var children = _props.children;


      if (runOnMount) {
        onEnter(this._getMountStyles());
      }
    }
  }, {
    key: '_getMountStyles',
    value: function _getMountStyles() {
      var _props2 = this.props;
      var runOnMount = _props2.runOnMount;
      var appear = _props2.appear;
      var enter = _props2.enter;
      var leave = _props2.leave;
      var children = _props2.children;

      return (0, _fromRMStyles2.default)(runOnMount ? appear || leave : enter);
    }
  }, {
    key: '_childrenToRender',
    value: function _childrenToRender(currValues) {
      return currValues.map(function (_ref4) {
        var key = _ref4.key;
        var data = _ref4.data;
        var style = _ref4.style;

        var child = data;
        var childStyle = child.props.style;

        // convert styles to a friendly structure
        style = (0, _configToStyle2.default)(style);

        // merge in any styles set by the user
        // Transition styles will take precedence
        if (childStyle) {
          style = _extends({}, childStyle, style);
        }

        return (0, _react.cloneElement)(child, { style: style });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var component = this.props.component;

      var props = (0, _specialAssign2.default)({}, this.props, checkedProps);

      return _react2.default.createElement(
        _reactMotion.TransitionMotion,
        {
          defaultStyles: this._getDefaultStyles(),
          styles: this._getStyles(),
          willEnter: this._willEnter,
          willLeave: this._willLeave
        },
        function (currValues) {
          var children = _this2._childrenToRender(currValues);
          var child = null;

          if (!component || component === 'false') {
            if (_react.Children.count(children) === 1) {
              child = _react.Children.only(children[0]);
            }
          } else {
            child = (0, _react.createElement)(component, props, children);
          }

          return child;
        }
      );
    }
  }]);

  return Transition;
}(_react.Component);

Transition.propTypes = checkedProps;
Transition.defaultProps = {
  component: 'div',
  runOnMount: true,
  enter: { opacity: 1 },
  leave: { opacity: 0 },
  onEnter: function onEnter() {
    return null;
  },
  onLeave: function onLeave() {
    return null;
  }
};
exports.default = Transition;