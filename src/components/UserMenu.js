import React from 'react';
import withAuthContext from './hoc/withAuthContext';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ auth }) => (
  <>
    {auth.user ? (
      <div style={styles.container}>
        <img src={auth.user.avatar} alt="" width="32" style={styles.avatar} />
        <span style={styles.name}>Welcome, {auth.user.name}</span>
        <button type="button" onClick={auth.onLogOut}>
          Log Out
        </button>
      </div>
    ) : (
      <button type="button" onClick={auth.onLogIn}>
        Log In
      </button>
    )}
  </>
);

export default withAuthContext(UserMenu);
