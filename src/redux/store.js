import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasks/tasksReducer';
import counterReducer from './counter/counterReducer';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    counter: counterReducer,
  },
});

export default store;
