import React, { createContext, useContext, useState } from 'react';

export const Context = createContext(null);
const { Provider: ContextProvider, Consumer } = Context;

interface ProviderProps {
  children: React.ReactNodeArray | React.ReactNode;
  defaultState: any;
}

export function Provider(props: ProviderProps) {
  function update(state: any) {
    setState({...state,update: update});
  }
  const [state,setState] = useState({
    ...props.defaultState,
    update,
  });
  return (
    <ContextProvider value={state}>
      {props.children}
    </ContextProvider>
  )
}

export const withContext = (Component: any): any => {
  const WithContextComponent = (props:any) => (
    <Consumer>{context => <Component {...props} context={context} />}</Consumer>
  );

  // for Next.js
  if (Component.getInitialProps) {
    WithContextComponent.getInitialProps = Component.getInitialProps;
  }
  return WithContextComponent;
};

export function useContextQ(): any {
  return useContext(Context);
}

export default {
  Context,
  Provider,
  withContext,
  useContextQ,
}
