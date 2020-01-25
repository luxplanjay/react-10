import React, { Component } from 'react';

import React from 'react';

export default function Hint() {
  return (
    <div>
      <button onClick={() => updateProp('good')}>Good</button>
      <button onClick={() => updateProp('neutral')}>Neutral</button>
      <button>Bad</button>
    </div>
  );
}

update = type => {
  this.setState(state => {
    return {
      [type]: state[type] + 1,
    };
  });
};
