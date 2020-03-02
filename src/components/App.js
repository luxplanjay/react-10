import React from 'react';
import Timer from './Timer';
import StepSelector from './StepSelector';

const stepOptions = [5, 10, 15, 20, 25, 30];

const App = () => (
  <div>
    <Timer />
    <StepSelector options={stepOptions} />
  </div>
);

export default App;
