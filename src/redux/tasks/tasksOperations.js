import axios from 'axios';
import tasksActions from './tasksActions';

axios.defaults.baseURL = 'http://localhost:2000';

const addTask = text => dispatch => {
  dispatch(tasksActions.addTaskRequest());

  axios
    .post('/tasks', { text, completed: false })
    .then(({ data }) => dispatch(tasksActions.addTaskSuccess(data)))
    .catch(error => dispatch(tasksActions.addTaskError(error)));
};

const fetchTasks = () => dispatch => {
  dispatch(tasksActions.fetchTasksRequest());

  axios
    .get('/tasks')
    .then(({ data }) => dispatch(tasksActions.fetchTasksSuccess(data)))
    .catch(error => dispatch(tasksActions.fetchTasksError(error)));
};

const removeTask = id => dispatch => {
  dispatch(tasksActions.removeTaskRequest());

  axios
    .delete(`/tasks/${id}`)
    .then(() => dispatch(tasksActions.removeTaskSuccess(id)))
    .catch(error => dispatch(tasksActions.removeTaskError(error)));
};

const toggleCompleted = id => dispatch => {
  dispatch(tasksActions.toggleCompletedRequest());

  axios
    .patch(`/tasks/${id}`, { completed: true })
    .then(({ data }) => dispatch(tasksActions.toggleCompletedSuccess(data)))
    .catch(error => dispatch(tasksActions.toggleCompletedError(error)));
};

export default {
  addTask,
  fetchTasks,
  removeTask,
  toggleCompleted,
};
