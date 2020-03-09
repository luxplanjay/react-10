import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import tasksActions from './tasksActions';

const addTask = (state, action) => {
  return [...state, action.payload];
};

const removeTask = (state, action) => {
  return state.filter(task => task.id !== action.payload);
};

const toggleCompleted = (state, action) => {
  return state.map(task => {
    return task.id === action.payload.id ? action.payload : task;
  });
};

const items = createReducer([], {
  [tasksActions.fetchTasksSuccess]: (state, action) => action.payload,
  [tasksActions.addTaskSuccess]: addTask,
  [tasksActions.removeTaskSuccess]: removeTask,
  [tasksActions.toggleCompletedSuccess]: toggleCompleted,
});

const filter = createReducer('', {
  [tasksActions.changeFilter]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [tasksActions.fetchTasksRequest]: () => true,
  [tasksActions.fetchTasksSuccess]: () => false,
  [tasksActions.fetchTasksError]: () => false,
  [tasksActions.addTaskRequest]: () => true,
  [tasksActions.addTaskSuccess]: () => false,
  [tasksActions.addTaskError]: () => false,
  [tasksActions.removeTaskRequest]: () => true,
  [tasksActions.removeTaskSuccess]: () => false,
  [tasksActions.removeTaskError]: () => false,
  [tasksActions.toggleCompletedRequest]: () => true,
  [tasksActions.toggleCompletedSuccess]: () => false,
  [tasksActions.toggleCompletedError]: () => false,
});

export default combineReducers({
  items,
  loading,
  filter,
});
