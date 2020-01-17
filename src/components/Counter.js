import React from 'react';

function Counter({ initialValue, step }) {
  return <div>Counter</div>;
}

Counter.defaultProps = {
  initialValue: 1,
  step: 1,
};

export default Counter;
