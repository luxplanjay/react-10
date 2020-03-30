import React from 'react';
import AppBar from './AppBar';

const styles = {
  container: {
    width: '80vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 24px',
  },
};

const Layout = ({ children }) => (
  <div style={styles.container}>
    <AppBar />
    {children}
  </div>
);

export default Layout;
