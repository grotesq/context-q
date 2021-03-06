import React from 'react';
export declare const Context: React.Context<null>;
interface ProviderProps {
    children: React.ReactNodeArray | React.ReactNode;
    defaultState: any;
}
export declare const Provider: (props: ProviderProps) => JSX.Element;
export declare const withContext: (Component: any) => any;
export declare function useContextQ(): any;
declare const _default: {
    Context: React.Context<null>;
    Provider: (props: ProviderProps) => JSX.Element;
    withContext: (Component: any) => any;
    useContextQ: typeof useContextQ;
};
export default _default;
