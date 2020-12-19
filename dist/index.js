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
import React, { createContext, useContext, useState } from 'react';
export var Context = createContext(null);
var ContextProvider = Context.Provider, Consumer = Context.Consumer;
export function Provider(props) {
    function update(state) {
        setState(__assign(__assign({}, state), { update: update }));
    }
    var _a = useState(__assign(__assign({}, props.defaultState), { update: update })), state = _a[0], setState = _a[1];
    return (React.createElement(ContextProvider, { value: state }, props.children));
}
export var withContext = function (Component) {
    var WithContextComponent = function (props) { return (React.createElement(Consumer, null, function (context) { return React.createElement(Component, __assign({}, props, { context: context })); })); };
    // for Next.js
    if (Component.getInitialProps) {
        WithContextComponent.getInitialProps = Component.getInitialProps;
    }
    return WithContextComponent;
};
export function useContextQ() {
    return useContext(Context);
}
export default {
    Context: Context,
    Provider: Provider,
    withContext: withContext,
    useContextQ: useContextQ,
};
//# sourceMappingURL=index.js.map