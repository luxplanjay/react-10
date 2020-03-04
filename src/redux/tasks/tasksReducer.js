import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import tasksActions from './tasksActions';

const addTask = (state, action) => {
  return [...state, action.payload.task];
};

const remoevTask = (state, action) => {
  return state.filter(task => task.id !== action.payload);
};

const toggleCompleted = (state, action) => {
  return state.map(task => {
    return task.id === action.payload
      ? { ...task, completed: !task.completed }
      : task;
  });
};

const items = createReducer([], {
  [tasksActions.addTask]: addTask,
  [tasksActions.removeTask]: remoevTask,
  [tasksActions.toggleCompleted]: toggleCompleted,
});

const filter = createReducer('', {
  [tasksActions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
