import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasks/tasksReducer';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
