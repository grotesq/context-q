"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContextQ = exports.withContext = exports.Provider = exports.Context = void 0;
var react_1 = __importStar(require("react"));
exports.Context = react_1.createContext(null);
var ContextProvider = exports.Context.Provider, Consumer = exports.Context.Consumer;
var Provider = function (props) {
    function update(state) {
        setState(state);
        setState(function (prev) { return (__assign(__assign({}, prev), { update: update })); });
    }
    var _a = react_1.useState(__assign(__assign({}, props.defaultState), { update: update })), state = _a[0], setState = _a[1];
    return react_1.default.createElement(ContextProvider, { value: state }, props.children);
};
exports.Provider = Provider;
var withContext = function (Component) {
    var WithContextComponent = function (props) { return (react_1.default.createElement(Consumer, null, function (context) { return react_1.default.createElement(Component, __assign({}, props, { context: context })); })); };
    // for Next.js
    if (Component.getInitialProps) {
        WithContextComponent.getInitialProps = Component.getInitialProps;
    }
    return WithContextComponent;
};
exports.withContext = withContext;
function useContextQ() {
    return react_1.useContext(exports.Context);
}
exports.useContextQ = useContextQ;
exports.default = {
    Context: exports.Context,
    Provider: exports.Provider,
    withContext: exports.withContext,
    useContextQ: useContextQ,
};
//# sourceMappingURL=index.js.map