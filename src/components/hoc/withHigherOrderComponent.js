import React, { Component } from 'react';

const withHigherOrderComponent = WrappedComponent => {
  return class WithHigherOrderComponent extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} extraProp="This prop is from HOC" />
      );
    }
  };
};

export default withHigherOrderComponent;
