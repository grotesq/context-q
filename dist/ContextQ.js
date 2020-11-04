"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withContext = exports.Provider = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Context = /*#__PURE__*/_react.default.createContext();

var ContextProvider = Context.Provider,
    Consumer = Context.Consumer;

class Provider extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = _objectSpread(_objectSpread({}, props.defaultState || {}), {}, {
      update: (state, callback) => this.setState(state, callback)
    });
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(ContextProvider, {
      value: this.state
    }, this.props.children);
  }

}

exports.Provider = Provider;

var withContext = Component => {
  var WithContextComponent = props => /*#__PURE__*/_react.default.createElement(Consumer, null, context => /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
    context: context
  }))); // for Next.js


  if (Component.getInitialProps) {
    WithContextComponent.getInitialProps = Component.getInitialProps;
  }

  return WithContextComponent;
};

exports.withContext = withContext;
var _default = Context;
exports.default = _default;
