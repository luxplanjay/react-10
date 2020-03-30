import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post('/users/signup', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch(error => dispatch(authActions.registerError(error)));
};

const logIn = credentials => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('/users/login', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch(error => dispatch(authActions.loginError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(error => authActions.getCurrentUserError(error));
};

const logOut = () => dispatch => {
  dispatch(authActions.logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutError(error)));
};

export default { register, logOut, logIn, getCurrentUser };
