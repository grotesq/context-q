import React, { useContext, useEffect, useState } from 'react';

const Context = React.createContext();
const { Provider: ContextProvider, Consumer } = Context;

export class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...(props.defaultState || {}),
      update: (state, callback) => this.setState(state, callback),
    };
  }

  render() {
    return (
      <ContextProvider value={this.state}>
        {this.props.children}
      </ContextProvider>
    );
  }
}

export const withContext = Component => {
  const WithContextComponent = props => (
    <Consumer>{context => <Component {...props} context={context} />}</Consumer>
  );

  // for Next.js
  if (Component.getInitialProps) {
    WithContextComponent.getInitialProps = Component.getInitialProps;
  }
  return WithContextComponent;
};

export default Context;
