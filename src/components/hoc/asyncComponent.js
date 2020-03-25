import React, { Component } from 'react';

const asyncComponent = loader => {
  return class AsyncComponent extends Component {
    state = {
      component: null,
    };

    componentDidMount() {
      loader().then(module => this.setState({ component: module.default }));
    }

    render() {
      const { component: LoadedComponent } = this.state;

      return LoadedComponent && <LoadedComponent />;
    }
  };
};

export default asyncComponent;
