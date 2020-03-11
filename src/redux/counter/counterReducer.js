import { createReducer } from '@reduxjs/toolkit';
import counterActions from './counterActions';

const counter = createReducer(0, {
  [counterActions.increment]: state => state + 1,
});

export default counter;
