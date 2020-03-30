const isAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

export default { isAuthenticated, getUserName };
