import { createSelector } from '@reduxjs/toolkit';

const getTasks = state => state.tasks.items;

const getLoading = state => state.tasks.loading;

const getFilter = state => state.tasks.filter;

const getVisibleTasks = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    return tasks.filter(task =>
      task.text.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const getTaskById = createSelector(
  [(_, taskId) => taskId, getTasks],
  (taskId, tasks) => tasks.find(task => task.id === taskId),
);

export default {
  getTasks,
  getLoading,
  getFilter,
  getVisibleTasks,
  getTaskById,
};
